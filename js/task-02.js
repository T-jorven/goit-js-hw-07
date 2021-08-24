const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(ingredient => {
    let item = document.createElement('li');
    item.textContent = ingredient;
    document.getElementById('ingredients').appendChild(item);
});