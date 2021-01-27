function ex3(){
    let mail=''
    let i=0;
    var a,b,c,d;
    test=false;
   if( document.getElementById('name').value.length ==0){
      a= 'not valide'
   }
   else{
       a = ' name valide'
   }
   document.getElementById("msgname").innerText = a;
   if( document.getElementById('fname').value.length ==0){
    b= 'not valid'
    }
    else{
     b = 'family name valide'
    }
    document.getElementById("msgfname").innerText = b;
    
        if(document.getElementById('email').value.indexOf('@')==-1){
            c= 'this is not an email adress' ;
              
        }
        else{
            c='email valide';
          
        }
    document.getElementById("mailvalid").innerText = c ;

        if(document.getElementById('password').value.length<8 ){
            d='you must enter 8 or more caracatéres in your password'

        }else{
            d='password valide'
        }
    document.getElementById("passwordvalid").innerText = d;
}
