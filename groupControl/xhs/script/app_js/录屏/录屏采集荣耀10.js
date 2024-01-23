/*
    ---小红书搜索录屏
*/
define("version","9.0.u1254303");
define("resolution","1080*1920");
define("requireVersion","3.4.0");
var calendarname = "com.android.calendar"
var device = Device.searchObject(sigmaConst.DevSelectOne);
var uiSelector = new UiSelector(device);
var calendarname = "com.android.calendar"
if(!device){
    throw "找不到设备";
};
/* 修改关键词 */

var keyword = ["防脱洗发水","防脱精华"]

/* 修改关键词 */

delay(1500)
var runAppName = "com.xingin.xhs"
var runapp = device.runApp(runAppName);
delay(3000);
if (runapp == 0) {
    ret = get_Activity()
    if (ret.indexOf('intersitial.ui') != -1) {
        device.click(960, 130, tcConst.STATE_PRESS);
        delay(1000);
    }
    printf(keyword)     //输出关键词
    open_ScreenRecord(); //打开录屏
    run(keyword)
    delay(5000);
    device.closeApp(runAppName);
    delay(5000)
    device.click(195,17);
    delay(2000);
    device.swipe([500, 10], [500, 1200], 3);
    delay(1500)
    device.swipe([540,630], [540, 1700], 2);
    delay(800)
    device.clickSync("屏幕录制");
    print(device.name + "-----------结束")
    device.closeApp("com.huawei.hidisk");
    } else {
    print(device.name + '打开小红书失败');
    delay(2000);
    }

function Restart_App(runAppName) {
  for(var i = 0; i < 3; i++){
     try {
       var runapp = device.runApp(appname);   //运行抖音App
       delay(3000);
       if(runapp == 0){
       //ret = get_Activity();
         printf("启动APP执行成功:",+device.name);
         break;
        }else {
            printf("启动APP执行失败:"+device.name);
            delay(2000);
        }
     } catch (err) {
            printf("ERROR:"+device.name+"----"+err);
            }
          }
        }
function run(keywords) {
    device.sendAai({ query: "C:.ImageView&&R:.az9", action: "click" });

    for (var i = 0; i < keywords.length; i++) {
       outerloop:for (var q = 0; q < 1; q++) {
            if (get_Activity().indexOf('index') != -1) {

                device.click(970, 140, tcConst.STATE_PRESS);
//                print(device.name + "进入小红书搜索页");
                delay(1000);
                device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);
                delay(1000);
            }else{
                device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                delay(2000)
            }
              // 输入关键
            printf(keywords[i]+"-----"+i)
            var keyword = device.inputTextSync(0, keywords[i]);

            delay(2000);
            var search_text = device.sendAai({ query: "C:.EditText&&R:.exy", action: "getText" });
//                print(device.name + search_text)
            if (search_text.retval == keywords[i]) {
                print(device.name + "输入：" + keywords[i]);
                break outerloop;
            }
            }

        delay(1000);
        // 点击搜索按钮
        device.sendAai({ query: "C:.Button&&R:.ey3", action: "click" });
        // 滑动页面
        for(var o = 0; o < 6;o++){
          delay(1500);
          ret = device.sendAai({ query: "C:.ImageView&&R:.fs3", action: "getBounds" });
          if(ret == null ){
                delay(5000)
                printf(device.name + "等待");

          }
          slide = device.move(tcConst.movement.shiftDown);
        }

        }
    }

function get_Activity() {
    for (var q = 0; q < 3; q++) {
        var ret = device.getActivity();
        delay(500);
        if (ret) {
            return ret
        }
    }
    print(device.name + '3次get_Activity都失败')
}


function download() {
    try {
        printf(device.name + "开始下载");
        var fileName = device.name + ".mp4";
        var downloadPath = "/sdcard/Pictures/Screenshots/" + fileName;
        ret = device.download(downloadPath, "C:\\Users\\mac\\Desktop\\lup\\10.2");
        print(ret);
        if (ret == 0) {
            printf(device.name + "下载成功")
            delay(2000);
            ret1 = device.rmFile(downloadPath);
            if (ret1 == 0) {
                printf("删除成功");
            }
        }
    } catch (error) {
        // 异常处理逻辑
        console.log("发生错误：" + error);
        printf("发生错误" + error);
    }
}

function replaceName() {
  try {
    printf(device.name + "开始更改文件名");
    device.clickSync("文件管理");
    delay(1500)
    device.clickSync("搜索文件");
    delay(1500);
    device.inputText("SVID");
    delay(3000);
    ret = device.sendAai({ query: "C:.TextView&&R:.search_result", postAction: "getBounds" });
    if (ret == null) {
      printf(device.name + "搜索文件失败");
    }
    device.click(240, 404, tcConst.STATE_DOWN);
    delay(1000);
    device.clickSync("更多");
    delay(1000);
    device.clickSync("重命名");
    delay(1000)
    device.inputText(device.name);
    delay(500);
    device.clickSync("确定");
    delay(1000);
  } catch (error) {
    // 异常处理逻辑
    printf("发生错误" + error);
  }
}





function open_ScreenRecord() {
  try {
    printf(device.name + "打开屏幕录制中");
    device.swipe([500, 10], [500, 1200], 3);
    delay(1500);
    clear = device.sendAai({ query: "D:清除所有通知", postAction: "getText" });
    if (clear != null) {
      device.sendAai({ query: "D:清除所有通知", postAction: "click" });
      print("清除所有通知");
      delay(2000);
      device.swipe([500, 10], [500, 1200], 3);
      delay(500);
    }
    device.swipe([540,630], [540, 1700], 2);
    /* 作下拉成功是否成功进行处理 */
    // ret = uiSelector.text("免打扰").findOne();
    // if (ret == null) {
    //   device.click(526, 1845, tcConst.STATE_PRESS);
    //   printf("11111");
    //   delay(500);
    //   device.swipe([460, 10], [460, 1200], 3);
    //   delay(500);
    //   device.swipe([460, 1200], [500, 1500], 2);
    //   delay(500);
    //   printf(device.name + "再次下拉成功");
    // }

    delay(2000);
    device.clickSync("屏幕录制");
    delay(1000);
    clip = device.sendAai({ query: "T:*录制屏幕短片*", action: "getText" });
    if (clip != null) {
      message = device.sendAai({ query: "T:*不再提示*", action: "getText" });
      if (message != null) {
        delay(1000);
        printf("点击不再提示");
        device.click(98, 1424);
      }
      device.clickSync("同意");
      delay(2000);
      device.clickSync("跳过");
    }
    delay(1500);
    // device.clickSync("无声");
    // device.clickSync("确定");
    delay(4000);
    printf(device.name + "开始录制");
    //展示时间
     device.swipe([500, 10], [500, 1200], 3);
    delay(5000);
   device.sendAai({preAction:aaix("sendKey", tcConst.keyCodes.BACK)})

  } catch (error) {
    // 异常处理逻辑
    printf("发生错误" + error);
    device.clickSync("屏幕录制");
    open_ScreenRecord(); // 再次执行该函数
  }
}
