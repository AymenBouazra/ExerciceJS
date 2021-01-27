function formulaire(){
    var first=document.getElementById('1st')
    var last=document.getElementById('last')
    var email=document.getElementById('email')
    var password=document.getElementById('password')
    var storage=JSON.parse(localStorage.getItem('USERS')) || []
    // if(storage==null){
    //     storage=[]
    // }
   

    if(first.value=="" ){
        first.className +=' is-invalid'
      return ; 
    }
    else { 
        first.classList.remove('is-invalid')
        first.className +=' is-valid'
    }
    if(last.value=="" ){
        last.className +=' is-invalid'
       return;
    }
    else { 
        last.classList.remove('is-invalid')
        last.className +=' is-valid'
    }
    if(email.value.indexOf('@')==-1){
        email.className +=' is-invalid'
       return;
    }
    else { 
        email.classList.remove('is-invalid')
        email.className +=' is-valid'
    }
    if(password.value.length<6){
        password.classList.remove('is-valid')
        password.className +=' is-invalid' 
        document.getElementById("warning").innerHTML="6 or more caracters long"
        return;
    }
    else{
        password.classList.remove('is-invalid')
        password.className+= ' is-valid' 
        document.getElementById('warning').innerHTML=""
    }
    storage.push(
        {
            firstname: first.value,
            lastname:last.value,
            email:email.value,
            password:password.value
        }
    )
        localStorage.setItem('USERS',JSON.stringify(storage))
}



// localStorage.setItem('Storage',JSON.stringify(tab))


























// let tab =[{
//     nom: "oussama",
//     prenom: "loumi",
//     age: 20,
//     email: 'oussama@gmail.com',
//     password: '123' 
// }
// ];
// let obj={
//     nom:"aymen",
//     age:26,
//     email:'aymen@gmail.com',
//     password:'456'
// };
// let obj2={
//     nom:"tarek",
//     age:22,
//     email : 'tarek@gmail.com',
//     password:'789'
// };
// let obj3={
//     nom:"nawel",
//     age:23,
//     email:'nawel@gmail.com',
//     password:'000'
// };
// tab.push(obj,obj2,obj3)
// var mail='oussama@gmail.com'
// var pw='000'
// var check=tab.filter((x)=>{(x.email===mail)&&(x.password===pw) ? console.log(x):console.log('there is not') } )
// // var check=tab.find((x) => x.email===mail && x.password===pw )
// // console.log(check)


// // let tab6=tab.filter((x)=> x.age>20).sort((a,b) => a.age - b.age)
// // console.log(tab6)



// // let tab1=[1,5,3,2,9]
// // let tab3=tab1.filter(x => x>3 );
// // tab3.sort((a,b) =>{return a-b})
// // console.log(tab3)

// // let tab2=tab1.map(x => x*x).filter(x => x>5 ).sort((a,b) => {return a - b}).
// // console.log(tab2)
// // let tab2 = tab1.map((x) => {
// //     console.log(x);


// // })

// // let tab3= tab.filter((x) =>{ x.age>25 ?  console.log(x):x;} )


// // for(let i=0;i<tab1.length;i++){
// //     console.log(tab1[i])
// // }

// // function sum(a,b){
// //     let s=0
// //     s=a+b
// //    console.log(s)
// // }sum(1,2)

// // let s = (a,b) => { console.log(a+b)}
// // s(4,5)

