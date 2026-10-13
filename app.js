    function handleSubmit(event) {
        event.preventDefault();
    }


    document.getElementById("submit").addEventListener("click", function(event) {

        event.preventDefault();
        let visitorName = document.getElementById("name").value;
        let age = document.getElementById("age").value;

        if (isNaN(age) || age <= 0) {
            document.getElementById("result").innerHTML = "Please enter valid age!";
            return;
        }

        let resultMessage = getTicketPrice(visitorName, age);
        document.getElementById('result').innerText = resultMessage;
    });

    function getTicketPrice(visitorName, age) {
        if (age <= 3) {
            return `${visitorName}, your ticket is free!`;
        } else if (age >= 4 && age <= 12) {
            return `${visitorName}, your ticket is \$10!`;
        } else if (age >= 13 && age <= 64) {
            return `${visitorName}, your ticket is \$20!`;
        } else if (age >= 65) {
            return `${visitorName}, your ticket is \$12!`;
        }
    }







