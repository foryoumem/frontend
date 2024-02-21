let buttonValue = 0
let isResult = false
let isOperator = false

const buttonSet = document.querySelectorAll("button")
console.log(buttonSet.length)

const output = document.querySelector("input")


buttonSet.forEach((button, i) =>
{
    button.addEventListener("click", getResult) 
})

let calculation =
{
    "=": () =>
    {
        if (isOperator == false)
        {
            output.value = calculator(output.value)
            isResult = true
            document.getElementsByClassName("result")[0].value = "계산 완료"
        }
    },
    "+": (button) =>
    {
        isOperator = true
        output.value += button.value
    },
    "-": (button) =>
    {
        isOperator = true
        output.value += button.value
    },
    "*": (button) =>
    {
        isOperator = true
        output.value += button.value
    },
    "/": (button) =>
    {
        isOperator = true
        output.value += button.value
    },    
    "Clear": () =>
    {
        output.value = ''
    },
}

function getResult(event)
{
    let button = event.target
    
    if (calculation[button.value])
    {
        calculation[button.value](button)
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

    /*
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
    */
}

function calculator(expression)
{
    return new Function('return ' + expression)()
}


// todolist
// 동적 태그 생성


// 다른 js 파일에 있는 데이터를 또 다른 js 파일에서 사용하려면?
// script 태그를 바닥으로 내렸는데 head 놓고도 정상작동하게 하려면?
// 자바스크립트로 dom 생성하는법 연습
// 다음 시간에는 todo list 만들기~

// 수요일 21일 수요일 오후 4시
