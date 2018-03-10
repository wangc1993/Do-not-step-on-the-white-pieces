/*
* @Author: wc
* @Date:   2017-12-06 18:35:12
* @Last Modified time: 2017-12-07 14:27:02
*/
//获取键盘事件
$(document).keydown(function(event){
    if(finish == 0){
        //keydown事件的形参,通过event.keyCode获取对应的键盘值
        switch (event.keyCode){
            case 74://J
                //如何判断敲击是正确的
                if(board[3][0] == 1 && timer<10){
                    //说明敲击是正确的
                    if(timer == 0){
                        //初始化计时器
                        timeRun();
                    }
                    //将游戏开始的提示内容去掉
                    clearText();
                    //黑块整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;
            case 75://K
                //如何判断敲击是正确的
                if(board[3][1] == 1 && timer<10){
                    //说明敲击是正确的
                    if(timer == 0){
                        //初始化计时器
                        timeRun();
                    }
                    //将游戏开始的提示内容去掉
                    clearText();
                    //黑块整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;
            case 76://L
                //如何判断敲击是正确的
                if(board[3][2] == 1 && timer<10){
                    //说明敲击是正确的
                    if(timer == 0){
                        //初始化计时器
                        timeRun();
                    }
                    //将游戏开始的提示内容去掉
                    clearText();
                    //黑块整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;
        }
    }
});

function timeRun(){
    timerun += 0.001;
    $('#time').text(timerun.toString().substr(0,5));/*避免计时器出现更多小数位*/
    t = setTimeout("timeRun()",1);
}

function clearText(){
    $("#grid-black-3-0").text("");
    $("#grid-black-3-1").text("");
    $("#grid-black-3-2").text("");
}

function moveDown(){
    //遍历12个黑块,倒序遍历
    for(var i=3;i>=0;i--){
        for(var j=2;j>=0;j--){
            if(board[i][j] == 1){
                if(i==3){
                    //将当前的黑块的颜色改变成白色
                    $("#grid-black-"+i+"-"+j).css("background-color","#fff");
                    board[i][j] = 0;
                }else{
                    //将当前的黑块的颜色改变成白色
                    $("#grid-black-"+i+"-"+j).css("background-color","#fff");
                    board[i][j] = 0;
                    //将当前的黑块下一行同一列的黑块颜色改变成黑色
                    $("#grid-black-"+(i+1)+"-"+j).css("background-color","#000");
                    board[i+1][j] = 1;
                }
            }
        }
    }
    //第一行重新随机一个黑块的位置
    var randy = parseInt(Math.floor(Math.random() * 3));
    var block = $("#grid-black-0-"+randy);
    block.css("background-color","#000");
    board[0][randy] = 1;

    /*timer累加*/
    timer += 1;;
}

//用于游戏结束部分
function isgameover(){
    /*停止计时*/
    clearTimeout(t);
    /*增加结束界面*/
    $('#grid-container').append("<div id='gameover' class='gameover'><p>本次用时</p><span>" + timerun.toString().substr(0,5) + "秒</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
    var gameover = $("#gameover");
    gameover.css("width", "300px");
    gameover.css("height", "400px");
    gameover.css("background-color", "rgba(0, 0, 0, 0.5)");

    /*设置结束标记*/
    finish = 1;
}

/*重新开始*/
function restartgame(){
    /*计时器归零*/
    $('#time').text('0.000');
    /*结束界面消失*/
    $('#gameover').remove();
    /*原有黑块清除*/
    $('.grid-black').remove();
    /*初始化timer、finish*/
    timer = 0;
    finish = 0;
    /*重新初始化*/
    init();
}