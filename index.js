var s = document.getElementById("svg_id");
var sto = document.getElementById("stop");
var circ = document.getElementById("circle");
var d = document.getElementById("dvd");
var id;

var circle = function(){
    clear();
    var radius = 25;
    var grow = true;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 300);
    circle.setAttribute("cy", 300);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");
    s.appendChild(circle);

    var grow = function(){
	if(grow){
	    radius++;
	    circle.setAttribute("r", radius);
	    if(radius >= 300){
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
	if(radius <= 0 ){
	    grow = true;
	}
    }
    
    id = setInterval(grow, 10);
}

var dvd = function(){
    clear();
    var imgW = 200;
    var imgH = 150;
    var x = Math.random()*(600-imgW);
    var y = Math.random()*(600-imgH);
    var dX = 1;
    var dY = 1;
    var dvdLogo = document.createElementNS("http://www.w3.org/2000/svg", "image");
    dvdLogo.setAttribute("width", imgW);
    dvdLogo.setAttribute("height", imgH);
    dvdLogo.setAttribute("href", 'dvd.jpg');
    s.appendChild(dvdLogo);
    
    var move = function() {	
	dvdLogo.setAttribute("x", x);
	dvdLogo.setAttribute("y", y);
	if(x+imgW >= 600 || x < 0){
	    dX *= -1;
	}
	if(y+imgH >= 600 || y < 0){
	    dY *= -1;
	}
	x+=dX;
	y+=dY;
    }
    
    id = setInterval(move, 10);
}

var stop = function(){
    clearInterval(id);
}

var clear = function(){
    for(i = s.children.length-1; i >= 0; i--){
	s.removeChild(s.children[i]);
    }
}

circ.addEventListener("click", circle);
d.addEventListener("click", dvd);
sto.addEventListener("click", stop);
