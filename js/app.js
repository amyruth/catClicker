const scoreArea = document.querySelector('.cat1-clicks');
const scoreArea2 = document.querySelector('.cat2-clicks');
const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
let counter1 = 0;
let counter2 = 0;

cat1.addEventListener('click', function () {
	counter1++;
	scoreArea.innerHTML = `<p>${counter1}</p>`;
});

cat2.addEventListener('click', function () {
	counter2++;
	scoreArea2.innerHTML = `<p>${counter2}</p>`;
});