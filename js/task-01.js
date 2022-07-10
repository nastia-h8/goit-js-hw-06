const categories = document.querySelectorAll('.item');
console.log("Number of categories:", categories.length);

const categoriesArr = [...categories]

categoriesArr.map(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
})
