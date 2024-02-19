let buttonValue = 0
let isResult = false
let isOperator = false

const buttonSet = document.querySelectorAll("button")
console.log(buttonSet.length)

const output = document.querySelector("input")

buttonSet.forEach((button, i) =>
{
    button.addEventListener("click", (event) =>
    {
        if (button.value == '=')
        {
            if (isOperator == false)
            {
                output.value = calculator(output.value)
                isResult = true
            }          
        }
        else if (button.value == '+' || button.value == '-' || button.value == '*' || button.value == '/')
        {
            isOperator = true
            output.value += button.value
        }
        else if (button.value == 'Clear')
        {
            output.value = ''
        }
        else
        {
            if (isResult == true)
            {
                isResult = false
                output.value = ''
            }
            isOperator = false
            output.value += button.value
        }            
    })
})

function calculator(expression)
{
    return new Function('return ' + expression)()
}