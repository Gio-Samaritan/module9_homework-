let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button = document.getElementById('button');
let value1 = input1.value;
let value2 = input2.value;
button.onclick = function() {
  if((input1.value > 10 || input1.value < 1) 
     && (input2.value > 10 || input2.value < 1))
    {
    alert('Номер страницы и лимит вне диапазона от 1 до 10');
    input1.value = '';
    input2.value = '';
    }
  else if(input1.value > 10 || input1.value < 1){
    alert('Номер страницы вне диапазона от 1 до 10');
    input1.value = '';}
  else if(input2.value > 10 || input2.value < 1){
    alert('Лимит вне диапазона от 1 до 10');
    input2.value = '';}
else{
  fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
  .then(response => response.json())
  .then(response => console.log(response))
}
}