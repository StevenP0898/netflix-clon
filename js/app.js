document.addEventListener('DOMContentLoaded', () =>{
    loadData()
})

const loadData = async() => {
    const url = 'https://watchmode.p.rapidapi.com/releases';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94f8cb0af4msh8872af7221ac2a3p131468jsn3e22fb128e0e',
		'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
	}
}

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log('@@@ result s =>', result);
} catch (error) {
	console.error(error);
}
}