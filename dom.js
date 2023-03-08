
// const api_key = process.env.SECRET_KEY

const options = {
	method: 'GET',
	headers: {
		Accept: "application/json"
	}
};


let jokes = {};

const fetchJokes = () => {
	fetch('https://icanhazdadjoke.com/', options)
	.then(res => {
		if(!res.ok) {
		  throw Error(res.statusText)
		} return res.json()
	  })	
		.then(data => jokes = data) 
		.catch(err => console.error(err));
	}




fetchJokes();


// Main function that has options, fetchJokes(), jokes variable on line 17. Then set innerText to display variable

const dadJoke = () => {
	fetchJokes()
	document.getElementById('joke-text').innerText = jokes.joke;
}

//create button that calls dadJoke() when clicked