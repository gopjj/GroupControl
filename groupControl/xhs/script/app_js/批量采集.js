define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");
var device = Device.searchObject(sigmaConst.DevSelectOne);
// 创建手机对象
// var device = Device.getMain();
var content_num = 100
var info_ids_list = []
var key = ['面霜推荐:睡不着看李佳期面霜小课堂,妥了！618购物车有这些面霜就安心了。,《如何花300¥买到价值三千的面霜》,抗老需四季❗夏天面霜不能少,消费更低抗老升级‼️这些平价面霜堪比贵妇⁉️,李佳琦618攻略！想买面霜的看过来！,适合25+轻熟龄肌的热门抗老面霜推荐！,进来避雷！618平价好用的抗老面霜看这篇！,关于富婆20岁vs穷鬼20岁的护肤品差距,这个抗初老面霜居然让摄像小姐姐露脸了！,预算500内❗️白菜价就能搞到贵妇配置面霜！！,618面霜怎么选❓20瓶面霜无废话盘点❗,不同年龄段面霜怎么选？好用的面霜推荐,擦亮双眼！祛斑霜真的选对不选贵！,不必死磕贵妇面霜！这些抗老面霜性价比超高！,屈臣氏面霜红榜','补水+抗初老，敏敏肌也能用,进来拿捏住！性价比高的抗老面霜曝光了！,你的面霜好用吗⁉️24款抗老保湿面霜推荐,一些热门面霜的使用感总结！实话实说版！,好用的面霜终于被我挖到了🙏🙏,避雷篇！有实力的祛斑霜看看这篇再冲！,年中爱用面霜盘点❗️兜兜转转还得是你们‼️,已按功效分类👏抄作业‼️空瓶的挚爱面霜推荐,大牌面霜真正功效是什么❓不许再被忽悠了❌,已排雷！月薪3K自用抗老面霜推荐！,一波好用的高性价比面霜分享~,618别瞎买！大牌！平价！爆好用！抄作业！,抗老界标杆！提拉紧致守住下颌线,618买什么｜花费6位数理出来的宝藏面霜！！,🆘油皮亲妈空气霜❓易长痘的谨慎种草❗️,面霜大户盘点✨走心经验别瞎花钱‼️齐活了🥰,抗老面霜怎么选❓8款热门，极限对比❗,9款热门大牌面霜的真实测评（真诚版）,热卖榜前八的抗老面霜，到底怎么样？,学生党平价面霜！好用不踩雷！,百元平价到贵妇大牌面霜推荐‼精致女人爱用✨,靠实力说话！用心选的祛斑霜真的很顶！,别纠结！好用抗初老面霜还得看这些！,避雷篇！有实力的抗老面霜看看这篇再冲！,来不及了！618纠结面霜的姐妹直接来抄作业,只说实话，夏季热门抗老面霜这样选就对了！,李佳琦面霜课,预算200-5000选面霜💯不踩雷全攻略🤙,10款热门抗老面霜推荐总结❤️,小周的熬夜好物分享💫,get这些美白面霜，面霜还是要做功课的~,这功课真不让你亏钱！双11秋冬面霜推荐！,油皮38必囤！春夏抗老面霜这瓶赢麻了！,新品好物分享｜又挖到好东西咯,新手小白护肤！不同时间段护肤品好用不踩雷！,25+抗老！每逢618必囤面霜合集！,不花冤枉钱💰平价到大牌不同功效面霜怎么选,省钱贴！抗老面霜必囤推荐指南！,618水乳精华面霜推荐,别乱买了！夏季抗老面霜只有做功课买的才香！,紧急插播！618抗老面霜功课做好不踩雷！！,🌟21款面霜优缺点全攻略❗️哪款适合你❓,口罩脸护肤小教程～,大学第一套护肤品指南‼️｜别再跟风乱买啦😡,纠结一上午了，双十一囤啥，+7直播间——交作业,🐰【不同年龄段的人，该用什么面霜？】,面霜也要分年龄🧐18-50▶不会选的看过来❗,用空了4罐才推荐！百元抗老面霜推荐！,职业夜猫子的脸能有多垮,不同预算面霜｜美白抗老保湿修护全都有！,消费降级‼️没人说的平替🥺细水长流好用,春夏不踩雷的面霜尖子生们，值得我投资！！,如果千元以下抗老面霜有段位,04帅1⃣️｜生活费不多但我真的很会买（男生篇,大多数人在纠结的4款抗老面霜,兜兜转转！好用的祛斑霜就这几个！,急需面霜推荐哇！！！,一些混油皮夏天友好的轻薄面霜！盲买不踩雷！,618李佳琦攻略‼️推荐n次㊙️真爱空瓶无限回购,真的夸累了！618祛斑霜这样选不踩雷！,618值得买和不值得买的10款大牌面霜,成功解锁平价抗老面霜！细纹都被磨平了,平价面霜合集🌟学生党看过来｜最低不过百,Lulu的清爽夏日宝藏,全网最热的精华+面霜搭配,面霜合集｜平价小众面霜｜有冷门宝藏款,不停产能回购一辈子的面霜推荐❗️希望别涨价,仙女不骗仙女系列｜30瓶面霜一句话总结,30+如何打造清晰下颌线？','抗老面霜要选对！,热门面霜测评,不同年龄面霜怎么选？选对面霜不交智商税！,老爸测评&&面霜,全线无踩雷的抗初老面霜，细纹拜拜了,老爸测评护肤品彩妆汇总,不差钱，纯粹是因为平价面霜好用,李佳琦都爱用的抗老面霜大公开㊙️618必买,打卡好用初抗老面霜，还是要做功课,不为品牌溢价买单｜大牌里的高性价比面霜,抗老必看的一期！经典大牌面霜怎么买？,细纹刺客🥷凭实力圈粉的抗老面霜❗️怒囤一波,一句话总结20款大牌面霜，到底值不值得买？,面霜推荐用这个！抗老绝了想用到天荒地老！,开挂抗老面霜推荐..这辈子离不开超红瓶了！,双十一省钱了‼️低价配齐全套护肤,22瓶热门大牌面霜🔥','怎么选看这篇就够了,春夏必入抗老之神！这面霜秒了一帮子美容院！,兜兜转转还是这1套平价护肤品，请锁死,无废话总结30款抗老面霜（一看就悟版）,抵抗初老｜米白去黄｜淡纹紧致精华面霜搭配,拜托柜姐，这种好东西，下次能不能早点说啊！,玻色因真相丨修护抗老标杆，真的有平替吗？,30岁第一次用贵的面霜,别踩雷！抗老面霜要这样选才不会出错,值得入手的祛斑霜推荐！直接抄作业！,别再纠结了！靠谱的祛斑霜还得看这些！,选对面霜很重要！抗老面霜我真的悟了,盘点一波贫民窟女孩的爱用面霜合集📋,618李佳琦小课堂【面霜怎么买】,2023李佳琦618比价攻略❗️面霜版✅蕞全超详细,618值回票价的抗老面霜们，油皮给跪了！！,百元拯救下颌线！抗老面霜我服它！！！,理智618❗️李佳琦直播间攻略-热门抗老面霜,618必囤好物！这么有实力抗老面霜被我挖到了,李佳琦618面霜功课！40+款热门面霜怎么买？,改善发腮❗清晰下颌线❗真的绝了…,六月份最值得关注的大促-6.18抗衰老面霜！,不盲入！618好用的祛斑霜看完这篇再冲！,靠实力说话！做功课选的祛斑霜不出错！,已排雷！618好用的祛斑霜看完这篇再冲！,七款抗老面霜推荐❗三款痘肌无压力❗,618大牌抗老面霜怎么买？一句话总结！,想要高性价比的抗老面霜？看这一篇就够了！,别瞎买了！618祛斑霜做足功课不踩雷！']
var gjc_key2 = []
var file_path = ''

