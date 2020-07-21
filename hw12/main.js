const URL = 'https://swapi.dev/api/';

async function renderHero(part){
  const container = document.querySelector('.heroes');

  
  const res = await axios.get(URL+`films/${part}/`);
  let heroes = res.data.characters;

  arr = [];
  for(let i = 0; i<heroes.length; i++){
    let res2 = await axios.get(`${heroes[i]}`);
    arr.push(res2.data);  
  }

  arr.forEach(hero => {
    const userDiv = document.createElement('div');

      let gender;

      if (hero.gender === 'male'){
        gender = '<img src="img/male.jpg" alt="male">'
      }
      else if (hero.gender === 'female'){
        gender = '<img src="img/female.png" alt="female">'
      }
      else{
        gender = '?';
      }

      userDiv.innerHTML = `
      <h4>Name: ${hero.name} </h4>
      <h4>Gender: ${gender}<h4>
      <h4>Birth Year: ${hero.birth_year}<h4>
      `;

      container.append(userDiv);
  });

}

let currPage=1;
async function getPlanets(currPage){
  const container = document.querySelector('.planets');

  let config = {
    params :{
        'page' : currPage
    }
  };

  const res = await axios.get(URL+`planets/`,config);
  let planets = res.data.results;

  planets.forEach(planet => {
    const planetsH4 = document.createElement('h4');
    planetsH4.innerHTML = `${planet.name}`
    container.append(planetsH4);
  })

}

function next(){
  document.querySelector('.planets').innerHTML = '';
  currPage += 1;
  if (currPage === 7) currPage = 1; 
  getPlanets(currPage)
}


document.getElementById("getheroes").addEventListener("click",
  () => renderHero(5)
)

document.getElementById("getplanets").addEventListener("click",
  () => getPlanets()
)

document.getElementById("next").addEventListener("click",() => next())


