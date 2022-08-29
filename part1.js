var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "421$$") {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        alert("You Entered Wrong username & password");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}


//calculator



calc = function () {
    let number1 = parseInt(document.getElementById("firstNumber").value);

    let operator = document.getElementById("operator").value;
    let number2 = parseInt(document.getElementById("secondNumber").value);
    let result;

    

    if (operator == '+') {
        result = number1 + number2;
        console.log({ result });
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }


    document.getElementById("finale").innerHTML = (`${number1} ${operator} ${number2} = ${result}`);
   
}



