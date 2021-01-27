function arg(){
    // var arguments=[1,2,3,4,5];
    var sum=0
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    alert(sum)
    document.getElementById('sum').value=Number(sum);

}