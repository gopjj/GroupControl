define("version", "9.0.u1254303");
define("resolution", "1080*1920");
define("requireVersion", "3.4.0");

// 创建手机对象

var device = Device.searchObject(sigmaConst.DevSelectOne);

if (!device) {
    throw "Cannot find device";
}
var deviceName = device.name;
printf(device.name + "---开始采集搜索");

var excelPath = "C:/Users/Administrator/Desktop/xhs/app_js/key.xlsx";
var titleNum = [];
var cajiEnd = [];
var keyAll = [];
var authorAll = [];
var count = 0;

var commandCount = 0; // 初始化命令执行次数计数器
var stopCondition = false;

var keyDict = {
    'VC精华': ['VC抗氧家族再添一员', '不得了！脸怎么这么白净啊', '这两搭着 嫩脸效果多少', '去黄提亮嘎嘎猛'],
    '萃乐活VC精华': ['VC抗氧家族再添一员', '不得了！脸怎么这么白净啊', '这两搭着 嫩脸效果多少', '去黄提亮嘎嘎猛']
};

var runAppName = "com.xingin.xhs";
for (var key in keyDict) {
    for (var i = 0; i < 3; i++) {
        try {
            var runapp = device.runApp(runAppName);
            if (runapp == 0) {
                ret = get_Activity();
                {
                    print(device.name + key + "---开始");
                    delay(3000);

                    // 执行
                    run(key);

                    device.closeApp(runAppName);
                    print(device.name + "---" + key + "---结束");
                    print(device.name + "---等待中...");

                    // 5分钟
                    delay(300000)
                    break;
                }
            } else {
                print(device.name + "---打开小红书失败");
                delay(2000);
            }
        } catch (err) {
            print(device.name + err);
        }
    }
}
writeEx(keyAll, authorAll);
printf(keyAll);
print(device.name  + "--------结束");

