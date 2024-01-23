define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");
var device = Device.searchObject(sigmaConst.DevSelectOne);
// 创建手机对象
// var device = Device.getMain();
var content_num = 50
var info_ids_list = []
//var gjc_key = ["丰添","丰添洗发水","丰添防脱洗发水"]
var gjc_key = ["番茄肥牛面"]

var gjc_key2 = []
var file_path = '/sdcard/'

for(var i=0;i<gjc_key.length+10;i++){
	var rdm = Math.floor(Math.random()*gjc_key.length)
	gjc_key.push(gjc_key[rdm])
	gjc_key.splice(rdm,1)
}
print(device.name + gjc_key)
for (var q = 0; q < 3; q++) {
    try {
        delay(3000);
        device.closeApp("com.xingin.xhs");
        delay(3000);
        var runAppName = "com.xingin.xhs"
        var runapp = device.runApp(runAppName);
        delay(1000);
        ret = get_Activity()
        if (runapp == 0 && ret.indexOf('com.xingin.xhs') != -1) {
            if (ret.indexOf('intersitial.ui') != -1) {
                device.click(960, 130, tcConst.STATE_PRESS);
                print(device.name + "关闭广告");
                delay(1000);
            }
            run(gjc_key)
            delay(1000);
            device.closeApp(runAppName);
            print(device.name + '------结束')
            break
        delay(1000);
        } else {
            print(device.name + '打开小红书失败');
            delay(2000);
        }
    } catch (err) {
        print(device.name + err);
        info_ids_list = []
        for (var j = 0; j < gjc_key2.length; j++) {
            if (gjc_key.indexOf(gjc_key2[j]) != -1){
                gjc_key.splice(gjc_key.indexOf(gjc_key2[j]), 1)
            }
        }
    }

}
device.runApp('com.android.calendar')

// 列表页随机点击
function personate_list() {
    var num = randomNum(1, 15)
    if (num == 1) {
        print('列表页随机点击')
        for (var i = 0; i < 3; i++) {
            device.click(randomNum(100, 1000), randomNum(500, 2000), tcConst.STATE_PRESS);
            delay(1000)
            var detail_activity4 = get_Activity();
            //  判断是否为详情页
            if (detail_activity4.indexOf("search.GlobalSearchActivity") == -1) {
                personate_detail('3')
                break
            }
        }
    };
}
// 内容页随机
function personate_detail(detail_type) {
    // 进入随机内容页面
    if (detail_type == '3') {
        print('随机内容页面')
        for (var i = 0; i < randomNum(2, 5); i++) {
            delay(randomNum(1000, 2000));
            device.move(tcConst.movement.shiftDown);
        }
        delay(1000);
            // '返回列表页'
        var detail_activity3 = get_Activity();
        //  判断是否为详情页
        if (detail_activity3.indexOf("search.GlobalSearchActivity") == -1) {
            device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
            delay(1000);
        }

        // 选定内容页面
    }
}

function get_detail_href(detail_type) {
    var get_copy = ''
    for (var kk = 0; kk < 3; kk++) {
        if (detail_type == '1') {
            if (device.sendAai({ query: "C:.ImageView&&R:.moreOperateIV", action: "click" })) {
                delay(1000);
                if (device.sendAai({ query: "T:复制链接", action: "click" })) {
                    delay(1000);
                    get_copy = device.get("text:clipboard");
                }
            }
        } else {
            if (device.sendAai({ query: "C:.ImageView&&R:.dtq", action: "click" })) {
                delay(1000);
                if (device.sendAai({ query: "T:复制链接", action: "click" })) {
                    delay(1000);
                    get_copy = device.get("text:clipboard");
                }
            }
        }
        if (get_copy) {
            return get_copy
        }
    }
    return get_copy
}
function author_info(detail_type) {
    var num = randomNum(1, 15)
    var fenss = { 'retval': 'null' }
    var author_click = false
    for (var i = 0; i<3; i++){
        device.move(tcConst.movement.shiftRight);
        delay(1000)
        var author_page = device.sendAai({ query: "T:*获赞与收藏*", action: "getBounds" });
        if (!author_page) {
            delay(1000);
            if (detail_type == '1') {
            if (device.sendAai({ query: "R:.avatarLayout", action: "click" })){author_click = true}
        } else {
            if (device.sendAai({ query: "R:.matrixAvatarView", action: "click" })){
                author_click = true
            }
        }
        }else{author_click = true;break}
       }
    delay(1000);
    if (author_click){
        for (var i = 0; i<2; i++){
            // 作者
            fenss = device.sendAai({ query: "C:.TextView&&R:.bcf", action: "getText" });
            if (!fenss) {
                print(device.name + '粉丝页ids找不到')
                reload('作者')
                fenss = { 'retval': 'null' }
            }else{
                break
            }
        }
        // 作者页面下滑
        for (var i = 0; i < randomNum(1, 3); i++) {
            device.move(tcConst.movement.shiftDown);
            delay(randomNum(1000, 2000));
            // 随机点击
//            personate_list()
        }
        return fenss.retval
    }else{
    return 'null'
    }

}

