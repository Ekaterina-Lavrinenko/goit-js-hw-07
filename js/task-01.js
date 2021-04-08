const categoriesItemEl = document.querySelectorAll('.item');
const totalCategories = categoriesItemEl.length;
console.log(`В списке ${totalCategories} категории.`);

categoriesItemEl.forEach(el => {
    const titleCategory = el.querySelector('h2').textContent;
    const totalItems = el.querySelectorAll('li').length;
    console.log(`Категория: ${titleCategory} 
Количество элементов: ${totalItems}`);
});