function reload() {
    device.send(tcConst.KEY_RECENTAPP);
    delay(2000);
    device.send(tcConst.KEY_BACK);
    delay(3000);
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

// 列表页随机点击
function personate_list(num) {
    var num = randomNum(1, num);
    if (num == 1) {
        for (var ii = 0; ii < 3; ii++) {
            device.click(
                randomNum(100, 1000),
                randomNum(500, 2000),
                tcConst.STATE_PRESS
            );
            delay(1000);
            var detailActivity4 = get_Activity();
            //  判断是否为详情页
            if (
                detailActivity4.indexOf("notedetail.NoteDetailActivity") != -1 ||
                detailActivity4.indexOf("detail.activity.DetailFeedActivity")
            ) {
                //                print(device.name + '列表页随机点击')
                // personate_detail("3");
                break;
            }
        }
    }
}

// 内容页随机
function personate_detail(detail_type) {
    // 进入随机内容页面
    if (detail_type == "3") {
        //        print(device.name + '随机内容页面')
        delay(randomNum(7000, 10000));
        for (var i = 0; i < randomNum(2, 5); i++) {
            delay(randomNum(1000, 3000));
            device.move(tcConst.movement.shiftDown);
        }
        delay(randomNum(1000, 3000));
        var detailActivity3 = get_Activity();
        //  判断是否为详情页
        if (detailActivity3.indexOf("search") == -1) {
            device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
            delay(1000);
        } // 选定内容页面
    } else {
        //        print(device.name + '选定内容页面')
        if (detail_type == "1") {
            for (var ii = 0; ii < randomNum(2, 3); ii++) {
                delay(randomNum(1000, 3000));
                device.move(tcConst.movement.shiftRight);
                delay(1000);
                var author_page = device.sendAai({
                    query: "T:*获赞与收藏*",
                    action: "getBounds",
                });
                if (author_page) {
                    delay(1000);
                    device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                    break;
                }
            }
            for (var i = 0; i < randomNum(4, 6); i++) {
                delay(randomNum(5000, 10000));
                device.move(tcConst.movement.shiftDown);
            }
        } else {
            delay(randomNum(10000, 20000));
        }
        //百分之60的概率进入 作者页面
        // var rNum = randomNum(1, 10);
        // // 根据80%的概率执行函数
        // if (rNum < 8) {
        //   printf("进入作者页面"+rNum);
        //   // author_info(detail_type);
        //   delay(3000);
        // }
    }
}

// 作者页面随机
function author_info(detail_type) {
    var num = randomNum(1, 10);
    var author_click = false;
    for (var i = 0; i < 2; i++) {
        if (detail_type == "1") {
            // 点赞
            //        if (num == 1) { device.sendAai({ query: "C:.ImageView&&R:.eb_", action: "click" }); }
            delay(1000);
            // 图片页面
            if (device.sendAai({query: "R:.avatarLayout", action: "click"})) {
                author_click = true;
            }
        } else {
            //            if (num == 1) { device.sendAai({ query: "C:.ImageView&&R:.dte", action: "click" }); }
            delay(1000);
            if (device.sendAai({query: "R:.matrixAvatarView", action: "click"})) {
                author_click = true;
            }
        }
        if (author_click) {
            break;
        }
    }
    delay(1000);
    //    print(device.name + '进入作者页面')
    // 作者页面下滑
    delay(3000);
    for (var i = 0; i < randomNum(2, 4); i++) {
        device.move(tcConst.movement.shiftDown);
        delay(randomNum(1000, 3000));
        // 随机点击
        personate_list(5);
    }
}

function error() {
    for (var kk = 0; kk < 3; kk++) {
        var error_text = device.sendAai({
            query: "T:*网络好像断了*",
            action: "getBounds",
        });
        if (error_text) {
            delay(1000);
            //        print(device.name + '网络中断,重新点击')
            device.sendAai({query: "C:.ImageView&&R:.c3k", action: "click"});
            // device.sendAai({ query: "C:.ImageView&&R:.dfs", action: "click" });
            delay(3000);
        }
    }
}

function deviceError() {
    for (var kk = 0; kk < 3; kk++) {
        var deviceText = device.sendAai({
            query: "T:*设备异常，请尝试关闭/卸载风险插件或重启试试*",
            action: "getBounds",
        });
        if (deviceText != null) {
            var deviceClick = device.sendAai({
                query: "T:*知道了*",
                action: "click",
            });
            if (deviceClick) {
                printf("设备错误点击成功");
            }
        }
    }
}

function writeEx(keyAll, authorAll) {
    var existingData = excelUtils.readExcel(excelPath, "Sheet1");

    var startingRow = 0;

    if (existingData != null && existingData.length > 0) {
        startingRow = existingData.length; // 下一行开始添加新数据
    }

    var data = [];

    for (var i = 0; i < keyAll.length; i++) {
        var row = [];
        row.push(keyAll[i]);
        row.push(authorAll[i]);
        row.push(deviceName);
        row.push(new Date()); // 添加当前时间
        data.push(row);
    }

    var ret = excelUtils.writeExcel(excelPath, "Sheet1", 0, startingRow, data);

    if (ret == true) {
        console.log("Successfully written to excel");
    } else {
        console.log("Failed to write! The error is: " + lastError());
    }
}

function click_key(keyTitle, gjc) {
    var tt = false;
    bijIds = "";
    keyTitle2 = keyTitle.split("&&");
    var img = device.sendAai({
        query: "T:*" + keyTitle2[0] + "*",
        action: "getBounds",
    });

    if (img && keyTitle2.length != 1) {
        for (i = 0; i < img.ids.length; i++) {
            for (j = 0; j < 3; j++) {
                t = device.sendAai({query: "ID:" + img.ids[i], action: "getText"});
                if (t) {
                    if (t.retval.indexOf(keyTitle2[1]) != -1) {
                        bijIds = img.ids[i];
                    }
                    break;
                }
            }
            if (bijIds) {
                break;
            }
        }
    } else if (img && keyTitle2.length == 1) {
        bijIds = img.ids[0];
    }
    // delay(1000);
    //    print(bijIds)
    if (bijIds) {
        delay(500);
        if (img.bounds[0][1] < 200) {
            tt = true;
            device.move(tcConst.movement.shiftUp);
            delay(1000);
        }
        device.sendAai({query: "ID:" + bijIds, action: "click"});
        delay(randomNum(15000, 20000));
        var author = device.sendAai({
            query: "C:.TextView&&R:.nickNameTV",
            action: "getText",
        });
        var detailActivity = get_Activity();
        //  判断是否为详情页
        if (detailActivity.indexOf("search.GlobalSearchActivity") == -1) {
            try {
                if (detailActivity.indexOf("notedetail.NoteDetailActivity") != -1) {
                    personate_detail("1");
                    device.move(tcConst.movement.shiftDown);
                    // 作者
                    // for (i = 0; i < 2; i++) {
                    //   delay(3000);
                    //   if (author) {
                    //
                    //     break;
                    //   }
                    // }
                    // 标题
                    var title = device.sendAai({
                        query: "C:.TextView&&R:.d44",
                        action: "getText",
                    });
                }
                if (
                    detailActivity.indexOf("detail.activity.DetailFeedActivity") != -1
                ) {
                    delay(randomNum(15000, 24000));
                    for (i = 0; i < 2; i++) {
                        var author = device.sendAai({
                            query: "C:.TextView&&R:.matrixNickNameView",
                            action: "getText",
                        });
                        if (author) {
                            break;
                        }
                    }
                    // 标题
                    var title = device.sendAai({
                        query: "C:.TextView&&R:.noteContentText",
                        action: "getText",
                    });
                    // personate_detail("2");
                }
                if (!author) {
                    author = {retval: ""};
                }
                if (!title) {
                    title = {retval: ""};
                }
                count = count + 1;
                printf(
                    device.name +
                    "查找到关键词：" +
                    keyTitle +
                    "共" +
                    count +
                    "次" +
                    "  搜索词:" +
                    gjc +
                    "  作者" +
                    author
                );

                // 存储关键词 keyAll
                keyAll.push(keyTitle);
                authorAll.push(author.retval);
                cajiEnd.push(keyTitle);
            } catch (err) {
                print(device.name + "错误描述11：" + err.message);
                delay(1000);
            }
            for (var i = 0; i < 3; i++) {
                var detailActivity2 = get_Activity();
                //  判断是否为详情页
                if (detailActivity2.indexOf("search.GlobalSearchActivity") == -1) {
                    device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
                    delay(1000);
                }
            }
        } else {
            print(device.name + "当前页面既不是视频也不是图片");
        }
    }
    if (tt) {
        device.move(tcConst.movement.shiftDown);
        delay(800);
    }
}

// 滑动页面
function search_key(keyTitle, key) {
    var ls = "";
    cajiEnd = [];
    for (var i = 0; i <= 38; i++) {
        error();
        deviceError();
        for (var x = 0; x < 3; x++) {
            for (var z = 0; z < keyTitle.length; z++) {
                click_key(keyTitle[z], key);
            }
            if (cajiEnd && keyTitle) {
                for (var j = 0; j < cajiEnd.length; j++) {
                    if (keyTitle.indexOf(cajiEnd[j]) != -1) {
                        keyTitle.splice(keyTitle.indexOf(cajiEnd[j]), 1);
                        print(
                            device.name +
                            "关键词:" +
                            key +
                            "   已经完成:" +
                            cajiEnd +
                            "  未完成:" +
                            keyTitle
                        );
                    }
                }
            }
        }

        if (keyTitle.length == 0) {
            break;
        }
        // 下滑
        var slide = device.move(tcConst.movement.shiftDown);
        delay(500);
    }
}

function run(key) {
    if (get_Activity().indexOf("update") != -1) {
        device.sendAai({query: "C:.ImageView&&R:.az9", action: "click"});
    }
    for (var i = 0; i < 3; i++) {
        try {
            if (get_Activity().indexOf("index") != -1) {
                device.click(970, 140, tcConst.STATE_PRESS);
                //                print(device.name + "进入小红书搜索页");
                delay(1000);
                device.exec(
                    "ime set com.sigma_rt.totalcontrol/.ap.service.SigmaIME",
                    5000
                );
                delay(1000);
            }

            // 输入关键
            var keyword = device.inputTextSync(0, key);
            delay(1000);
            // var search_text = device.sendAai({ query: "C:.EditText&&R:.ceo", action: "getText" });
            var search_text = device.sendAai({
                query: "T:搜索||OX:-2",
                action: "getText",
            });
            if (keyword == true && search_text.retval == key) {
                delay(1000);
                // 点击搜索按钮
                device.sendAai({query: "T:*搜索*", action: "click"});
                // 滑动页面
                delay(1000);
                search_key(keyDict[key], key);
                // 发现页滑动次数
                break;
            } else {
                delay(500);
                device.send(tcConst.keyCodes.KEYCODE_BACK, tcConst.STATE_PRESS);
            }
        } catch (err) {
            print(device.name + err);
        }
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
    print(device.name + "3次get_Activity都失败");
}