function get_comment(detail_type){
    var comment_list = []
    if (detail_type == '1'){
        comment_num = device.sendAai({ query: "C:.TextView&&R:.ea9", action: "getText" }).retval
        if(comment_num=='评论'){
            return []
        }
        delay(500);
        device.sendAai({ query: "C:.TextView&&R:.ea9", action: "click" });

    }else{
        comment_num = device.sendAai({ query: "C:.TextView&&R:.dtd", action: "getText" }).retval
        if(comment_num=='评论'){
            return []
        }
        delay(500);
        device.sendAai({ query: "C:.ImageView&&R:.dtc", action: "click" })
    }
    delay(500);
     for (var kk = 0; kk < comment_num/6; kk++) {
        for (var i = 0; i < 5; i++) {
            if (get_Activity().indexOf('comment') != -1){
                device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                delay(500);
                device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                delay(500);
                device.scroll(500,1300,0,-100)
                delay(200);
            }
            if (!device.sendAai({ query: "T:展开*", action: "click" })){
                break
            }
            delay(1000);
        }
        content = device.sendAai({ query: "C:.TextView&&R:.gtz", action: "getText" });
        comment_list.push(content.retval)
        delay(500);
        device.move(tcConst.movement.shiftDown);
        delay(500);
    }
    if (detail_type != '1'){
         device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
     }
    delay(500);
    return comment_list
}

function get_time(detail_type) {
    if (detail_type == '1') {
        activ = get_Activity()
        for (var kk = 0; kk < 10; kk++) {
            if (activ.indexOf("search.GlobalSearchActivity") != -1) {
                return 0
            }
            // 图片页面
            cont_time = device.sendAai({ query: "C:.TextView&&R:.ebl", action: "getText" });
            if (cont_time) {
                break;
            } else {
                device.move(tcConst.movement.shiftDown);
                delay(randomNum(1000));
            }
        }
    } else {
        cont_time = device.sendAai({ query: "C:.TextView&&R:.gb3", action: "getText" });
        // 抓取正文属性
        if (device.sendAai({ query: "C:.TextView&&R:.noteContentText", action: "click" })) {
            delay(500)
            cont_time = device.sendAai({ query: "C:.TextView&&R:.gb3", action: "getText" });
        }
    }
    if (!cont_time) {
        print("时间 : " + lastError());
        cont_time = { 'retval': 'null' }
    }
    return cont_time.retval
}

