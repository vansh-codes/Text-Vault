const checkbox = document.getElementById("check");
const outputE = document.getElementById('outputE');
const outputD = document.getElementById('outputD');
const btn = document.getElementById('submitE');
const dBtn = document.getElementById('submitD');

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
        const encrypted = '';
        const string = document.getElementById('encrypt').value;
        if(isEmpty(string)){
            return;
        }
        const key = Math.floor(Math.random() * 9) + 1;
        
        Array.from(string).forEach(i => {
            if(i==" "){
                encrypted += " ";
            }
            else{
                const shiftValue = Math.abs(i.charCodeAt(0) - key);
                encrypted += String.fromCharCode(shiftValue);
            }
        });
        encrypted += String.fromCharCode(key+100);
        outputE.textContent = string + " encrypted into: " + encrypted;
    });
    
    
    dBtn.addEventListener('click', function(){
        const decrypted = '';
        const encryptedStr = document.getElementById('decrypt').value;
        if(isEmpty(encryptedStr)){
            return;
        }
        const keyWas = encryptedStr[encryptedStr.length - 1].charCodeAt(0)-100;
        const encryptedStrSliced = encryptedStr.slice(0,-1);
        Array.from(encryptedStrSliced).forEach(i => {
            if(i==" "){
                decrypted += " ";
            }
            else{
                const unshiftValue = Math.abs(i.charCodeAt(0)+keyWas);
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
        const encrypted = '';
        
        Array.from(string).forEach((i, ind) => {
            if(i==" "){
                encrypted += " ";
            }
            else{
                const newKey = key+ind;
                console.log("newKey: " + newKey);
                console.log("constters char code: " + i.charCodeAt(0));
                const shiftValue = Math.abs(i.charCodeAt(0) - (newKey));
                console.log("shiftValue: " + shiftValue + " its ascii: " + String.fromCharCode(shiftValue));
                encrypted += String.fromCharCode(shiftValue);
            }
        });
        encrypted += String.fromCharCode(key+100);
        console.log("Encrypted str: " + encrypted);
        outputE.textContent = string + " encrypted into: " + encrypted;
    });
    
    
    dBtn.addEventListener('click', function(){
        const decrypted = '';
        var encryptedStr = document.getElementById('decrypt').value;
        if(isEmpty(encryptedStr)){
            return;
        }
        const keyWas = encryptedStr[encryptedStr.length - 1].charCodeAt(0)-100;
        
        const encryptedStrSliced = encryptedStr.slice(0,-1);
        Array.from(encryptedStrSliced).forEach((i,ind) => {
            if(i==" "){
                decrypted += " ";
            }
            else{
                const updatedKey = keyWas+ind;
                const unshiftValue = Math.abs(i.charCodeAt(0)+updatedKey);
                decrypted += String.fromCharCode(unshiftValue);
            }
        });
        console.log("decrypted: " + decrypted);
        outputD.textContent = encryptedStr + " decrypted into: " + decrypted;
    });
    seeCheckBox(); 
}