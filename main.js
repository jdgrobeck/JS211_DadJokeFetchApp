
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// To run on GUI, take out API key when uploading to github.
require('dotenv').config()


// Don't need key with new API
// Switched APIs because old one had limit of 10 per day
const api_key = process.env.SECRET_KEY


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

const getPrompt = () =>  {
	rl.question('Press Enter for random Dad joke ', () => {
	console.log("", jokes.joke);
	  getPrompt();
	  fetchJokes()
	});
  }





fetchJokes();
getPrompt();
