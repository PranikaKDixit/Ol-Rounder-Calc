function SecondNumber()
{
    const operator = document.getElementById('operator').value;
    const NUM2= document.getElementById('num2');
    NUM2.disabled = operator === "factorial";
}

function calculate()
{
    const num1= parseFloat(document.getElementById('num1').value);

    const num2 =parseFloat(document.getElementById('num2').value);

    const operator = document.getElementById('operator').value;


    if (isNaN(num1))
        {
            document.getElementById('result').textContent = "Result: Enter VALID first number";
            return;
        }

    let result;

    switch(operator)
    {
        case "add":
            if(isNaN(num2))
                {
                    document.getElementById('result').textContent= "Result: Enter Second number";

                    return;
                }
                result=num1+num2;
                break;

        case "substract":
            if (isNaN(num2))
                {
                    document.getElementById('result').textContent= "Result: Enter Second number";

                    return;
                }
                result=num1-num2;
                break;

        case "multiply":
            if (isNaN(num2)) 
                {
                    document.getElementById('result').textContent = 
                        "Result: Enter Second number";
                    return;
                }
                result = num1 * num2;
                break;

        case "divide":
            if (isNaN(num2))
                {
                    document.getElementById('result').textContent = 
                        "Result: Enter Second number";
                    return;
                }
            if (num2 === 0) 
                {
                    document.getElementById('result').textContent = 
                        "Result: Can't divide by zero.";
                    return;
                }
                result = num1 / num2;
                break;

        case "factorial":
            if (num1 < 0 || !Number.isInteger(num1)) 
                {
                    document.getElementById('result').textContent = 
                        "Result: INVALID";
                    return;
                }
                result = factorial(num1);
                break;

        case "power":
            if (isNaN(num2)) 
                {
                    document.getElementById('result').textContent = 
                        "Result: Enter Second number";
                    return;
                }
                result = Math.pow(num1, num2);
                break;

        default:
            document.getElementById('result').textContent = 
                "Result: Invalid operation.";
            return;       
    }

    document.getElementById('result').textContent= `Result: ${result}`;
}

function factorial(n)
{
    if (n === 0 || n === 1)
        {
            return 1;
        }
    return n* factorial(n-1);
}