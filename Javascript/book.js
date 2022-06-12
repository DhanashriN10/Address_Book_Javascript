
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


    // <!-- UC-6 - On clicking Submit Button to the following:  -->

function save() {
    let contact = new Contact();
    contact.id = Math.random();

    try {
    contact.name = getInputValueById("#name");
    } catch (error) {
    setTextValue(".name-error", error);
    throw error;
    }

    try {
    contact.phone = getInputValueById("#phone");
    } catch (error) {
    setTextValue(".phone-error", error);
    throw error;
    }

    try {
    contact.address = getInputValueById("#address");
    } catch (error) {
    setTextValue(".address-error", error);
    throw error;
    }
    
    let city = getInputValueById("#city");
    if (city != "Select City") {
    contact.city = city;
    } else {
    throw "Please select city";
    }

    let state = getInputValueById("#state");
    if (state != "Select State") {
    contact.state = state;
    } else {
    throw "Please select state";
    }

    try {
    contact.zip = getInputValueById("#zip");
    } catch (error) {
    setTextValue(".zip-error", error);
    throw error;
    }

    console.log(contact.toString());
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

function getInputValueById(property) {
    let value = document.querySelector(property).value;
    return value;
}