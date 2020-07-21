// play audio with keypress
document.addEventListener("keypress",function(event){
  let key = event.key; 
  document.getElementById(`audio_${key}`).play();
})

//play audio with click
let buttons = Array.from(document.querySelectorAll("button"));

console.log(buttons[1].id);

buttons.forEach((element,index,arr)=> {
  arr[index] = element.id;
});

for(let i = 0; i < 8; i++){
  document.getElementById(`${buttons[i]}`).addEventListener("click", function(){
    document.getElementById(`audio_${buttons[i]}`).play();
  })
}