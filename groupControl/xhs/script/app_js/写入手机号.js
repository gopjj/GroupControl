define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

// 搜索设备
var device = Device.searchObject(sigmaConst.DevSelectOne);

// 设置要运行的应用程序名称和点击操作的元素
const runAppName = "com.android.settings";
const clickNet = "无线和网络";
const cardAdmin = "双卡管理";
const cardName = "中国联通";
const ok = "确定";

// 检查设备是否存在
if (!device) {
    throw "Cannot find device";
}

// 打印设备名称
printf(device.name);
var deviceName = device.name;
var arrayStr = excelUtils.readExcel("C:/Users/FOO/Desktop/phone.xlsx", "Sheet1");

if (arrayStr != null) {
    print("The contents of the Excel table are as follows:");
    for(var i = 1; i < arrayStr.length; i++) {
         var name = arrayStr[i][0];
        for(var j = 0;j < arrayStr[i].length;j++) {
            var numberPhone = arrayStr[i][j];
        }
        if(name == deviceName ){
            print(numberPhone)
            writePhone(numberPhone);
            break;
        }
    }
} else {
    print("写入失败: 错误提示 " + lastError());
}
function writePhone(numberPhone){
    var runapp = device.runApp(runAppName);
    delay(1500)
    device.clickSync(clickNet);
    delay(800)
    device.clickSync(cardAdmin);
    delay(800)

    device.sendAai({ query: "C:.ImageView&&R:.arrow_image_card_1", action: "click" });
    delay(500)
    device.inputTextSync(0,cardName);
    device.inputTextSync(1,numberPhone);
    device.clickSync(ok);
}