for(var i=0;i<gjc_key.length+10;i++){
	var rdm = Math.floor(Math.random()*gjc_key.length)
	gjc_key.push(gjc_key[rdm])
	gjc_key.splice(rdm,1)
}
print(device.name + gjc_key)
for (var q = 0; q < 3; q++) {
    try {
        device.runApp('com.android.calendar')
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
            break
        delay(1000);
        device.closeApp(runAppName);
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

function lup(gjc, new_time){
    //luz =  "screenrecord --time-limit 60 "+ "/sdcard/" + device.name+ '_' + 'gjc'+ '_' + 'new_time' + ".mp4 &"
    luz =  "screenrecord --bit-rate 3000000 --time-limit 60 "+ "/sdcard/" + device.name+ '_' + gjc + '_' + new_time + ".mp4 &"
    device.exec(luz)
    print('开始录制')
    reload('录制')
    info_ids_list2 = []
    for(var x=0; x<45;x++){
        device.move(tcConst.movement.shiftDown);

        delay(500);
//        img_info = device.sendAai({ query: "C:.ImageView&&R:.eb4", action: "getBounds" });
        delay(500);
//        for (var h = 0; h < img_info.ids.length; h++) {
//            current_ids2 = img_info.ids[h]
//            if (info_ids_list2.indexOf(current_ids2) == -1) {
//                info_ids_list2.push(current_ids2);
//                if (info_ids_list2.length >= 100) {
//                        break
//                }
//            } else {
//                subscript2 = info_ids_list2.lastIndexOf(current_ids2)
//                if (info_ids_list2.length - subscript2 > 5) {
//                    info_ids_list2.push(current_ids2);
//                    if (info_ids_list2.length >= 100) {
//                        break
//                    }
//                }
//            }
//        }
    }
    delay(1000);
    device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
    delay(1000);
    device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
    delay(1000);
    //对坐标(123,254)进行点击操作（按下+弹起）
    send_key(gjc)
    delay(1000);
    // 点击搜索按钮
    device.sendAai({ query: "C:.TextView&&R:.dnx", action: "click" });
    delay(1000);
}

// 滑动页面
function search_key(file_path, gjc, new_time) {
//    lup(gjc, new_time)
    var ls = ''
    for (var i = 0; i < 300; i++) {
        error()
//        var end_page = device.sendAai({ query: "T:*无更多内容*", action: "getBounds" });
//        if (end_page) {
//            print(device.name+'   无更多内容')
//            return true;
//        }
        // delay(1000);
//        delay(1000)
//        // 锁定综
//        var ls2 = device.sendAai({ query: "T:综合", action: "getBounds" })
//        if (ls2) {
//            if (!ls) {
//                ls = ls2.ids[0]
//            }
//            if (ls != ls2.ids[0]) {
//                device.sendAai({ query: "T:综合", action: "click" })
//                ls = device.sendAai({ query: "T:综合", action: "getBounds" }).ids[0]
//            }
//        }
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
    var info_ids_list = []
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
//        for (q = 0; q < 3; q++) {
//            delay(1000)
//             if (device.sendAai({ query: "T:全部*", action: "click" })) {
//                delay(1500)
//                if (device.sendAai({ query: "T:最新", action: "click" })) {
//                    print(device.name + '切换最新搜索');
//                    delay(2500)
//                    break
//                }
//
//            }
//        }
        // 滑动页面
        search_key(file_path, key[j], new_time)
        delay(1000);
        // 返回搜索页
        gjc_key2.push(key[j]);

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

