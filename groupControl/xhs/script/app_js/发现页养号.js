define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

var device = Device.searchObject(sigmaConst.DevSelectOne);
// 创建手机对象
// var device = Device.getMain();
if (!device) {
    print(device.name + " Cannot find device");
    throw "Cannot find device";
}
var keyDict = ['晚餐','番茄汤','减脂','火锅','打工人','一周食谱']
var clickIdsList = [];
var deviceName = device.name;
var runXhs = "com.xingin.xhs";

// 打印设备名称
printDeviceName();

// 运行逻辑
function run() {
    // TODO: 添加逻辑代码
    openApp(runXhs)
    for(var i = 0;i < 40;i++){
      basicAction(2)
      slideUp(10);
      delay(2000);
  }
}

run();

function basicAction(num){
    for(var i = 0 ;i <= num ;i++){
      getIds();
      delay(2000);
      clickIds();
      //进入详细页面浏览
      glide(1);
    }


}

function detailAction(){
  var bar = device.sendAai({
   query: "C:.TextView&&R:.bgp",
   action: "getText",
  });
  if(bar != null){
    var resultBar = bar.retval.split("/").pop();
    if (resultBar < 2) {
      resultBar = 2;
    }

 slideRight(resultBar);
}
 //获取标题
 var titleText = device.sendAai({ query: "C:.TextView&&R:.cz0", action: "getText" })
 glide(randomNum(1,4))
 delay(randomNum(1000, 6000));
 for (var i = 0; i < keyDict.length; i++) {
  if (titleText.retval.includes(keyDict[i])) {
    printf(titleText + " 包含 " + keyDict[i]); // 输出匹配的词
    //进入作者页面
    authorDetail();
  }
}
 device.sendAai({ query: "C:.ImageView&&R:.ng", action: "click" })
}

function getIds(){
  var titleIds = device.sendAai({ query: "C:android.view.View&&R:.e1x", action: "getIds" });//获取可见ids
  clickIdsList.push(titleIds.ids)//将可见ids添加到数组里
  printf(clickIdsList)
}

function clickIds(){
  //概率点击
  var ret = checkProbability(5)
  if(ret){
    ids = clickIdsList[randomNum(0,clickIdsList.length-1)]
    device.sendAai({ query: "ID:" + ids, action: "click" });

    delay(1000)
    if (get_Activity().indexOf("NoteDetailActivity") != -1) {
      //笔记详情页
      detailAction();
    } else if (get_Activity().indexOf("DetailFeedActivity" != -1)) {
      delay(randomNum(1000, 8000));
      device.sendAai({ query: "C:.ImageView&&R:.backButton", action: "click" });
    } else {
      printf("不是笔记和视频页面");
    }
    clickIdsList = [];
  }
}

function glide(glideNum) {
  for (var i = 0; i <= glideNum; i++) {
    device.move(tcConst.movement.pageDown);
    delay(1500);
  }
}

function slideRight(slideNum) {
  for (var i = 0; i <= slideNum; i++) {
    device.shift(tcConst.KEY_LEFT);
    delay(1500);
  }
}


function slideUp(upNum) {
  for (var i = 0; i <= upNum; i++) {
    device.move(tcConst.movement.pageUp);
  }
}

function authorDetail(){
  device.sendAai({ query: "C:.TextView&&R:.nickNameTV", action: "click" });
  glide(randomNum(2,6))
  device.sendAai({query: "C:.ImageView&&R:.daq", action: "click"})
}

function openApp(appName){
  for (var i = 0; i < 3; i++) {
      try {
          var runapp = device.runApp(appName);
          delay(1000);
          var ret = get_Activity(); // 获取当前活动页面
          if (runapp == 0 && ret.indexOf('com.xingin.xhs') != -1) {
              print(deviceName + ':启动小红书成功');
              break;
          } else {
              print(deviceName +  ':启动小红书失败');
              delay(2000);
          }
      } catch (err) {
          print(deviceName + err );
      }
  }
}

function checkProbability(probability) {
  var randomNum = Math.floor(Math.random() * 10) + 1; // 生成一个1到10之间的随机整数
  if (randomNum <= probability) {
    return true; // 在20%的概率下触发操作
  } else {
    return false;
  }
}

function get_Activity() {
    for (var q = 0; q < 3; q++) {
        var ret = device.getActivity();
        delay(500);
        if (ret) {
            return ret;
        }
    }
    print(deviceName + ' 3次get_Activity都失败');
}

// 打印设备名称
function printDeviceName() {
    print("Device Name: " + deviceName);
}

// 生成指定范围的随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
