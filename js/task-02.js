const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//ingredients.forEach(ingredient => {
  //  let item = document.createElement('li');
  //  item.textContent = ingredient;
  //  document.getElementById('ingredients').appendChild(item);
//});
const ingredientsRef = document.querySelector('#ingredients');


const ingredientsList = ingredients.map(ingredient => {
  const item = document.createElement('li');
   item.textContent = ingredient;

  return item;
});

ingredientsRef.append(...ingredientsList);
