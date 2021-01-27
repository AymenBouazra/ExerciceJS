function Login() { 
    var Storage=JSON.parse(localStorage.getItem('USERS')) || []
    var email=document.getElementById('email')
    var password=document.getElementById('password')

    if(email.value.indexOf('@')==-1){
        email.className+= ' is-invalid'
        email.classList.remove('valid')
        document.getElementById("wrongemail").innerHTML="Please enter a valid email "
    }else{
        email.classList.remove('is-invalid')
        email.className += ' is-valid'
        document.getElementById("wrongemail").innerHTML=""
    }
    if(password.value.length<6){
        password.className+= ' is-invalid'
        password.classList.remove('is-valid')
        document.getElementById("wrongpswd").innerHTML="6 or more caracters long"
    }else{
        password.classList.remove('is-invalid')
        password.className += ' is-valid'
        document.getElementById("wrongpswd").innerHTML=""
    }
    var loggeduser=Storage.find((x) => x.email==email.value && x.password==password.value )
   console.log(loggeduser)
   if(loggeduser!=undefined){
       //it's logged succesfully
       window.location.href='dashbord.html'
   }else{
       alert('verify your mail and/or password')
   }

}
