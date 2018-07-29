const scoreArea = document.querySelector('.cat1-clicks');
const cat1 = document.querySelector('.cat1');
let counter = 0;

cat1.addEventListener('click', function() {
	counter ++;
	scoreArea.innerHTML = `<p>${counter}</p>`;
});