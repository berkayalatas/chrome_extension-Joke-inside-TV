const button = document.querySelector('.btn_joke');
const jokeText = document.querySelector('.joke p');

//for starting page
document.addEventListener('DOMContentLoaded',getJoke);

//button eventlistener
button.addEventListener('click',getJoke);


//getjoke from api
async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept':'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    //console.log(jokeObj);
    jokeText.innerHTML = jokeObj.joke; //add joke to p tag
    
}


//second option

/*
function getJoke() {
    fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'
        }
    }).then(data => data.json())
    .then(obj => jokeText.innerHTML = obj.joke)
}
*/