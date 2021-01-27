async function ajoutimage(){
    var images=document.getElementById('formFile').files
    var image=images[0]

    
    
    if (image!==undefined){
        // console.log(image)// fileReader 
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        const base64= await  toBase64(image)
        // console.log( base64)
        var Storage=JSON.parse(localStorage.getItem('USERS')) || []
        // console.log(Storage[0])
        Storage[0].image =  base64 
                
        localStorage.setItem('USERS',JSON.stringify(Storage))
        //Set image in preview
        document.getElementById('img').src = Storage[0].image
        

    }

    
}