
/*UC4:Add Form Validations*/

    window.addEventListener('DOMContentLoaded',(event)=>{
        const name=document.querySelector('#name');
        const textError=document.querySelector('.text-error');
        name.addEventListener('input',function(){
            if (name.value.length==0){
                textError.textContent=="";
                return;
            }
            try{
                (new AddressBook()).name=name.value;
                textError.textContent="";
            }
            catch(e){
                textError.textContent=e;
            }
        })
    });

   const address=document.querySelector("#address");
   const textError=document.querySelector('.text-error');
   address.addEventListener('input',function(){
    if (address.value.length==0) {
        textError.textContent=="";
        return;
    }
    try{
        new AddressBook().address=address.value;
        textError.textContent="";
    }
    catch(e){
        textError.textContent=e;
    }
   }) ;


    const zip=document.querySelector("#zip");
   zip.addEventListener('input',function(){
    if (zip.value.length==0) {
        textError.textContent=="";
        return;
    }
    try{
        new AddressBook().zip=zip.value;
        textError.textContent="";
    }
    catch(e){
        textError.textContent=e;
    }
   }) ;


    const phone=document.querySelector("#phone");
    phone.addEventListener('input',function(){
    if (phone.value.length==0) {
        textError.textContent=="";
        return;
    }
    try{
        new AddressBook().phone=phone.value;
        textError.textContent="";
    }
    catch(e){
        textError.textContent=e;
    }
   }) ;