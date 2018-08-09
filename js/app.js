let model = {
	currentCat: null,
	cats: [
		{
			image:'img/bashful.jpg',
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
	]
};

let octopus = {
	// shows first cat on page load
	init: function () {
		listView.init();
		listView.createCatList();
		this.catListEvent();
	},

	//fetches cat list from the model
	getCats: function() {
		return model.cats;
	},

	catListEvent: function() {
		listView.catUl.addEventListener('click', function(e) {
			if(e.target.nodeName == "LI") {
				console.log(e.target.textContent);
				model.cats.forEach(function(cat) {
					if(cat.name === e.target.textContent) {
						console.log('match');
						listView.clickArea.textContent = '';
						model.currentCat = cat;
						console.log(cat);
						listView.clickArea.textContent = model.currentCat.clicks;
						listView.catName.textContent = cat.name;
						listView.catImg.setAttribute('src', cat.image);
						listView.catName.setAttribute('alt', `a cat named ${cat.name}`);
					}
				})
			}
		});
	}
};

let listView = {
	init: function() {
		this.catListing = document.querySelectorAll('.catlisting');
		//gets cat array through octopus
		this.cats = octopus.getCats();
		this.catUl = document.querySelector('.catlist');
		this.clickArea = document.querySelector('.clickarea');
		this.catImg = document.querySelector('#catpic');
		this.catName = document.querySelector('.catname');
	},

	createCatList: function() {
		for(let i = 0; i < this.catListing.length; i++){
			this.catListing[i].textContent = this.cats[i].name;
		}
	}
};

let picView = {};
octopus.init();