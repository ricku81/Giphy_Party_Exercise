// console.log("Let's get this party started!");
async function getGiphyByTerm (term) {
	try {
		const res = await axios.get(
			`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
		);
		const randomGiphyIdx = Math.floor(Math.random() * res.data.data.length);
		// const randomGiphy = res.data.data[randomGiphyIdx];
		const randomGiphy = res.data.data[randomGiphyIdx].bitly_gif_url;
		console.log(randomGiphy);
		console.log(res.data.data[randomGiphyIdx]);
		appendGiphy(randomGiphy);
	} catch (e) {
		alert(`${term} giphies not found! Please try another Term.`);
	}
}

function appendGiphy (randomGiphy) {
	const newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'giphy');

	const img = document.createElement('img');
	img.setAttribute('src', `${randomGiphy}`);

	newDiv.append(img);
	$('#giphies').append(newDiv);
}

getGiphyByTerm('food');