function reload(page) {
    device.send(tcConst.KEY_RECENTAPP);
    delay(5000);
    device.send(tcConst.KEY_BACK);
    delay(1000);
    detail_activity = get_Activity();
    if (page == '列表' && detail_activity.indexOf("search") == -1) {
        device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
        delay(1000);
       if (get_Activity().indexOf("search") == -1) {
            return true
       }
    }
    return false
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function writeFile(arr, scrstr, file_path) {
    device.writeFile(file_path, arr, 0, 0);
    device.writeFile(file_path, '********************', 0, 0);
    var write = device.writeFile(file_path, scrstr, 0, 0);
    if (write == 0) {
        device.writeFile(file_path, '------------------------------', 0, 0);
        print(device.name + "写入成功");
    } else {
        print(device.name + "写入失败" + lastError());
    }
}

function error() {
    for (var kk = 0; kk < 3; kk++) {
        var error_text = device.sendAai({ query: "T:*网络好像断了*", action: "getBounds" });
        if (error_text) {
            delay(100000);
            print(device.name + '网络中断,重新点击')
            device.sendAai({ query: "C:.ImageView&&R:.dfs", action: "click" });
            delay(3000);

        }else{
            break
        }
    }
}

function click_key(ids, file_path, author_key) {
    var t = false
    var tt = false
     var content_zb = device.sendAai({ query: "ID:" + ids, action: "getBounds" })
    if (content_zb){
        delay(500);
        if (content_zb.bounds[0][1]<200){
                tt = true
                device.move(tcConst.movement.shiftUp);
                delay(1000);
        }
    }
    if (!device.sendAai({ query: "ID:" + ids, action: "click" })) {
        print(device.name + "点击失败");
    }
    //    print(Date())
    // device.click(x,y,tcConst.STATE_PRESS);
    delay(500);
    var detail_activity = get_Activity();
    //  判断是否为详情页
    //    print(Date())
    if (detail_activity.indexOf("search.GlobalSearchActivity") == -1) {
        try {
            if (detail_activity.indexOf("notedetail.NoteDetailActivity") != -1) {
                // 作者
                var author = device.sendAai({ query: "C:.TextView&&R:.nickNameTV", action: "getText" });
                // 标题
                var title = device.sendAai({ query: "C:.TextView&&R:.ebx", action: "getText" });
                // 点赞
                var like = device.sendAai({ query: "C:.TextView&&R:.ebc", action: "getText" });
                // 收藏
                var collect = device.sendAai({ query: "C:.TextView&&R:.ea2", action: "getText" });
                // 评论
                var comment = device.sendAai({ query: "C:.TextView&&R:.ea9", action: "getText" });
                var scrstr = device.sendAai({ query: "C:.TextView&&R:.ccn", action: "getText" });
                if (!scrstr){
                    device.move(tcConst.movement.shiftDown);
                    delay(1000);
                    var scrstr = device.sendAai({ query: "C:.TextView&&R:.ccn", action: "getText" });
                }

                con_time = get_time('1')
                var type1 = '1'
                var bjlx = '图片'
            }
            if (detail_activity.indexOf("detail.activity.DetailFeedActivity") != -1) {
                // 获取作者
                //根据class resource字段
                var author = device.sendAai({ query: "C:.TextView&&R:.matrixNickNameView", action: "getText" });
                // 标题
                var title = device.sendAai({ query: "C:.TextView&&R:.noteContentText", action: "getText" });
                // 点赞
                var like = device.sendAai({ query: "C:.TextView&&R:.dtf", action: "getText" });
                // 收藏
                var collect = device.sendAai({ query: "C:.TextView&&R:.dtb", action: "getText" });
                // 评论
                var comment = device.sendAai({ query: "C:.TextView&&R:.dtd", action: "getText" });
                // 抓取正文属性
                var detail_content = device.sendAai({ query: "C:.TextView&&R:.noteContentText", action: "click" });
                // // 展示全文
                // var detail_content2 = device.sendAai({query:"ID:" + detail_content.ids[0],action:"click"});
                delay(500)
                if (get_Activity().indexOf('topic.TopicActivity') != '-1'){
                    device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                    device.click(80, 2060, tcConst.STATE_PRESS);
                    delay(1000);
                }
                // 正文
                var scrstr = device.sendAai({ query: "C:.TextView&&R:.eax", action: "getText" });
//
                con_time = device.sendAai({ query: "C:.TextView&&R:.gb3", action: "getText" });
                if (!con_time) {
                    print("时间 : " + lastError());
                    con_time = 'null'
                }else{
                    con_time = con_time.retval
                }
//                delay(500)
//                device.sendAai({ query: "C:.ImageView&&R:.ahp", action: "click" })
                var type1 = '2'
                var bjlx = '视频'

            }
            if (!(author)) {
                author = { 'retval': 'null' };
            };
            if (!(title)) {
                title = { 'retval': 'null' };;
            };
            if (!(like)) {
                like = { 'retval': 'null' };;
            };
            if (!(collect)) {
                collect = { 'retval': 'null' };;
            };
            if (!(comment)) {
                comment = { 'retval': 'null' };;
            };
            if (!(scrstr)) {
                scrstr = { 'retval': 'null' };
            };
            activ = get_Activity()
            if (activ.indexOf("search.GlobalSearchActivity") != -1) {
                return t
            } else {
//                comment_list = get_comment(type1)
                comment_list = 'null'
                get_copy = get_detail_href(type1)
//                get_copy = 'null'
                fenss = author_info(type1)
//                fenss = 'null'
                if (get_copy) {
                    t = true
//                    con_time = 'null'
                    var arr = {"title":title.retval,"author":author.retval,"like":like.retval,"collect":collect.retval,"comment":comment.retval,"gjc":author_key,"fenss":fenss,"con_time":con_time,"get_copy":get_copy, "comment_list":comment_list, 'bjlx':bjlx}
                    writeFile(arr,scrstr.retval, file_path);
                    printf(device.name + '关键词:%s,作者:%s,标题:%s,点赞:%s,收藏:%s,评论:%s,粉丝数:%s,时间:%s,链接:%s', author_key, author.retval, title.retval,
                    like.retval, collect.retval, comment.retval, fenss, con_time, get_copy.substr(0, 20));
                }else{
                    print('复制链接失败')
                }

            }
        } catch (err) {
            print(device.name + "错误描述：" + err.message);
            delay(500);
        }
             // '返回列表页'
    for (var i = 0; i < 3; i++) {
        //  判断是否为详情页
        if (get_Activity().indexOf("search") == -1 && get_Activity().indexOf("search") == -1) {
            device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
            delay(1000);
        }
    }
    } else {
        print(device.name + '当前页面既不是视频也不是图片');
    }

    if (tt){device.move(tcConst.movement.shiftDown);delay(1000);}
    return t;
}

//function lup(gjc, new_time){
//    //luz =  "screenrecord --time-limit 60 "+ "/sdcard/" + device.name+ '_' + 'gjc'+ '_' + 'new_time' + ".mp4 &"
//    luz =  "screenrecord --bit-rate 3000000 --time-limit 10 "+ "/sdcard/" + device.name+ '_' + gjc + '_' + new_time + ".mp4 &"
//    ret = device.exec(luz)
//    print(device.name + '开始录制'+ ret)
//    device.swipe([516,28],[500,1000],2);
//    delay(3000)
//    device.swipe([525,1510],[490,100],2);
//}

// 滑动页面
function search_key(file_path, gjc, new_time) {
//    lup(gjc, new_time)
    var ls = ''
    for (var i = 0; i < 10; i++) {
        error()
        for (var k = 0; k < 2; k++) {
            var img_info = device.sendAai({ query: "C:.ImageView&&R:.eb4", action: "getBounds" });
            delay(500);
            if (img_info) {
                break;
            } else {
                print(device.name + '列表页ids找不到')
                if (reload('列表')){
                    return true;
                }
            }
        }
        if (!img_info){img_info = {'ids':[]}}
        print('----------------------------------------------------------------------')
        for (var h = 0; h < img_info.ids.length; h++) {
            var current_ids = img_info.ids[h]
            if (info_ids_list.indexOf(current_ids) == -1) {
                // 是否在当前页
                if (click_key(current_ids, file_path, gjc)) {
                    info_ids_list.push(current_ids);
                    printf(device.name + "列表数量:%d", info_ids_list.length)
                    if (info_ids_list.length >= content_num) {
                        return true;

                    }
                }
            } else {
                var subscript = info_ids_list.lastIndexOf(current_ids)
                if (info_ids_list.length - subscript > 5) {
                    if (click_key(current_ids, file_path, gjc)) {
                        info_ids_list.push(current_ids);
                        printf(device.name + "列表数量:%d", info_ids_list.length)
                        if (info_ids_list.length >= content_num) {
                            return true;
                        }
                    }
                }
            }
        }
        delay(500);
        // 下滑
        var slide = device.move(tcConst.movement.shiftDown);
        if (slide != 0) {
            print(device.name + "滑动失败：" + lastError());
        }
        if (get_Activity().indexOf("search") != -1 && device.sendAai({ query: "T:*搜索发现*", action: "getBounds" })) {
            send_key(gjc)
        }
    }
}

function send_key(key) {
    for (var q = 0; q < 3; q++) {
        if (get_Activity().indexOf('index') != -1) {
            device.click(970, 140, tcConst.STATE_PRESS);
            print(device.name + "进入小红书搜索页");
            delay(1000);
            device.exec("ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME", 5000);
            delay(1000);
        }
        try {
            // 输入关键
            var keyword = device.inputTextSync(0, key);
            print(keyword)
            delay(1000);
            var search_text = device.sendAai({ query: "C:.EditText&&R:.dns", action: "getText" });
            print(search_text)
            if (keyword == true && search_text.retval == key) {
                print(device.name + "输入：" + key);
                break;
            } else {
                delay(500);
                print(device.name + '判断输入关键词是否成功');
                device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                // del_text = device.sendAai({query:"C:.TextView&&R:.dnk",action:"click"});
                // print('删除:' +del_text)
            }
        } catch (err) {
            print(device.name + err);
            info_ids_list = []
        }
    }
}

function run(key) {
    print(device.name + "打开小红书");
    if (get_Activity().indexOf('update') != -1) {
        device.sendAai({ query: "C:.ImageView&&R:.az9", action: "click" });
    }
    var d = new Date();
    var new_time = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate()
    var file_path = "/sdcard/" + device.name + '_' + new_time + "_content.txt"
    //对坐标(123,254)进行点击操作（按下+弹起）
     for (var j = 0; j < key.length; j++) {
        send_key(key[j])
        delay(2000);
        // 点击搜索按钮
        device.sendAai({ query: "C:.TextView&&R:.dnx", action: "click" });
        delay(3000)

        open_ScreenRecord();
        delay(1000)
        // 滑动页面
        for(var o = 0; o < 9;o++){
          delay(2000);

          ret = device.sendAai({ query: "C:.ImageView&&R:.eb4", action: "getBounds" });
          if(ret == null ){
                delay(5000)
                printf("等待");
          }
          slide = device.move(tcConst.movement.shiftDown);
        }
        delay(1500)
        ret = device.scroll(500, 700, 0, 10000)
        if(ret == 0 )
        {
            //关闭录屏
            device.click(195,17);
        }
        delay(1500)

        search_key(file_path, key[j], new_time)

        delay(1000);
        // 返回搜索页
        info_ids_list = []
        gjc_key2.push();
        delay(2000)
        device.closeApp(runAppName);
        delay(2000)
        replaceName(key[j])
        delay(2000);
        download()
        print(device.name + "-----------结束")
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

function download(){
    printf("开始下载");
    var fileName = "A"+device.name + "-2" + ".mp4";
    var downloadPath = "/sdcard/" + fileName;
    ret = device.download(downloadPath,"C:\\Users\\mac\\Desktop\\lup");
    print(ret)
}

function replaceName(){
    printf("开始更改")
    device.clickSync("文件管理");
    device.clickSync("搜索文件")
    device.inputTextSync(0,'SVID');
    delay(1000);
    device.click(240,404,tcConst.STATE_DOWN)
    delay(1000);
    device.clickSync("更多")
    delay(1000);
    device.clickSync("重命名")
    device.inputText(device.name);
    device.clickSync("确定")
    delay(500);
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
    device.swipe([500, 1200], [540, 1700], 2);
    /* 作下拉成功是否成功进行处理 */
//    ret = uiSelector.text("免打扰").findOne();
//    if (ret == null) {
//      device.click(526, 1845, tcConst.STATE_PRESS);
//      delay(500);
//      device.swipe([500, 10], [500, 1200], 3);
//      delay(500);
//      device.swipe([500, 1200], [540, 1700], 2);
//      delay(500);
//      printf(device.name + "再次下拉成功");
//    }

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
    device.clickSync("无声");
    device.clickSync("确定");
    delay(4000);
    printf(device.name + "开始录制");
    //展示时间
    device.swipe([500, 10], [500, 1200], 3);
    delay(5000);
    device.click(286, 1840, tcConst.STATE_PRESS);

  } catch (error) {
    // 异常处理逻辑
    printf("发生错误" + error);
    device.clickSync("屏幕录制");
    open_ScreenRecord(); // 再次执行该函数
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
    delay(2000);
    device.inputText(device.name);
    delay(500);
    device.clickSync("确定");
    delay(1000);
  } catch (error) {
    // 异常处理逻辑
    printf("发生错误" + error);
  }
}

function download() {
    try {
        printf(device.name + "开始下载");
        var fileName = device.name + ".mp4";
        var downloadPath = "/sdcard/Pictures/Screenshots/" + fileName;
        ret = device.download(downloadPath, "C:\\Users\\mac\\Desktop\\lup\\11.9");
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