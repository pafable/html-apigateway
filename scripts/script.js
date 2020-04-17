function SendIt() {
    var NAME = document.getElementById("name-input").value;
    var EMAIL = document.getElementById("email-input").value;
    var data = JSON.stringify({name: NAME, email: EMAIL});
    fetch('https://hks34l21be.execute-api.us-east-2.amazonaws.com/woot', { 
        method: 'POST',
        'Content-Type': 'application/json',
        Access-Control-Allow-Origin: *,
        body: data 
    });
    console.log(data)
} 