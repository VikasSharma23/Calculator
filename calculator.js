const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btnDot = document.getElementById('btnDot')
const btnOr = document.getElementById('btnOr')
const btnC = document.getElementById('btnC')
const btnPluse = document.getElementById('btnPluse')
const btnMin = document.getElementById('btnMin')
const btnMul = document.getElementById('btnMul')
const btnDiv = document.getElementById('btnDiv')
const btnPer = document.getElementById('btnPer')
const btnEqal = document.getElementById('btnEqual')
const btnAnd = document.getElementById('btnAnd')
var inputValue = document.getElementById('display')
// function eventHandle (buttonName)
// {
// 	buttonName.addEventListener('click',()=>{
// 		console.log(buttonName.textContent)
// 	})
// }

btnEqal.addEventListener('click',()=>{
	try {
		inputValue.value = eval(inputValue.value)
		console.log(inputValue.value)
	} catch(e) {
		inputValue.style.color = 'red'
		inputValue.value = "Invalid Expression !!!"
	}
})

btnC.addEventListener('click',()=>{
	inputValue.value = null
})
function appendText (buttonName) {
	buttonName.addEventListener('click',()=>{
		inputValue.style.color = 'black'
		inputValue.value = inputValue.value + buttonName.textContent 
	})	
}

appendText(btn0)
appendText(btn1)
appendText(btn2)
appendText(btn3)
appendText(btn4)
appendText(btn5)
appendText(btn6)
appendText(btn7)
appendText(btn8)
appendText(btn9)
appendText(btnPluse)
appendText(btnMin)
appendText(btnMul)
appendText(btnDiv)
appendText(btnPer)
appendText(btnDot)
appendText(btnAnd)
appendText(btnOr)