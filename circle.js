var s = document.getElementById("svg_id");
var sto = document.getElementById("stop");
var circ = document.getElementById("circle");
var d = document.getElementById("dvd");

var circle = function(){
    var radius = 25;
    var grow = true;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 300);
    circle.setAttribute("cy", 300);
    s.appendChild(circle);

    var grow = function(){
	if(grow){
	    radius++;
	    circle.setAttribute("r", radius);
	    if(radius > 300){
		grow= false;
	    }
	}
	else{
	    shrink();
	}
    }

    var shrink = function(){
	radius--;
	circle.setAttribute("r", radius);
	if(radius < 0 ){
	    grow = true;
	}
    }
    
    setInterval(grow, 10);
}

var dvd = function(){
    var imgW = 100;
    var imgH = 75;
    var x = Math.random()*(c.width-imgW);
    var y = Math.random()*(c.height-imgH);
    var dX = 5;
    var dY = 5;
    
    var move = function() {	
	var img = new Image();
	img.src = 'dvd.jpg';
	img.onload = function(){
	    //ctx.drawImage(img,x,y, imgW,imgH);
	    var dvdLogo = document.createElementNS("http://www.w3.org/2000/svg", "image");
	}
	dvdLogo.setAttribute("x", x);
	dvdLogo.setAttribute("y", y);
	dvdLogo.setAttribute("width", imgW);
	dvdLogo.setAttribute("height", imgH);
	dvdLogo.setAttribute("xlink:hred", /*url*/);
	if(x+imgW >= c.width || x < 0){
	    dX *= -1;
	}
	if(y+imgH >= c.height || y < 0){
	    dY *= -1;
	}
	x+=dX;
	y+=dY;
	requestID = window.requestAnimationFrame(move);
    }
    
    move();
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
}

circ.addEventListener("click", circle);
d.addEventListener("click", dvd);
sto.addEventListener("click", stop);
