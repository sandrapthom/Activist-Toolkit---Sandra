var clickCount = 0;

var factButton = document.getElementById("factButton");


var factTextArea = document.getElementById("factTextArea");


factButton.addEventListener("click", sendFact);

function sendFact(){
clickCount += 1

if(clickCount == 1 ){
sendFact1();
}

if (clickCount == 2){
sendFact2();

}

if (clickCount == 3){
sendFact3();
resetFact ();

}
}



function sendFact1(){
  factTextArea.textContent= "A huge misconception is that women are not able to perform the same tasks that men could in a STEM field.";
}

function sendFact2(){
  factTextArea.innerHTML= "Women in STEM earn less than men in STEM.";
}

function sendFact3(){
  factTextArea.textContent= "44% of adolescent girls in the world’s poorest countries having either dropped out or never attended school. ";
}

function resetFact(){
  clickCount = 0;
  factTextArea.textContent= "By 2019, woman only made up 27% of the STEM career field in the US.";
}