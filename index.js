let outputscreen = document.getElementById("screen");
function display(num){
    outputscreen.value += num;
}
function cal(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function clr(){
    outputscreen.value = " ";
}
function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}
outputscreen.addEventListener(num);