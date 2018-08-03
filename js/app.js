// const scoreArea = document.querySelector('.cat1-clicks');
// const scoreArea2 = document.querySelector('.cat2-clicks');
// const cat1 = document.querySelector('.cat1');
// const cat2 = document.querySelector('.cat2');
// let counter1 = 0;
// let counter2 = 0;

// cat1.addEventListener('click', function () {
// 	counter1++;
// 	scoreArea.innerHTML = `<p>${counter1}</p>`;
// });

// cat2.addEventListener('click', function () {
// 	counter2++;
// 	scoreArea2.innerHTML = `<p>${counter2}</p>`;
// });
let count = 0;
class Cat {
	constructor(name, image) {
		this.name = name;
		this.image = image;
		this.clicks = 0;
	}

	this.addClicks = function () {
		return this.clicks++;
	}
}

//array of cat names and img src
let catInfo = [
	['img/bashful.jpeg', 'Bashful'],
	['img/cloudy.jpg', 'Cloudy'],
	['img/dramacat.jpg', 'DramatiCat'],
	['img/misty.jpeg', 'Misty'],
	['img/rodin.jpeg', 'Rodin']
];

const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');
const cat3 = document.querySelector('#cat3');
const cat4 = document.querySelector('#cat4');
const cat5 = document.querySelector('#cat5');
const catName = document.querySelector('.catname');
const catImg = document.querySelector('#catpic');

