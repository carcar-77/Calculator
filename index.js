let expressions = [];
let currIndex = 0;
function Calculate() {
    document.getElementById("Result").innerText = eval(document.getElementById("CalcInput").value);
    expressions.push(document.getElementById("CalcInput").value);
    localStorage.setItem('myExpressions', JSON.stringify(expressions));
}
function add(value){
    const temp = document.getElementById("CalcInput");
    temp.value += value
}
function load(){
    const stored = localStorage.getItem('myExpressions');
    if(stored){
        expressions = (JSON.parse(stored));
    }
    else{
        expressions = [];
    }
}
function arrows(direction){
    let temp = expressions[currIndex];
    let temp2 = document.getElementById("CalcInput").value
    if(temp !== temp2){
        currIndex = expressions.length - 1;
    }
    currIndex = currIndex + direction;
    if(currIndex < 0 || currIndex > expressions.length - 1){
        currIndex = currIndex - direction;
    }
    document.getElementById("CalcInput").value = expressions[currIndex];
    document.getElementById("Result").innerText =""

}
