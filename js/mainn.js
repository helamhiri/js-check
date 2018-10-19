var tt=document.getElementById('par');
var init=tt.innerHTML;
var a=0;
var b=0;
var c=0;
function font(){
	var x = document.getElementById("list").value;
	tt.style.fontFamily=x;
}
function sizet(){
	var x = document.getElementById("list1").value;
	tt.style.fontSize= x;
}
function kbir() {
    
	
	if (a>0){
		a=0;
		var str=tt.innerHTML;
		var newtxt =str.replace("<b>","");
		var text=newtxt.replace("</b>","");
		tt.innerHTML= text;
	}else{
		var text = "<b>"+ tt.innerHTML +"</b>";
		tt.innerHTML = text;
		a=1;
	}
	
	
}
function inc() {
	
	if (b>0){
		b=0;
		var str=tt.innerHTML;
		var newtxt =str.replace("<i>","");
		var text=newtxt.replace("</i>","");
		tt.innerHTML= text;
	}else{
		var text = "<i>"+ tt.innerHTML +"</i>";
		tt.innerHTML = text;
		b=1;
	}
	
}
function star() {
	
	if (c>0){
		c=0;
		var str=tt.innerHTML;
		var newtxt =str.replace("<u>","");
		var text=newtxt.replace("</u>","");
		tt.innerHTML= text;
	}else{
		var text = "<u>"+ tt.innerHTML +"</u>";
		tt.innerHTML = text;
		c=1;
	}
	
}