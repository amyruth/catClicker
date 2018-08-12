let model = {
	currentCat: null,
	cats: [{
			image: 'img/bashful.jpg',
			name: 'Bashful',
			clicks: 0
		},
		{
			image: 'img/cloudy.jpg',
			name: 'Cloudy',
			clicks: 0
		},
		{
			image: 'img/dramacat.jpg',
			name: 'DramatiCat',
			clicks: 0
		},
		{
			image: 'img/misty.jpg',
			name: 'Misty',
			clicks: 0
		},
		{
			image: 'img/rodin.jpg',
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
		adminView.init();
		this.loadCatPic();
		this.saveClicks();
		this.showAdmin();
	},

	//fetches cat list from the model
	getCats: function () {
		return model.cats;
	},

	loadCatPic: function () {
		listView.catUl.addEventListener('click', function (e) {
			if (e.target.nodeName == "LI") {
				model.cats.forEach(function (cat) {
					if (cat.name === e.target.textContent) {
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

	showAdmin: function () {
		let panelHidden = true;
		adminView.adminButton.addEventListener('click', function () {
			if (panelHidden) {
				adminView.adminName.value = model.currentCat.name;
				adminView.adminClicks.value = model.currentCat.clicks;
				adminView.adminUrl.value = model.currentCat.image;
				adminView.adminPanel.classList.toggle('form-hide');
			}
		});
	},

	saveClicks: function () {
		picView.catImg.addEventListener('click', function () {
			if (picView.catImg.getAttribute('src') === model.currentCat.image) {
				model.currentCat.clicks++;
				listView.clickArea.textContent = model.currentCat.clicks;
			}
		});
	}


};

let listView = {
	init: function () {
		this.catListing = document.querySelectorAll('.catlisting');
		this.cats = octopus.getCats();
		this.catUl = document.querySelector('.catlist');
		this.clickArea = document.querySelector('.clickarea');
		this.catName = document.querySelector('.catname');
	},

	createCatList: function () {
		for (let i = 0; i < this.catListing.length; i++) {
			this.catListing[i].textContent = this.cats[i].name;
		}
	}
};

let picView = {
	init: function () {
		this.catImg = document.querySelector('#catpic');
	}
};

let adminView = {
	init: function () {
		this.adminButton = document.querySelector('.adminButton');
		this.adminPanel = document.querySelector('.adminPanel');
		this.adminName = document.querySelector('#adminName');
		this.adminUrl = document.querySelector('#adminUrl');
		this.adminClicks = document.querySelector('#adminClicks');
		this.adminSubmit = document.querySelector('.adminSubmit')
	}
};

octopus.init();

// TODO: hook up admin button event listender to show form