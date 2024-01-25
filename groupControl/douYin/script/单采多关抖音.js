/*
    单个采集_多个关键词脚本_抖音
    8-3
    1
*/
define("version", "9.0.u1254303");    //定义APP版本号
define("resolution", "1080*1920");     //定义分辨率 1080*1920
define("requireVersion", "3.4.0");

var device = Device.searchObject(sigmaConst.DevSelectOne);
var device = Device.getMain();    //获取当前主控设备对象

/* 单采_多个关键词_数据字典存放 */
var key_dict = {'美白精华':['冷白皮属性大爆发就是它了','全身白白！平价大碗！']}

var caij_end = []
const dic = {}

if ( ! device ) {   //判断当前设备是否在线
    print("No device found");
} else {
    var ret = device.getActivity();
    print("The activity running in the foreground is: " + ret);
}


/*
        获取抖音的Activity
*/
function get_Activity() {
    for (var i = 0; i < 3; i++) {
        var ret = device.getActivity();
        delay(500);
        if (ret) {
            return ret
        }
    }
    print(device.name + '3次get_Activity都失败')
}


/**
*设置公共函数：启动测试的APP
*/
function restart_app_douyin() {
  for(var i = 0; i < 3; i++){
    try {
      var runAppName = "com.ss.android.ugc.aweme";   //存放App应用程序
      var runapp = device.runApp(runAppName);   //运行抖音App
      delay(3000);
      if(runapp == 0){
          ret = get_Activity();
          /*
              关闭广告处理
          */
          printf("启动APP执行成功:",+device.name);
          break;
      }else {
          printf("启动APP执行失败:"+device.name);
          delay(2000);
      }
    } catch (err) {
      printf("ERROR:"+device.name+"---"+err);
    }
  }
}


/*
  进入搜索栏页面
*/
function page1_search_click(){
    if (get_Activity().indexOf('update') != -1) {   //判
        device.sendAai({ query: "C:.ImageView&&R:.az9", action: "click" });
    }
    // var a = get_Activity().indexOf('index');
    // printf("a:"+a);
    if (get_Activity().indexOf('index') == -1) {    //进入搜索栏框
        device.click(984, 118, tcConst.STATE_PRESS);
        printf("successful:(Enter Douyin search page)");
        delay(3000);
        //device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);
    }else{
        printf("点击搜索栏失败");
    }
}

/*
    搜索栏输入关键词
*/
function page1_search_input(key_dict){
    for (var key in key_dict) {
        device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);    //打开Sigma输入法
        delay(3000);
        try{
            var keyword = device.inputTextSync(0, key);
            print(device.name +":---"+ keyword);
            delay(3000);
            print(device.name + "输入：" + key);
        }catch(err){
            print(device.name + err);
        }
        delay(3000);
        device.click(980, 135, tcConst.STATE_PRESS);
        delay(1000);
        //device.sendAai({ query: "C:.TextView&&R:.v6q", action: "click" });
    }
    search_key(key_dict[key], key)
}


// /*
//     滑动页面
// */
// function page1_slide(author_key, key){
//     var ls = ''
//     caij_end = []
//     for (var i = 0; i < 110; i++) {
//         error()
//         if (i == 80) {
//             if (zuixin(key, true)){
//                 var videoCount = 0;
//                 if (videoCount >= 200) {
//                   break;
//                 }
//             }
//         }
//     for (var x = 0; x < 2; x++) {
//         for (var z = 0; z < author_key.length; z++) {
//               click_key(author_key[z], key);
//         }
//         if (caij_end && author_key) {
//             for (var j = 0; j < caij_end.length; j++) {
//                  if (author_key.indexOf(caij_end[j]) != -1) {
//                       author_key.splice(author_key.indexOf(caij_end[j]), 1)
//                       print(device.name + "关键词:" + key + "   已经完成:" + caij_end + '  未完成:' + author_key)
//                     }
//                 }
//             }
//
//         }
//         if (author_key.length == 0) {
//             break
//         }
//         if (get_Activity().indexOf("search") != -1 && device.sendAai({ query: "T:*搜索发现*", action: "getBounds" })) {
//             zuixin(key, false)
//         }
//         // 下滑
//         var slide = device.move(tcConst.movement.shiftDown);
//         delay(1000);
//     }
// }



