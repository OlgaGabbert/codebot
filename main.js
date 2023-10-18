const randomJoke = document.getElementById('joke-container');
const randomChuckNorrisJoke = document.getElementById('chuck-joke-container');
const randomManateeJoke = document.getElementById('manatee-container');

const apiKey = window.env.API_KEY;

// call Dad Jokes API 
async function fetchRandomJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const joke = await response.json();
        const myRandomJoke = joke.joke;

        randomJoke.textContent = myRandomJoke;
        randomJoke.classList.add("randomJokeCard");
    } catch (error) {
        console.error(error);
        randomJoke.textContent = "Failed to fetch joke :(";
        randomJoke.classList.add("errorCard");
    }
}

// call Chuck Norris API
async function fetchChuckNorrisJoke() {
    try {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/random", {
            headers: {
                accept: "application/json",
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            },
        }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const chuckNorrisJoke = await response.json();
        const myRandomChuckNorrisJoke = chuckNorrisJoke.value;

        randomChuckNorrisJoke.textContent = myRandomChuckNorrisJoke;
        randomChuckNorrisJoke.classList.add("randomJokeCard");
    } catch (error) {
        console.error(error);
        randomChuckNorrisJoke.textContent = "Failed to fetch joke :(";
        randomChuckNorrisJoke.classList.add("errorCard");
    }
}

// call Manatee Jokes API
async function fetchManateeJoke() {
    try {
        const response = await fetch(
            "https://manatee-jokes.p.rapidapi.com/manatees/random", {
            headers: {
                "X-RapidAPI-Key": "a15e1b9453msh8dbef8b578a8435p18f2d1jsn10c408920410",
                "X-RapidAPI-Host": "manatee-jokes.p.rapidapi.com",
            },
        }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const manateeJoke = await response.json();
        const manateeSetUp = manateeJoke.setup;
        const manateePunchLine = manateeJoke.punchline;

        randomManateeJoke.innerHTML = `${manateeSetUp} <br> ${manateePunchLine}`;
        randomManateeJoke.classList.add("randomJokeCard");
    } catch (error) {
        console.error(error);
        randomManateeJoke.textContent = "Failed to fetch joke :(";
        randomManateeJoke.classList.add("errorCard");
    }
}

// Call for API depending on user input in the form provided 
const myForm = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const myBot = document.getElementById('bot');

myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = textInput.value.toLowerCase();

    try {
        if (text === 'dad') {
            await fetchRandomJoke();
            window.location.hash = '#jokes';
        } else if (text === 'manatee') {
            await fetchManateeJoke();
            window.location.hash = '#manateeJokes';
        } else if (text === 'chuck norris') {
            await fetchChuckNorrisJoke();
            window.location.hash = '#chuckNorrisJokes';
        } else {
            throw new Error('Check your spelling and try again.');
        }
    } catch (err) {
        myBot.textContent = err.message;
    }
});

// Stick the navbar to the top if the user scrolls down and unstick if the user scrolls up
const navJokes = document.getElementById('nav-jokes');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');
const navbarOffset = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add('sticky');
        header.classList.add('navbarOffsetMargin');
    } else {
        navbar.classList.remove('sticky');
        header.classList.remove('navbarOffsetMargin');
    }
});
