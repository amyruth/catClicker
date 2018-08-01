const scoreArea = document.querySelector('.cat1-clicks');
const cat = document.querySelectorAll('.cat');
let counter = 0;


cat.forEach(function(item) {
	item.addEventListener('click', function() {
			counter ++;
			scoreArea.innerHTML = `<p>${counter}</p>`;
	});	
});