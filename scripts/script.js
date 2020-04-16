// alert("Hello world!")
function SendIt() {
    var NAME = document.getElementById("name-input").value;
    var EMAIL = document.getElementById("email-input").value;
    var data = JSON.stringify({name: NAME, email: EMAIL});
    // fetch('APIGATEWAY-URL', { 
    //     method: 'POST', 
    //     body: data 
    // });
    console.log(data)
} 