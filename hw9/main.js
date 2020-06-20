function generateBlocks(){ 
  const Colors = ()=>{
    return '#'+ Math.floor(Math.random()*16777216).toString(16);
  }
  let div = [];
  let row = [];
  let body = document.querySelector("body");
    
  for(let i = 0;i<5; i++){
    row[i] = document.createElement('div');
    row[i].style.cssText = `display: flex;`;
    body.append(row[i]);

    for(let j = 0;j<5; j++){
      div[j] = document.createElement('div');
      div[j].style.cssText = `background-color: ${Colors()}; height: 50px; width: 50px;`;
      row[i].append(div[j]);  
    }
  }
}

function generateBlocksInterval(){
  generateBlocks();
  function clear(){
    document.body.innerHTML="";
    generateBlocks();
  }
  setInterval(()=> clear(),1000)
}

generateBlocksInterval();
