class AddressBook{

	get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is Incorrect";
    }

    get address(){
    	return this._address;
    }
    set address(address){
        let addressRegex=RegExp("^[a-zA-Z]{1}[a-zA-Z\\s]{2,}$");
        if (addressRegex.test(address)) {
            this._address=address;
        }
        else{
            throw "Address is Incorrect";
        }
    	
    }

    get city(){
    	return this._city;
    }
    set city(city){
    	this._city=city;
    }

    get state(){
    	return this._state;
    }
    set state(state){
    	this._state=state;
    }

    get zip(){
    	return this._zip;
    }
    set zip(zip){
        let zipRegex=RegExp("^[0-9]{6}$");
        if (zipRegex.test(zip)) {
    	    this._zip=zip;
        }
        else{
            throw "Zip is Incorrect";
        }
    }

     
    get phoneNumber() {
    return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
    if (phoneNumberRegex.test(phoneNumber)) {
        this._phoneNumber = phoneNumber;
    } else {
        throw "Phone Number is Invalid!";
    }   
    }

    toString(){
return "Id = " + this.id + ", Name = " + this.name + ", Address = " + this.address + ", City = " + this.city + ", state = " + this.state + ", zip = " + this.zip + ", phone Number = " + this.phoneNumber};


}