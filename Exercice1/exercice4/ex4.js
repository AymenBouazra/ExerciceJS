function ex4(){
var A=document.getElementById("A").value;
var B=document.getElementById('B').value;
var C=Number(A)+Number(B)
document.getElementById('Sum').value=C;
alert(typeof(C))
}