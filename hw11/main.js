async function getRandomChinese(length){
  let i = 0;
  let temp = '';
  while(i<length){
    await new Promise(function(resolve){
      setTimeout(()=>{
        let sign = String.fromCharCode(Date.now().toString().slice(-5));
        resolve(sign);
      },50*length)
    })
    .then(res=>{
      temp+=res;
    });
    i++;
  }
  return temp;
};

getRandomChinese(6).then((temp) => {
  console.log(temp)
});
