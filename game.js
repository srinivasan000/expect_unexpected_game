var width = 15;
var height = 15;
var run=0;
var x = 5;
var    y = 5;

setInterval(go,1000);
function  body() {
  var bom1=1+ Math.floor(Math.random() * 14);
  var bom2= 1+Math.floor(Math.random() * 14);
  var bom3=1+ Math.floor(Math.random() * 14);

  var bom4= 1+Math.floor(Math.random() * 14);
    var r=document.getElementById("run").innerHTML=run++;
    var a = document.getElementById("a");
    var red=Math.floor(Math.random() * 256);
    var blue=Math.floor(Math.random() * 256);
    var green=Math.floor(Math.random() * 256);
    a.style.background="rgba("+red+","+blue+","+green+")";
	a.innerHTML="";
    for (var i = 0; i <= height; i++) {
        for (var j = 0; j <= width; j++) {
            if (i == 0 || i == height|| j==0 ||j==width) {
                a.innerHTML += "🧱";
            }else if (i == x && j == y) {
                a.innerHTML += "🙂";
                
            }else if((i==bom3 && j==bom4) || (j==bom3 && i==bom4)){
if((bom3==x && bom4 ==y)||(bom3==y && bom4==x)){
    a.innerHTML += "💥";
    var o=document.getElementById("o").play();
                        alert("your score :"+run+"\n☠️game over☠️");
                        
                         x=5;
		                	y=5;
			             run=0;
                        }else{
                       a.innerHTML += "💥";
                     var m=document.getElementById("m").play();       
                        }
                    }else if((i==bom1 && j==bom2) || (j==bom1 && i==bom2)){

if((bom1==x && bom2 ==y)||(bom1==y && bom2==x)){

    a.innerHTML += "💥";
    var o=document.getElementById("o").play();
                        alert("your score :"+run+"\n☠️ game over ☠️");

                         x=5;
		                	y=5;
			             run=0;
                        }else{
                            var m=document.getElementById("m").play();
                       a.innerHTML += "💥";}
                    }
                    else{
                a.innerHTML += "⬜";
            }
        }
        a.innerHTML += "<br>";
        }
};
function down(){
	d="down";
	var b=document.getElementById("b").play();
}
function up(){
    d="up";
	var b=document.getElementById("b").play();
}

function right(){
    d="right";
	var b=document.getElementById("b").play();
}

function left(){
    d="left";
	var b=document.getElementById("b").play();
}

function go(){

	if(d=="down"){
		if(x==0 || x==height){
		    var o=document.getElementById("o").play();
			alert("your score :"+run+"\n☠️ game over ☠️");
			x=5;
			y=5;
			run=0;
		}else{
			x++;
			body();}
	}else if(d=="up"){
		if(x==0 || x==height){
		    var o=document.getElementById("o").play();
	alert("your score :"+run+"\n☠️ game over ☠️");
			x=5;
			y=5;
			run=0;
		}else{
			x--;
			body();}
    }else if(d=="right"){
			if(y==0 || y==width){
			    var o=document.getElementById("o").play();
			alert("your score :"+run+"\n ☠️game over ☠️");
			y=5;
			x=5;
			run=0;
		}else{
			y++;
			body();}
	}else if(d=="left"){
			if(y==0 || y==width){
			    var o=document.getElementById("o").play();
		alert("your score :"+run+"\n☠️game over☠️");
			y=5;
			x=5;
			run=0;
		}else{
			y--;
			body();}
			}
	
}