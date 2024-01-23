/*
 * File Name: batchCollector.js
 * Author: John Doe
 * Created Date: 2023-08-09
 * Version: 1.0.0
 *
 *  该代码用于实现抖音作品信息批量采集
 */


/*
 *  异步模块定义，定义 version resolution,requireVersion 三个模块的属性
 */
define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

//数值定义
var device = Device.searchObject(sigmaConst.DevSelectOne);
//获取当前主控设备对象
var device = Device.getMain();
var douyinapp = "com.ss.android.ugc.aweme";
var calendarname = "com.android.calendar"

//批量采集 数值存放
var content_num = 100;    //设置最大数值为100
var info_ids_list = [];   //设置ids列表
var gjc_key = ["美白精华","水乳推荐"];
var gjc_key2 = [];
var file_path = '' //文件路径

//是否存在app
var ret1 = device.getInstalledAPKList();
if (ret1.indexOf("com.ss.android.ugc.aweme") >= 0) {
    print(device.name + "存在抖音");
} else {
    print(device.name + "不存在抖音");
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


/*
 *创建一个新的排列数组
 */
function Realign(){
    for(var i=0;i<gjc_key.length+10;i++){
        var rdm = Math.floor(Math.random()*gjc_key.length)
        gjc_key.push(gjc_key[rdm])	//根据随机关键词的序号进行添加到数组最后面
        gjc_key.splice(rdm,1)		//根据随机值进行删除
    }
    printf("当前关键词列表:"+gjc_key);
}

//调用函数

delay(3000);
Restart_App(douyinapp);
Realign();



/*
 *主运行函数
 *@param 接受一个关键词列表
 */
function Run(key){

    //获取日期字符串，并格式化----YYYY.MMMM.DDDD
    var date = new Date();
    var new_time = date.getFullYear() + "." + (date.getMonth() + 1)+ "." + date.getDate();

    //设置存放文件路径
    var file_path = "/sdcard/" + device.name + '_' + new_time + "_content.txt";
    print("11111");

    for (var j = 0; j < key.length; j++){
        send_key(key[j]);
        delay(2000);
        //点击搜索按钮
        device.sendAai({ query: "C:.TextView&&R:.v6q", action: "click" });
        search_key(file_path, key[j], new_time);
        info_ids_list = []
        gjc_key2.push(key[j]);
    }
}


/*
 *进入搜索页面
 *@param 接受一个关键词列表
 */
 function send_key(key){
    for(var i = 0; i < 3; i++){
        //进入抖音搜索页
        device.sendAai({ query: "C:.Button&&R:.ji3", action: "click" });
        printf(device.name + ">>> 进入抖音搜索页！");
        delay(1000);
        device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);
        delay(1000);
    //输入关键词
    try{
        var keyword = device.inputTextSync(0,key);
        printf("当前输入关键词---"+key);
        delay(1000);
        var search_text = device.sendAai({ query: "C:.EditText&&R:.et_search_kw", action: "getText" });
        printf("--->>>"+search_text)
        if(keyword == true && search_text.retval == key){
            printf(device.name + "输入：" + key);
            break;
        }else{
            printf(device.name + "---错误关键词");
            device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS)
        }
      }catch (err){
            printf("ERROR:"+device.name + "---" + err);
      }
    }
}


/*
 *进入搜索页面
 *@param 接受一个关键词列表
 */
