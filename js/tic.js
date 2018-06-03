var val = "O";
var animationimages=['./images/1.png','./images/2.png','./images/3.png','./images/4.png','./images/5.png','./images/6.png','./images/11.png','./images/8.png','./images/9.png','./images/3.png','./images/6.png'];
 var movements=[]; 
 var childs=[];
 var childadding;
 for(var i=0;i<animationimages.length;i++){
    childadding=document.createElement("img");
    childadding.setAttribute("src",animationimages[i]);
    childadding.setAttribute("width","100px");
    childadding.setAttribute("height","100px");
    childadding.setAttribute("id","flow");
    childs.push(childadding);
 }
function cleardiv() {
     for(var iter=1;iter<=9;iter++){
         document.getElementById(iter).style.pointerEvents='none';
          
     }
}


function compare() {
    //getting every div id
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;

    var ans;
    var points=[];
    //checking with possible positions
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        ans=b1;
        points.push("1");
        points.push("2");
        points.push("3");
        cleardiv();
       
        movements=[];
        

    }
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        ans=b1;
        points.push("1");
        points.push("4");
        points.push("7");
        cleardiv();
        movements=[];
    }
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        ans=b9;
        points.push("9");
        points.push("8");
        points.push("7");
        cleardiv();
        movements=[];
    }
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
        ans=b9;
        points.push("9");
        points.push("6");
        points.push("3");
      cleardiv();
      movements=[];
    }
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        ans=b4;
        points.push("4");
        points.push("5");
        points.push("6");
      cleardiv();
      movements=[];
    }
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        ans=b2;
        points.push("2");
        points.push("5");
        points.push("8");
      cleardiv();
      movements=[];
    }
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
        ans=b1;
        points.push("1");
        points.push("5");
        points.push("9");
      cleardiv();
      movements=[];
    }
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
        ans=b7;
        points.push("7");
        points.push("5");
        points.push("3");
      cleardiv();
      movements=[];
    }
    if(ans=="X"){
        for(var i=0;i<points.length;i++){
            document.getElementById(points[i]).innerHTML="<img src='images/red.png' class='animated bounceIn infinite' width=80px heigth=80px style='margin-top:18px;'>";
            document.getElementById("music").innerHTML="<embed src='winning.mp3' autostart='true' loop='true' width='2' height='0'></embed>"
        }
       for(var i=0;i<childs.length;i++){
        document.body.appendChild(childs[i]);
       }
    }
    else if(ans=='O'){
        
        for(var i=0;i<points.length;i++){
            document.getElementById(points[i]).innerHTML="<img src='images/heart.jpg' class='animated bounceIn infinite' width=80px heigth=80px style='margin-right:5px;'>";
            document.getElementById("music").innerHTML="<embed src='winning.mp3' autostart='true' loop='true' width='2' height='0'></embed>"
            
        }
        for(var i=0;i<childs.length;i++){
            document.body.appendChild(childs[i]);
           }
    }
    }

  
//fix the positions value
function setMovements(x, val) {
    var button=null;
     if (x==1) {
     button = document.getElementById("1");
     button.value = val;
     movements.push("1");
    document.getElementById('1').style.pointerEvents = 'none';
    
     }
     else if (x==2) {
      button = document.getElementById("2");
     button.value = val;
     movements.push("2");
     document.getElementById('2').style.pointerEvents = 'none';
    
     }
     else if (x==3) {
      button = document.getElementById("3");
     button.value = val;
     movements.push("3");
     document.getElementById('3').style.pointerEvents = 'none';
     }
     else if (x==4) {
      button = document.getElementById("4");
     button.value = val;
     movements.push("4");
     document.getElementById('4').style.pointerEvents = 'none';

     }
     else if (x==5) {
      button = document.getElementById("5");
     button.value = val;
     movements.push("5");
     document.getElementById('5').style.pointerEvents = 'none';
     }
     else if (x==6) {
      button = document.getElementById("6");
     button.value = val;
     movements.push("6");
     document.getElementById('6').style.pointerEvents = 'none';
     }
     else if (x==7) {
      button = document.getElementById("7");
     button.value = val;
     movements.push("7");
     document.getElementById('7').style.pointerEvents = 'none';
     }
     else if (x==8) {
      button = document.getElementById("8");
     button.value = val;
     movements.push("8");
     document.getElementById('8').style.pointerEvents = 'none';
     }
     else if (x==9) {
      button = document.getElementById("9");
     button.value = val;
     movements.push("9");
     document.getElementById('9').style.pointerEvents = 'none';
     }
     if(val=='X'){
        button.innerHTML = "<span class='glyphicon glyphicon-heart' style='color:red;font-size:60px;margin-top:20px;'></span>";
     }
     else{
        button.innerHTML = "<span class='glyphicon glyphicon-heart' style='color:blue;font-size:60px;margin-top:20px;'></span>";
     }
     compare();
     }
  
//start function
function block(button) {
    if (val=="X") {
    val="O";
    setMovements(button, val);
    }
    else if (val=="O") {
    val="X";
    setMovements(button, val);
    }
    }
//resetting everything
function resetAll(){
    for(var iter=1;iter<=9;iter++){
        document.getElementById(iter).style.pointerEvents="initial";
        document.getElementById(iter).value="";
        document.getElementById(iter).innerHTML="";
    }
    document.getElementById("music").innerHTML="<embed src='beat.mp3' autostart='true' loop='true' width='2' height='0'></embed>"
    for(var i=0;i<childs.length;i++){
        $("#flow").remove();
    }
    
}
function undo(){
    if(val=="X"){
        val="O";
    }
    else if(val=="O"){
        val="X";
    }
    document.getElementById(movements[movements.length-1]).innerHTML="";
    document.getElementById(movements[movements.length-1]).style.pointerEvents="initial";
    movements.splice(movements.length-1,1)
}