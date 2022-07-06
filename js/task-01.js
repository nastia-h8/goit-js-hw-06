const categoriesRefs = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesRefs.length);

const categoriesArr = [...categoriesRefs]
categoriesArr.forEach(function (element){
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
})
