define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

// 搜索设备
var device = Device.searchObject(tcConst.DevSelectOne);

// 设置要运行的应用程序名称和点击操作的元素
const runAppName = "com.android.settings";
const runAppName1 = "com.xingin.xhs";
const clickNet = "无线和网络";
const clickMoveNet = "移动网络";
const clickPhoneLogin = "手机号登录";
const clickSend = "验证并登录";
const clickAgree = "同意";
const clickLogin = "登录";

function getPhoneNumber(){
    var runapp = device.runApp(runAppName);
    delay(3000)

    device.clickSync(clickNet);
    device.clickSync(clickMoveNet);
    delay(3000)
    var data = device.sendAai({ query: "C:.TextView&&R:android:id/title", action: "getText" });
    delay(1000)
    print(data)
    var cardOneNetwork = data.retval.find(function(item) {
      return item.includes('卡 1 网络');
//        return item.startsWith('卡 1 网络');
    });
//    var phoneRegex = /\+86(\d+)/;
   var phoneRegex = /\((\d+)\)/;
//     var phoneRegex = /(?:\(\d+\)|\+\d+(?=\(+86)|)(\d+)/;
    // var phoneRegex = /(?:\(\+?\d+\)(?:-\d+)?|\+\d+(?=\(\+?86\)|))(86)?(\d+)/g;
    var matches = cardOneNetwork.match(phoneRegex);
    var phoneNumber = matches && matches[1];
    return phoneNumber;
}
var number = getPhoneNumber();
printf(device.name + "当前的手机号:"+number);

/*  开始运行小红书 */

var runapp = device.runApp(runAppName1);

delay(8000) //后续根据元素出现进行等待
var ret1 = device.clickSync( clickAgree)
delay(2000)
var agree = device.sendAai({ query: "C:.Button&&R:.d_y", action: "click" });
delay(2000)
device.clickSync(clickPhoneLogin);
var input = device.inputTextSync(0, number);
var agree = device.sendAai({ query: "C:.Button&&R:.d_y", action: "click" });
device.clickSync(clickSend);
delay(1000)
device.click(472,350,tcConst.STATE_PRESS);
delay(8000)
for(var i = 0;i<5;i++){
    device.click(472,350,tcConst.STATE_PRESS);
    delay(500)
    var yzm = device.getClipboardText();
}
var input1 = device.inputTextSync(1,yzm);
delay(1000)
device.clickSync(clickLogin);
