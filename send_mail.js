function submitFormData(event){
    var name = event.name.value;
    var phone = event.phone.value;
    var email = event.email.value;
    var message = event.message.value;
    document.getElementById("mySubmitButton").disabled = true;
    
    var url = "https://shrouded-peak-84878.herokuapp.com/contact-form-api.php";
    var params = 'name='+name+'&phone='+phone+'&email='+email+'&message='+message;

    let xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            swal("Good job!", "Mail Sent Successfully!", "success")
            document.forms['frmData'].reset();
            document.getElementById("mySubmitButton").disabled = false;
        }
    }
    xhr.send(params);
}

function getAQuote(event){
    var phone = event.mynumber.value;
    document.getElementById("getAQuoteBtn").disabled = true;
    var url = "https://shrouded-peak-84878.herokuapp.com/get-a-quote-api.php";
    var params = 'phone='+phone;

    let xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            swal("Good job!", "Quote Requested Successfully", "success")
            document.forms['frmData'].reset();
            document.getElementById("getAQuoteBtn").disabled = false;
        }
    }
    xhr.send(params);
    
}

