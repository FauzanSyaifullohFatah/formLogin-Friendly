var boxLog = document.getElementsByClassName("box-login")[0];
var boxReg = document.getElementsByClassName("box-register")[0];
var toLog = document.getElementById("to-log");
var toReg = document.getElementById("to-reg");
const input = document.getElementsByClassName("inp");

for (var i = 0; i < boxReg.children.length; i++){
  if (i % 2 === 0){
    boxReg.children[i].style.transform = "translateX(200%)";
  } else {
    boxReg.children[i].style.transform = "translateX(-200%)";
  }
}
for (var i = 0; i < input.length; i++){
  input[i].addEventListener("focus", function(){
    var label = this.nextElementSibling;
    label.style.transform = "translateX(10px) translateY(-68px)";
    label.style.color = "whitesmoke";
    var icon = label.getElementsByTagName("i")[0];
    icon.style.color = "rgb(1, 251, 76)";
  });
  input[i].addEventListener("blur", function(){
    if (this.value.length == 0){
      var label = this.nextElementSibling;
      label.style.transform = "translateX(10px) translateY(-28px)";
      label.style.color = "rgba(17, 34, 51, 0.502)";
      var icon = label.getElementsByTagName("i")[0];
      icon.style.color = "rgba(17, 34, 51, 0.502)";
    }
  });
}
toReg.onclick = function(){moveForm(boxReg,boxLog);}
toLog.onclick = function(){moveForm(boxLog,boxReg);}

function moveForm(boxIn, boxOut){
  boxIn.style.zIndex = "1";boxOut.style.zIndex = "0";
  for (var i = 0; i < boxIn.children.length; i++){
    if (i % 2 === 0){
      boxIn.children[i].style.transition = "1s all";
      boxIn.children[i].style.transform = "translateX(0%)";
      boxIn.children[i].style.filter = "blur(0px)";
    } else {
      boxIn.children[i].style.transition = "1s all";
      boxIn.children[i].style.transform = "translateX(0%)";
      boxIn.children[i].style.filter = "blur(0px)";
    }
  };
  for (var i = 0; i < boxOut.children.length; i++){
    if (i % 2 === 0){
      boxOut.children[i].style.transition = "1s all";
      boxOut.children[i].style.transform = "translateX(200%)";
      boxOut.children[i].style.filter = "blur(10px)";
    } else {
      boxOut.children[i].style.transition = "1s all";
      boxOut.children[i].style.transform = "translateX(-200%)";
      boxOut.children[i].style.filter = "blur(10px)";
    }
  }
}
