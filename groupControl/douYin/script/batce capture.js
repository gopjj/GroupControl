define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");
var device = Device.searchObject(sigmaConst.DevSelectOne);
var device = Device.getMain();
var xhsname = "com.xingin.xhs";
var calendarname = "com.android.calendar";


var ret1 = device.getInstalledAPKList();

 //判断该应用是否存在
if (ret1.indexOf("com.xingin.xhs") >= 0) {
    print("该设备存在xhs");
} else {
    print("该设备不存在xhs");
}



//打开app
function Restart_App(appname) {
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


function get_Activity() {
    for (var i = 0; i < 3; i++) {
        var ret = device.getActivity();

        delay(500);
        if (ret) {
          print("The activity running in the foreground is: " + ret);
          return ret;
        }
    }
    print(device.name + '3次get_Activity都失败')
}

//关闭app
function Close_App(appname){
  try{
      var closeapp = device.closeApp(appname);
      if(closeapp == 0){
        printf("关闭抖音执行成功:"+device.name);
      }else{
        printf("关闭抖音执行成功:"+device.name);
      }
  } catch (err) {
    printf("ERROR:"+device.name+"----"+err)
  }
}


//关键词搜索
function Search_Page(){
    device.click(998,133,tcConst.STATE_PRESS);
}

function Search_key(){
    delay(1000);
    device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);
    device.inputText("美白精华");
    device.click(992,138,tcConst.STATE_PRESS);
}


Restart_App(calendarname);
delay(5000);
Restart_App(xhsname);
delay(5000);
Search_Page();
Search_key();
delay(3000);
