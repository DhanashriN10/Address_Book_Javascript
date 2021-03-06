
/*UC4:Add Form Validations*/

window.addEventListener("DOMContentLoaded", (event) => {
    
     /*UC7 added*/
     ValidateName();
    ValidatePhoneNumber();
    ValidateAddress();
    validateZipcode();

    /*const setTextValue = (id, value) => {
        const element = document.querySelector(id);
        element.textContent = value;*/
    });

    const ValidateName= () =>{        /*UC7 added*/
    const name = document.querySelector("#name");
    name.addEventListener("input", function () {
    if (name.value.length == 0) {
        setTextValue(".name-error", "");
        return;
    }
    try {
        new AddressBook().name = name.value;
        setTextValue(".name-error", "");
    } catch (error) {
        setTextValue(".name-error", error);
    }
    });
  };

   const ValidateAddress=()=>{              /*UC7 added*/
    const address = document.querySelector("#address");
    address.addEventListener("input", function () {
    if (address.value.length == 0) {
        setTextValue(".address-error", "");
        return;
    }
    try {
        new AddressBook().address = address.value;
        setTextValue(".address-error", "");
    } catch (error) {
        setTextValue(".address-error", error);
    }
    });
  }

   const validateZipcode=()=>{                     /*UC7 added*/
    const zip = document.querySelector("#zip");
    zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
        setTextValue(".zip-error", "");
        return;
    }
    try {
        new AddressBook().zip = zip.value;
        setTextValue(".zip-error", "");
    } catch (error) {
        setTextValue(".zip-error", error);
    }
    });
  };


  const ValidatePhoneNumber=()=>{                          /*UC7 added*/
    const phoneNumber = document.querySelector("#phoneNumber");
    phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
        setTextValue(".tel-error", "");
        return;
    }
    try {
        new AddressBook().phoneNumber = phoneNumber.value;
        setTextValue(".tel-error", "");
    } catch (error) {
        setTextValue(".tel-error", error);
    }
    });

/*});*/
};

// <!-- UC-6 - On clicking Submit Button to the following:  -->

function save() {
   
    try{
        let contact=createContact();
        console.log(contact);
        createAndUpdateStorage(contact);
    }
    catch(error){
        alert(error);
    }
};

const createContact=()=>{
    let contact= new AddressBook();
    contact.id=id();
    function id(){
        var id=Math.floor(Math.random()*100);
        if(JSON.parse(localStorage.getItem("ContactList")).find(x =>x.id === id)){
            id();
        }else{
            return id;  
        }
    }


    try {
    contact.name = getInputValueById("#name");
    } catch (error) {
    setTextValue(".name-error", error);
    throw error;
    }

    try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
    } catch (error) {
    setTextValue(".tel-error", error);
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

    /*console.log(contact.toString());*/
    alert(contact.toString());
    return contact;
};

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

function getInputValueById(property) {
    let value = document.querySelector(property).value;
    return value;
}