function crawl(file_path,gjc,new_time){
    for (var i = 0; i  < 2;i++){
         error();
         for(var k = 0; k < 2;k++){
              //商品 · 推荐消除
              var ad_item = device.sendAai({ query: "C:*com.lynx.tasm.behavior.ui.text.FlattenUIText",action: "getText"});
              ad_item_1 = ad_item.retval[0];
              var isCharsExist = new RegExp("合集").test(ad_item_1);
              if(ad_item_1 == "商品 · " || ad_item_1 == "经验 · "){
                  var fb = device.sendAai({ query:  "T:*反馈入口*",action: "click"});
                  delay(1000);
                  if(fb){
                      delay(1000);
                      device.sendAai({ query: "T:*内容质量差*",action: "click"});
                  }
              }else if(isCharsExist){    //是否包含合集，进行判断是图文还是视频
                  var group_video = device.sendAai({query: "C:com.ss.android.ugc.aweme.xsearch.video.LynxSearchVideo",action: "getBounds"});
                  var group_photo = device.sendAai({query: "C:com.ss.android.ugc.aweme.xsearch.photosalbum.LynxSearchPhotosAlbum",action: "getBounds"});
                  if(group_video)
                  {
                      printf(group_video);
                  }
                  if(group_photo)
                  {
                      printf(group_photo);
                  }
              }
              var video = device.sendAai({query: "C:android.view.View&&R:.l==",action: "getBounds"});
              //var photo = device.sendAai({query: "C:.ImageView&&R:.jm3",action: "getBounds"});
              if(video){
                printf("video:"+video);
              }
              //合集

              //获取页面上的信息

         }
    }



    // var ls = '';
    // delay(2000);
    // //device.sendAai({ query: "C:.ImageView&&R:.dfs", action: "click" });
    // //device.sendAai({ query: "T:*网络好像断了*", action: "getBounds" });
    // var ad_item = device.sendAai({ query: "C:*com.lynx.tasm.behavior.ui.text.FlattenUIText",action: "getText"});
    // //屏蔽广告
    // if(ad_item !=  null){
    //     var o = device.sendAai({ query:  "T:*反馈入口*",action: "click"});
    //     print("侧边栏成功"+o);
    //     delay(2000);
    //     var p = device.sendAai({ query: "T:*内容质量差*",action: "click"});
    //     print("点击成功"+p);
    // }
    // print("1111");
    // var sp1 = device.sendAai({query:"C:.ImageView&&R:.im4",action:"getBounds"});
    // printf(sp1);
    // device.move(tcConst.movement.shiftDown);
    // device.move(tcConst.movement.shiftDown);
    // device.move(tcConst.movement.shiftDown);
    //
    // device.move(tcConst.movement.shiftDown);
    // device.move(tcConst.movement.shiftDown);
    // var sp1 = device.sendAai({query:"C:.ImageView&&R:.im4",action:"getBounds"});
    // printf(sp1);
    // device.move(tcConst.movement.shiftDown);
    // device.move(tcConst.movement.shiftDown);
    // var sp = device.sendAai({query:"C:com.ss.android.ugc.aweme.xsearch.video.LynxSearchVideo",action:"getBounds"});
    // printf(sp);
    // device.move(tcConst.movement.shiftDown);
    // var sp =device.sendAai({query:"C:com.ss.android.ugc.aweme.xsearch.video.LynxSearchVideo",action:"getBounds"});
    // printf(sp);
    // // if(group != null){
    // //     delay(5000);
    // var sp =device.sendAai({query:"C:com.ss.android.ugc.aweme.xsearch.video.LynxSearchVideo",action:"getBounds"});
    // printf(sp);
    // //     delay(8000);
    // // }
    // // device.move(tcConst.movement.shiftDown);
    // delay(2000);
    // print("success");
    // //print("item:"+item_ad)
    //if(item_ad){
      //print("没有广告")
    //
    // for(var i = 0; i < 300; i++){
    //     error();
    //     // for(var k = 0; k < 2;k++){
    //     //     //var img_info = device.sendAai({ query: "C:.TextView&&R:.tv_desc" ,action:"getBounds")};
    //     //     for (var z = 0; z < gjc.length; z++) {
    //     //       click_key(gjc, key);    //点击的
    //     //   }
    //     // }
    // }
}


/*
 *网络错误
 *@param 接受一个关键词列表
 */
function error() {
    for (var kk = 0; kk < 3; kk++) {
        var error_text = device.sendAai({ query: "T:*网络错误*", action: "getBounds" });
        if (error_text) {
            delay(100000);
            print(device.name + '网络中断,重新点击')
            device.sendAai({ query: "C:.ImageView&&R.v6q", action: "click" });
            delay(3000);

        }else{
            break
        }
    }
}



function get_Activity() {
    for (var q = 0; q < 3; q++) {
        var ret = device.getActivity();
        delay(500);
        if (ret) {
            return ret
            printf("ret："+ret);
        }
    }
    print(device.name + '3次get_Activity都失败')
}
Run(gjc_key);
