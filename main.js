let randomJoke = document.getElementById('joke-container');
let randomChuckNorrisJoke = document.getElementById('chuck-joke-container');
let randomManateeJoke = document.getElementById('manatee-container');

async function fetchRandomJoke() {
    let response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    let joke = await response.json();
    let myRandomJoke = joke.joke;
    randomJoke.textContent = myRandomJoke;
    randomJoke.classList.add('randomJokeCard');
}

async function fetchChuckNorrisJoke() {
    let response = await fetch("https://api.chucknorris.io/jokes/random", {
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'a15e1b9453msh8dbef8b578a8435p18f2d1jsn10c408920410',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        },
    });
    let chuckNorrisJoke = await response.json();
    let myRandomChuckNorrisJoke = chuckNorrisJoke.value;
    randomChuckNorrisJoke.textContent = myRandomChuckNorrisJoke;
    randomChuckNorrisJoke.classList.add('randomJokeCard');
}

async function fetchManateeJoke() {
    let response = await fetch("https://manatee-jokes.p.rapidapi.com/manatees/random", {
        headers: {
            'X-RapidAPI-Key': 'a15e1b9453msh8dbef8b578a8435p18f2d1jsn10c408920410',
            'X-RapidAPI-Host': 'manatee-jokes.p.rapidapi.com'
        },
    });
    let manateeJoke = await response.json();
    let manateeSetUp = manateeJoke.setup;
    let manateePunchLine = manateeJoke.punchline;
    randomManateeJoke.innerHTML = `${manateeSetUp} <br> ${manateePunchLine}`;
}

let navJokes = document.getElementById("nav-jokes");
let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {

    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        header.classList.add('navbarOffsetMargin');
    } else {
        navbar.classList.remove('sticky');
        header.classList.remove('navbarOffsetMargin');
    }
});

const myForm = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const myBot = document.getElementById('bot');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const text = textInput.value.toLowerCase();
  
  if (text === 'dad') {
      fetchRandomJoke();
      window.location.href = '#jokes';
      console.log(window.location.href);
  } else if (text === 'manatee') {
      fetchManateeJoke();
      window.location.href = '#manateeJokes';
  } else if (text === 'chuck norris') {
    fetchChuckNorrisJoke();
    window.location.href = '#chuckNorrisJokes';
  } else {
    myBot.textContent = 'Check your spelling and try again:';
  }
});

