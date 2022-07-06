const categoriesRefs = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesRefs.length);


const categoriesArr = [...categoriesRefs]
categoriesArr.forEach(function (element){
    const elementsTitle = element.querySelector('h2');
    const elementsNumber = element.querySelectorAll('li');

    console.log(`Category: ${elementsTitle.textContent}`);
    console.log(`Elements: ${elementsNumber.length}`);
})