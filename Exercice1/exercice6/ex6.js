function alea(){
   var rand= parseInt(Math.random() * 100) ;
  
    var count=0
   

    do{
    var x=prompt("donner X")
    x=Number(x)
    
    if(x<rand){
       
        alert(x+'plus grand !')
    
    }else if(x>rand){
       
        alert( x+'plus petit !')

    }else {
        
        alert( x+ ' YOU FOUND IT !'+ (count+1)+ ' Times')
        
    }
    count++
   
    }while(rand!=x)

}