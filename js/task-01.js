const countCategories = () => {
    const mainList = document.querySelector('ul#categories');

    //finding and counting li
    const listItems = mainList.querySelectorAll('li.item');
    let message = `У списку ${listItems.length} категорії.`
    console.log(message);

    //Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента(тега h2) 
    //і кількість елементів в категорії(всіх вкладених в нього елементів li).

    listItems.forEach(li => {
        console.log(`Категории: ${li.querySelector('h2').innerText}`);
        console.log(`Количество элементов: ${li.querySelectorAll('li').length} `)
    });

}

countCategories();