// 滑动页面
function search_key(author_key, key) {
    var ls = ''
    caij_end = []
    for (var i = 0; i < 110; i++) {
        error()
        if (i == 80) {
            if (zuixin(key, true)){
                var videoCount = 0;
                if (videoCount >= 200) {
                    break;
                }
            }
        }
        for (var x = 0; x < 2; x++) {
            for (var z = 0; z < author_key.length; z++) {
                click_key(author_key[z], key);
            }
            if (caij_end && author_key) {
                for (var j = 0; j < caij_end.length; j++) {
                    if (author_key.indexOf(caij_end[j]) != -1) {
                        author_key.splice(author_key.indexOf(caij_end[j]), 1)
                        print(device.name + "关键词:" + key + "   已经完成:" + caij_end + '  未完成:' + author_key)
                    }
                }
            }

        }
        if (author_key.length == 0) {
            break
        }
        if (get_Activity().indexOf("search") != -1 && device.sendAai({ query: "T:*搜索发现*", action: "getBounds" })) {
            zuixin(key, false)
        }
        // 下滑
        var slide = device.move(tcConst.movement.shiftDown);
        delay(1000);
    }
}
function zuixin(key, zx) {
//    device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
    for (var q = 0; q < 3; q++) {
        if (get_Activity().indexOf('index') != -1) {
            device.click(996, 138, tcConst.STATE_PRESS);
            delay(1000);
//            print(device.name + "进入抖音搜索页");
                device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);
                delay(1000);
        }
        try {
            // 输入关键
            var keyword = device.inputTextSync(0, key);
            // var keyword =  device.inputText(key)
//            print(device.name + keyword)
            delay(2000);
            var search_text = device.sendAai({ query: "C:.EditText&&R:.et_search_kw", action: "getText" });
//            print(device.name + search_text)
            if (keyword == true && search_text.retval == key) {
//                print(device.name + "输入：" + key);
                break;
            } else {
//                print(device.name + '判断输入关键词是否成功');
                reload()
            }
        } catch (err) {
            print(device.name + err);
        }

    }
    delay(1000);
    // 点击搜索按钮
    device.sendAai({ query: "C:.TextView&&R:.v6q", action: "click" });
    delay(1500)
    device.click(1000, 260, tcConst.STATE_PRESS);
    delay(1500)
    device.click(410, 530, tcConst.STATE_PRESS);
    delay(1500)
    device.click(500, 1500, tcConst.STATE_PRESS);
    delay(1500)
    if(zx){
        if (device.sendAai({ query: "T:全部*", action: "click" })) {
            delay(1500)
            if (device.sendAai({ query: "T:最新", action: "click" })) { print(device.name + '切换最新搜索'); delay(2500) }
            if (device.sendAai({ query: "T:*迷路了*", action: "getBounds" })) { print(device.name + '服务器迷路了'); return true }
        }
    }
    return false
}


function error() {
    for (var kk = 0; kk < 3; kk++) {
    var error_text = device.sendAai({ query: "T:*网络好像断了*", action: "getBounds" });
    if (error_text) {
        delay(1000);
//        print(device.name + '网络中断,重新点击')
        device.sendAai({ query: "C:.ImageView&&R:.dfs", action: "click" });
        delay(3000);

    }}
}

