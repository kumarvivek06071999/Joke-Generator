const btnEl = document.getElementById("btn");
const apiKey = "Q94N5lQESG6aM88yo6EAZA==wmQmG6NxrU4Jlwo3";
const jokeEl = document.getElementById("joke");


const options = {
    method:"GET",
    Headers: {
        "X-Api-Key": apiKey,
    },
};

// apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
// apiURL = "https://v2.jokeapi.dev/joke/Programming?type=single";

apiURL = "https://hindi-jokes-api.onrender.com/jokes?api_key=d90712dd0943cb5545d28eb5dcd1";


async function getJoke(){
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        // jokeEl.innerText = data[0].joke;
        jokeEl.innerText = data.jokeContent;
    
        // console.log(data);
        // alert("Working");
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);

    }
    // try {
    //     jokeEl.innerText = "Updating...";
    //     btnEl.disabled = true;
    //     btnEl.innerText = "Loading...";
    //     const response = await fetch(apiURL, options);
    //     const data = await response.json();
    
    //     btnEl.disabled = false;
    //     btnEl.innerText = "Tell me a joke"
    //     // jokeEl.innerText = data[0].joke;
    
    //     console.log(data);
    //     alert("Working");
        
    // } catch (error) {
    //     jokeEl.innerText = "An error happened, try again later";
    //     btnEl.disabled = false;
    //     btnEl.innerText = "Tell me a joke";
    //     console.log(error);

    // }
  
}



btnEl.addEventListener("click",getJoke)