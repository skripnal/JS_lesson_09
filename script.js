var validate = false;

function validateAge(){
    var elem = document.getElementById('inputAge');
    if(elem.value == ''){
        elem.style.backgroundColor = '';
        validate = false;
    }else if(isNaN(elem.value) || elem.value < 1 || elem.value > 100){
        elem.style.backgroundColor = 'rgba(255, 0, 0, 0.377)';
        validate= false;
    } else{
        elem.style.backgroundColor = 'rgba(0, 255, 13, 0.377)';
        validate = true;
    }
}

function sendDataByGetMethod(){
    if (validate){
        var userData = {
            lName: document.getElementById('inputLastName').value,
            fName: document.getElementById('inputFirstName').value,
            age: document.getElementById('inputAge').value,
            address: document.getElementById('inputAddress').value
        }
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/formGet?lName="+ userData.lName + "&fName="+userData.fName+"&age="+userData.age+"&address="+userData.address);
        xhr.setRequestHeader("Content-type","application/json");
        xhr.send();
    }else{
        console.log("Валідація не пройдена");
    }
}

function sendDataByPostMethod(){
    if (validate){
        var userData = {
            lName: document.getElementById('inputLastName').value,
            fName: document.getElementById('inputFirstName').value,
            age: document.getElementById('inputAge').value,
            address: document.getElementById('inputAddress').value
        }
    
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/formPost");
        xhr.setRequestHeader("Content-type","application/json");
        xhr.send(JSON.stringify(userData));
    }else{
        console.log("Валідація не пройдена");
    }
}