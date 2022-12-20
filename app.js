// function addTextToInput(anElement) {
//     var text = document.getElementById('jaloby').value;
//     if (text != "")
//       text += ",";
//     text += anElement.innerText;
//     document.getElementById('jaloby').value = text;
//   }

//Сразу говорю - ужас, но я попытался ;)

// function button_1() {

//     document.getElementById('panelPrompt').value="5";
    

// }

// function button_2() {

//         document.getElementById('panelPrompt').value="5";
 
// }
// function button_3() {

//     document.getElementById('panelPrompt').value="7";
    
// }
// function button_4() {

//     document.getElementById('panelPrompt').value="10";
    
// }











// dfdfef
// const button = document.querySelector('input');
// const paragraph = document.querySelector('p');

// button.addEventListener('click', updateButton);

// function updateButton() {
//   if (button.value === '0') {
//     button.value = 'Выключить ПК';
//     paragraph.textContent = '5';
//   } else {
//     button.value = 'Запустить ПК';
//     paragraph.textContent = 'ПК выключен.';
//   }
// }

// function func(event) {
//   if(event.keyCode==13) {
//     alert(document.getElementById("txt").value);
//   }
// }




// 

// function GetBigLetter() {
// 	var text = document.getElementById("chapter").innerHTML;
// 	return text[0].toUpperCase() + text.slice(1);
//   }
//    function GetAllBigLetter() {
// 	var text = document.getElementById("word").innerHTML;
// 	//переменная для хранения слова
// 	var array=""; 
// 	//строка для хранения результата
// 	var res = "";
// 	for(var i =0; i< text.length; i++) {
// 		 //записываю посимвольно слова
// 		   array += text[i];  
// 		// если найден пробельный символ или индекс строки дошел до конца
// 		 if(text[i] == " " || i == text.length-1){    
// 			/* то записываем (добавляем) в результирующую переменную слово с измененной первой буковкой*/
// 			res += array[0].toUpperCase() + array.slice(1);
// 			array="";
// 		 }
// 	  }
// 	  return res;
//   }
// document.getElementById("chapter").innerHTML = GetBigLetter();
// document.getElementById("word").innerHTML = GetAllBigLetter();


// function printNumbers(from, to) {
// 	let current = from;
  
// 	function go() {
// 	  alert(current);
// 	  if (current == to) {
// 		clearInterval(timerId);
// 	  }
// 	  current++;
// 	}
  
// 	go();
// 	let timerId = setInterval(go, 1000);
//   }
  
//   printNumbers(10, 5);




let timer; 
let x =5; 
countdown(); 
function countdown(){  
  document.getElementById('rocket').innerHTML = x;
  x--; 
  if (x<0){
    clearTimeout(timer); 
  
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}

