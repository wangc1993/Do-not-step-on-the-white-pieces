/*
* @Author: wc
* @Date:   2017-12-06 15:21:48
* @Last Modified time: 2017-12-07 14:26:08
*/
/*用一个二维数组表示黑块的背景色，1表示黑色，0表示无*/
var board = new Array();
/*初始化时间*/
var timerun = 0.000;
/*用于判断是否计时的变量*/
var timer = 0;
/*设置结束标记*/
var finish = 0;
$(function(){
    /*初始化*/
    init();
});

/*表格初始化*/
function init(){
    for(var i=0; i<4; i++){
        board[i] = new Array();
        for(var j=0; j<3; j++){
            /*初始化白块*/
            var gridCell = $('#grid-cell-'+ i +'-'+ j);
            gridCell.css('top', getPosTop(i));
            gridCell.css('left', getPosLeft(j));

            /*初始化黑块*/
            $('#grid-container').append('<div class="grid-black" id="grid-black-'+ i + "-"+ j +'"></div>');
            var gridBlack = $('#grid-black-'+ i +'-'+ j);
            gridBlack.css('top', getPosTop(i));
            gridBlack.css('left', getPosLeft(j));

            /*给黑块赋值*/
            board[i][j] = 0;
        }
    }

    /*每行随机生成一个黑块*/
    for(var i=0; i<4; i++){
        /*随机生成一个数字*/
        var randY = parseInt(Math.floor(Math.random() *3));
        /*判断相邻行随机数是否出现在同一列*/
        if(i>0 && board[i-1][randY] == 1){
            randY = parseInt(Math.floor(Math.random() *3));
        }
        var black = $('#grid-black-'+ i +'-'+randY);
        black.css('background-color', 'black');

        board[i][randY] = 1;
    }

    /*设置最后一行的文本*/
    $('#grid-black-'+ 3 +'-'+0).text('按J开始');
    $('#grid-black-'+ 3 +'-'+1).text('按K开始');
    $('#grid-black-'+ 3 +'-'+2).text('按L开始');
}