define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

// 创建手机对象

var device = Device.searchObject(sigmaConst.DevSelectOne);
if (!device) {
  throw "Cannot find device";
}
var deviceName = device.name;
printf(device.name + "---开始下载图片");

var randomNumber = Math.floor(Math.random() * 30) + 1;
var fileName = randomNumber + ".jpg";  // 文件名，结合随机数

// 其他代码...

var filePath = "C:\\Users\\FOO\\Desktop\\headimage\\" + fileName;  // 拼接文件路径
var destinationPath = "/sdcard/Pictures/Screenshots";

var ret = device.upload(filePath, destinationPath);
printf(deviceName + ret)
// dvice.upload("C:\\Users\\FOO\\Desktop\\image\\1.jpg", "/sdcard/Pictures/Screenshots");
