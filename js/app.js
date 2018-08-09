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
	},

	//fetches cat list from the model
	getCats: function() {
		return model.cats;
	}
};

let listView = {
	init: function() {
		this.catListing = document.querySelectorAll('.catlisting');
		//gets cat array through octopus
		this.cats = octopus.getCats();
		this.catUl = document.querySelector('.catlist');
	},

	createCatList: function() {
		for(let i = 0; i < this.catListing.length; i++){
			this.catListing[i].textContent = this.cats[i].name;
		}
	}
};

let picView = {};
octopus.init();