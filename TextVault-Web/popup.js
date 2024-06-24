var checkbox = document.getElementById("check");
var outputE = document.getElementById('outputE');
var outputD = document.getElementById('outputD');
var btn = document.getElementById('submitE');
let dBtn = document.getElementById('submitD');

//for the loaded screen to check the initial state of the checkbox
document.addEventListener("DOMContentLoaded", function() {
    if (!checkbox.checked) {
        // Checkbox is unchecked, execute basic script
        executeBasicScript();
    } else {
        // Checkbox is checked, execute advanced script
        executeAdvanceScript();
    }
});

//to see if anytime the state of checkbox is changing
function seeCheckBox(){
    checkbox.addEventListener('click', function(){
        if(checkbox.checked){
            executeAdvanceScript();
        }
        else{
            executeBasicScript();
        }
    });
}

function isEmpty(string){
    if(string == ""){
        alert("Enter a text to encrypt/decrypt");
        return 1;
    }
    return 0;
}

function executeBasicScript(){
    //BASIC ONE
    
    btn.addEventListener('click', function(){
        let encrypted = '';
        let string = document.getElementById('encrypt').value;
        if(isEmpty(string)){
            return;
        }
        let key = Math.floor(Math.random() * 9) + 1;
        
        Array.from(string).forEach(i => {
            if(i==" "){
                encrypted += " ";
            }
            else{
                let shiftValue = Math.abs(i.charCodeAt(0) - key);
                encrypted += String.fromCharCode(shiftValue);
            }
        });
        encrypted += String.fromCharCode(key+100);
        outputE.textContent = string + " encrypted into: " + encrypted;
    });
    
    
    dBtn.addEventListener('click', function(){
        let decrypted = '';
        let encryptedStr = document.getElementById('decrypt').value;
        if(isEmpty(encryptedStr)){
            return;
        }
        let keyWas = encryptedStr[encryptedStr.length - 1].charCodeAt(0)-100;
        let encryptedStrSliced = encryptedStr.slice(0,-1);
        Array.from(encryptedStrSliced).forEach(i => {
            if(i==" "){
                decrypted += " ";
            }
            else{
                let unshiftValue = Math.abs(i.charCodeAt(0)+keyWas);
                decrypted += String.fromCharCode(unshiftValue);
            }
        });
        outputD.textContent = encryptedStr + " decrypted into: " + decrypted;
    });
    seeCheckBox();    
       
}
function executeAdvanceScript(){
    //Advanced one
    btn.addEventListener('click', function(){
        var string = document.getElementById('encrypt').value;
        if(isEmpty(string)){
            return;
        }
        var key;
        key = Math.floor(Math.random() * 9) + 1; 
        console.log('key: ' + key);
        let encrypted = '';
        
        Array.from(string).forEach((i, ind) => {
            if(i==" "){
                encrypted += " ";
            }
            else{
                let newKey = key+ind;
                console.log("newKey: " + newKey);
                console.log("letters char code: " + i.charCodeAt(0));
                let shiftValue = Math.abs(i.charCodeAt(0) - (newKey));
                console.log("shiftValue: " + shiftValue + " its ascii: " + String.fromCharCode(shiftValue));
                encrypted += String.fromCharCode(shiftValue);
            }
        });
        encrypted += String.fromCharCode(key+100);
        console.log("Encrypted str: " + encrypted);
        outputE.textContent = string + " encrypted into: " + encrypted;
    });
    
    
    dBtn.addEventListener('click', function(){
        let decrypted = '';
        var encryptedStr = document.getElementById('decrypt').value;
        if(isEmpty(encryptedStr)){
            return;
        }
        let keyWas = encryptedStr[encryptedStr.length - 1].charCodeAt(0)-100;
        
        let encryptedStrSliced = encryptedStr.slice(0,-1);
        Array.from(encryptedStrSliced).forEach((i,ind) => {
            if(i==" "){
                decrypted += " ";
            }
            else{
                let updatedKey = keyWas+ind;
                let unshiftValue = Math.abs(i.charCodeAt(0)+updatedKey);
                decrypted += String.fromCharCode(unshiftValue);
            }
        });
        console.log("decrypted: " + decrypted);
        outputD.textContent = encryptedStr + " decrypted into: " + decrypted;
    });
    seeCheckBox(); 
}