function click_key(author_key, gjc) {
    var tt = false
    bij_ids = ''
    delay(500);
    author_key2 = author_key.split('&&')
    var img = device.sendAai({ query: "T:*" + author_key2[0] + "*", action: "getBounds" });
    printf("1 is here");
    if (img&&author_key2.length!=1){
        for (i = 0; i < img.ids.length; i++) {
            for (j = 0; j < 3; j++) {
                t = device.sendAai({ query: "ID:"+img.ids[i], action: "getText" });
                printf("2 is here");
                if (t){
                     if(t.retval.indexOf(author_key2[1])!=-1){
                        bij_ids = img.ids[i]
                     }
                    break
                    printf("3 is here");
                }
            }
            if (bij_ids){break}
        }
    } else if (img&&author_key2.length==1) {
        bij_ids = img.ids[0]
        print("4 is here");
    }
    print(bij_ids)
    if (bij_ids) {
        printf("2 is here");
        delay(500);
        if (img.bounds[0][1] < 200) {
            tt = true
            device.move(tcConst.movement.shiftUp);
            delay(1000);
        }
        device.sendAai({ query: "ID:" + bij_ids, action: "click" })
        delay(500);
        var detail_activity = get_Activity();
        //  判断是否为详情页
        if (detail_activity.indexOf("search.GlobalSearchActivity") == -1) {
            try {
                if (detail_activity.indexOf("notedetail.NoteDetailActivity") != -1) {
                    personate_detail("1")

                    delay(1000);
                    device.move(tcConst.movement.shiftDown);
                    // 作者
                    for (i=0; i<2; i++){
                         var author = device.sendAai({ query: "C:.TextView&&R:.npm", action: "getText" });
                         if (author){break}
                    }
                    // 标题
                    var title = device.sendAai({ query: "C:.TextView&&R:.desc", action: "getText" });
                }
                if (detail_activity.indexOf("detail.activity.DetailFeedActivity") != -1) {
                    for (i=0; i<2; i++){
                        var author = device.sendAai({ query: "C:.TextView&&R:.matrixNickNameView", action: "getText" });
                        if (author){break}
                    }
                    // 标题
                    var title = device.sendAai({ query: "C:.TextView&&R:.noteContentText", action: "getText" });
                    personate_detail("2")
                }
                if (!author) {
                    author = { 'retval': '' };
                };
                if (!(title)) {
                    title = { 'retval': '' };
                };
                  printf(device.name + '查找到关键词：' + author_key + '  搜索词:' + gjc + '  作者' + author)
                  printf("2 is here");
//                  printf(device.name + '作者:%s,标题:%s,', author.retval, title.retval)
                  caij_end.push(author_key)
            } catch (err) {
                print(device.name + "错误描述11：" + err.message);
                delay(1000);
            }
//            for (var i = 0; i < 1; i++) {
//                var detail_activity2 = get_Activity();
//                    browseVideos()
//                //  判断是否为详情页
//                if (detail_activity2.indexOf("search.GlobalSearchActivity") == -1) {
//                    device.send(tcConst.keyCodes.KEYCODE_BACK);
//                    delay(1000);
////                    device.click(996, 138, tcConst.STATE_PRESS);
////                    delay(2000);
//                }
//            }
        } else {
            print(device.name + '当前页面既不是视频也不是图片');
        }
    }
    if (tt) { device.move(tcConst.movement.shiftDown); delay(1000); }
}

// function browseVideos() {
//   try {
//     // 执行滑动操作
//     execSync('adb shell input swipe (0,1588) （540,1618) duration');
//
//     // 等待一段时间，以便视频播放到50%
//     setTimeout(() => {
//       // 返回当前页面的代码
//       const html = execSync('adb2 shell uiautomator dump /dev/tty').toString();
//       console.log(html);
//     }, 5000);
//   } catch (error) {
//     console.error(error);
//   }
// }
// var slide = device.move(tcConst.movement.shiftDown);
// printf("开始滑动")
// delay(1000);
function browseVideos() {
    delay(3000)
    device.click(72, 122, tcConst.STATE_PRESS);

}
restart_app_douyin()
page1_search_click()
page1_search_input(key_dict)
