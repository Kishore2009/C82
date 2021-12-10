canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    radius=document.getElementById("radius").value ;
    color=document.getElementById("color").value ;  
    width=document.getElementById("width_line").value ;
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
   
    mouseEvent="mouseUp";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
   
    mouseEvent="mouseLeave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
   console.log(e);
    current_position_mousex=e.clientX-canvas.offsetLeft;

    current_position_mousey=e.clientY-canvas.offsetTop;
    

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(current_position_mousex,current_position_mousey,radius,0,2*Math.PI);
ctx.stroke();

}
    
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

