class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(actualAccessCode1, enteredAccessCode1){
        if(actualAccessCode1 === enteredAccessCode1)
           return true
        else
           return false
    }
    authenticate(actualAccessCode2, enteredAccessCode2){
        if(actualAccessCode2 === enteredAccessCode2)
           return true
        else
           return false
    }
    authenticate(actualAccessCode3, enteredAccessCode3){
        if(actualAccessCode3 === enteredAccessCode3)
           return true
        else
           return false
    }
}