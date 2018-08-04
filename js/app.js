'use strict';
// Cat Clicker Premium, 5 cat version
// by Amy Rutherford August 2018

const cat1 = document.querySelector('#cat1');
const cat2 = document.querySelector('#cat2');
const cat3 = document.querySelector('#cat3');
const cat4 = document.querySelector('#cat4');
const cat5 = document.querySelector('#cat5');
const catName = document.querySelector('.catname');
const catImg = document.querySelector('#catpic');
let catList = document.querySelectorAll('.catlisting');
const catUl = document.querySelector('.catlist');
const clickArea = document.querySelector('.clickarea');
let thisCat;
let thisCatcounter;
let cats = [
	{
		image:'/img/bashful.jpg',
		name: 'Bashful',
		clicks: 0
	},
	{
		image:'img/cloudy.jpg',
		name: 'Cloudy',
		clicks: 0
	},
	{
		image:'img/dramacat.jpg',
		name: 'DramatiCat',
		clicks: 0
	},
	{
		image:'img/misty.jpg',
		name: 'Misty',
		clicks: 0
	},
	{
		image:'img/rodin.jpg',
		name: 'Rodin',
		clicks: 0
	}
];

//adds names to buttons instead of hardcoding them
//since arrays are the same length, use the index to access 2nd array's items
//FUTURE REFACTOR: allow for li elements to be created on the fly to accomodate more cats
catList.forEach(function (item, i){
	item.textContent = cats[i].name;
});

//add event to parent ul element so event delegation covers the list
//go to cats array and find name that matches event target text
//access that objects image property and set as img src to show picture
//fill in alt text with 'a cat named + cat's name'
catUl.addEventListener('click', function(e) {
	if(e.target.nodeName === 'LI') {
	cats.forEach(function(cat) {
		if (cat.name == e.target.innerText) {
			clickArea.textContent = '';
			thisCat = cat;
			clickArea.textContent = thisCat.clicks;
			catImg.setAttribute('src', cat.image);
			catName.textContent = cat.name;
			catImg.setAttribute('alt', `a cat named ${cat.name}`);
			return thisCat;
		}
	});
	}
});

catImg.addEventListener('click', function (e) {
	cats.forEach(function (cat) {
		if (catImg.getAttribute('src') === cat.image) {
			thisCatcounter = cat;
			clickArea.textContent = thisCatcounter.clicks;
			console.log(thisCatcounter);
			thisCat.clicks += 1;
			clickArea.textContent = thisCatcounter.clicks;
			console.log(thisCatcounter);
		}
	});
});