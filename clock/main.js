/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
/*


    var mycanvas=document.getElementById("mycanvas");
    var otex=mycanvas.getContext("2d");
    otex.beginPath();
    otex.moveTo(0,0);//起点
    otex.lineTo(250,250);
    otex.lineTo(500,0);
    otex.lineTo(0,0);
    otex.strokeStyle="yellow";
    otex.fillStyle="blue";//填充颜色  与fill配合使用
    otex.fill();
    otex.closePath();//关闭路径

    otex.stroke();

    otex.clearRect(100,100,100,100);//删除一个矩形区域（x,y,width,height）
    */


    var mycanvas=document.getElementById("mycanvas");
    var otex=mycanvas.getContext("2d");
    /*
     五角星
     */
    // otex.beginPath();
    // otex.moveTo(375,50);
    // for(var i=0;i<10;i+=2){
    //     var ox=200*Math.cos(i*72*Math.PI/180-Math.PI/2)+375;
    //     var oy=200*Math.sin(i*72*Math.PI/180-Math.PI/2)+250;
    //     otex.lineTo(ox,oy);
    // }
    // otex.closePath();
    // otex.stroke();
    // otex.fillStyle="yellow";
    // otex.fill();


    /*
    矩形

    otex.rect(100,100,200,200);
    otex.stroke();
     */

    /*
    圆
     */
    // otex.beginPath();
    // otex.arc(375,250,200,0,2*Math.PI);
    // // otex.strokeStyle="yellow";
    // otex.lineWidth=10;
    // otex.stroke();
    // otex.closePath();
    // otex.beginPath();
    // otex.arc(300,150,50,0,2*Math.PI);
    // otex.stroke();
    // otex.fillStyle="black";
    // otex.fill();
    // otex.closePath();
    // otex.beginPath();
    // otex.arc(450,150,50,0,2*Math.PI);
    // otex.stroke();
    // otex.fillStyle="black";
    // otex.fill();
    // otex.closePath();
    // otex.beginPath();
    // otex.arc(375,250,150,0,Math.PI);
    // otex.stroke();
    // otex.lineWidth=10;
    // otex.closePath();

    // otex.font="50px 宋体";
    // otex.strokeText("逗比" ,220,220);
    // otex.lineWidth=10;

    //渐变
    // var changeColor=otex.createLinearGradient(0,0,0,100);
    // changeColor.addColorStop(0.1,"red");
    // changeColor.addColorStop(0.3,"orange");
    // changeColor.addColorStop(0.6,"yellow");
    // changeColor.addColorStop(0.8,"green");
    // changeColor.addColorStop(1,"blue");
    // otex.rect(0,0,100,100);
    // otex.fillStyle=changeColor;
    // otex.fill();


    /*  
    画板
     */
    // mycanvas.onmousedown=function (ev) {
    //     var oevent=ev||event;
    //     otex.strokeStyle="#fff";
    //     otex.lineWidth=10;
    //     otex.moveTo(oevent.clientX-mycanvas.offsetLeft,
    //     oevent.clientY-mycanvas.offsetTop);
    //     mycanvas.onmousemove=function (ev) {
    //         var oevent=ev||event;
    //         otex.lineTo(oevent.clientX-mycanvas.offsetLeft,
    //             oevent.clientY-mycanvas.offsetTop);
    //         otex.stroke();
    //     };
    //     mycanvas.onmouseup=function () {
    //         mycanvas.onmousemove=null;
    //     }
    // }

    /*
    钟表
     */
    function time() {
        otex.clearRect(0,0,750,500);//清除画布
        otex.beginPath();
        otex.arc(375,250,200,0,2*Math.PI);
        otex.strokeStyle="red";
        otex.lineWidth=10;
        otex.stroke();
        otex.closePath();

        otex.strokeStyle="blue";
        otex.lineWidth=5;
        for(var i=0;i<60;i++){
        otex.save();
        otex.beginPath();
        otex.translate(375,250);
        otex.rotate(i*6*Math.PI/180);
        otex.moveTo(0,-180);
        otex.lineTo(0,-195);
        otex.closePath();
        otex.stroke();

        otex.restore();
        }

        otex.strokeStyle="green";
        otex.lineWidth=6;
        for(var j=0;j<12;j++){
        otex.save();
        otex.beginPath();
        otex.translate(375,250);
        otex.rotate(j*30*Math.PI/180);
        otex.moveTo(0,-170);
        otex.lineTo(0,-195);
        otex.closePath();
        otex.stroke();

        otex.restore();
        }

        var now=new Date();
        var h=now.getHours();
        var m=now.getMinutes();
        var s=now.getSeconds();

        otex.save();
        otex.beginPath();
        otex.strokeStyle="black";
        otex.lineWidth=10;
        otex.translate(375,250);
        otex.rotate((h+m/60)*30*Math.PI/180);
        otex.moveTo(0,10);
        otex.lineTo(0,-140);
        otex.closePath();
        otex.stroke();
        otex.restore();

        otex.save();
        otex.beginPath();
        otex.strokeStyle="grey";
        otex.lineWidth=5;
        otex.translate(375,250);
        otex.rotate((h+m/60)*6*Math.PI/180);
        otex.moveTo(0,10);
        otex.lineTo(0,-150);
        otex.closePath();
        otex.stroke();
        otex.restore();

        otex.save();
        otex.beginPath();
        otex.strokeStyle="red";
        otex.lineWidth=2;
        otex.translate(375,250);
        otex.rotate(s*6*Math.PI/180);
        otex.moveTo(0,10);
        otex.lineTo(0,-160);
        otex.closePath();
        otex.stroke();
        otex.restore();


    }
    time();
    setInterval(time,1000);


})();























