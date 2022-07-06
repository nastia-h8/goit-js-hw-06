const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients')

const newElements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;

  return itemEl;
})

ingredientsListRef.append(...newElements)
