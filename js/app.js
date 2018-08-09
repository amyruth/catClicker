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
	// shows first cat on page load and loads listeners
	init: function () {
		listView.init();
		listView.createCatList();
		picView.init();
		this.loadCatPic();
		this.saveClicks();
	},

	//fetches cat list from the model
	getCats: function() {
		return model.cats;
	},

	loadCatPic: function() {
		listView.catUl.addEventListener('click', function(e) {
			if(e.target.nodeName == "LI") {
				model.cats.forEach(function(cat) {
					if(cat.name === e.target.textContent) {
						console.log('match');
						listView.clickArea.textContent = '';
						model.currentCat = cat;
						listView.clickArea.textContent = model.currentCat.clicks;
						listView.catName.textContent = cat.name;
						picView.catImg.setAttribute('src', cat.image);
						picView.catImg.setAttribute('alt', `a cat named ${cat.name}`);
						console.table(model.currentCat);
					}
				});
			}
		});
	},

	saveClicks: function() {
		picView.catImg.addEventListener('click', function () {
			console.log('click');
			if(picView.catImg.getAttribute('src') === model.currentCat.image) {
				model.currentCat.clicks++;
				listView.clickArea.textContent = model.currentCat.clicks;
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
		this.catName = document.querySelector('.catname');
	},

	createCatList: function() {
		for(let i = 0; i < this.catListing.length; i++){
			this.catListing[i].textContent = this.cats[i].name;
		}
	}
};

let picView = {
	//event listener for clicks on image
	// save # clicks to model
	init: function() {
		this.catImg = document.querySelector('#catpic');
	}
};
octopus.init();