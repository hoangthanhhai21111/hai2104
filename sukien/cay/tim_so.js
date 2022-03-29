var Canvas = document.getElementById('mycanvas')
var ctx = Canvas.getContext('2d');

nhanvat = {
    x: 100, y : 500
}
setInterval(start,100){
    context.clearRect(0,0,300,600);
    context.fillStyle ='blue';
    context.fillRect(nhanvat.x,nhanvat.y,300,600);
    vacham();
}
function vacham(){
    if(nhanvat.x<=0 || nhanvat.x +25<=300){
        console.log('thua');
    }
}

