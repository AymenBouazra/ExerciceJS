function calcsalaire(){
    var Brut=Number(document.getElementById('salaire').value)
    
    if(document.getElementById('100$').checked ){
        Brut=Brut+100;
    } 
    if(document.getElementById('150$').checked ){
        Brut=Brut+150;
    } 
    if(document.getElementById('femme').checked){
        Brut=Brut+(Brut*(2/100));
    }
    if(document.getElementById('3enf').checked){
        Brut=Brut+(Brut/100);
    }
    if(document.getElementById('4enf').checked){
        Brut=Brut+(Brut*(2/100));
    }
    
    var Net=Brut-(Brut*((5+7+18)/100));
    alert('Salaire : '+ Net + ' $')
}