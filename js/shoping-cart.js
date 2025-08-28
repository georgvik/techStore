const titleShopcart = document.querySelector('.title');
const listShop = document.querySelector('.shopcart-list');

titleShopcart.textContent = 'Кошик';

const appleCart = localStorage.getItem('apple');
let motoCart = localStorage.getItem('motorola');
let samCart = localStorage.getItem('samsung');

let appleCarts = JSON.parse(appleCart);
let motoCarts = JSON.parse(motoCart);
let samSarts = JSON.parse(samCart);

let arr = [...appleCarts];
let res = arr.concat(motoCarts);
let sumCart = res.concat(samSarts);
console.log(sumCart);

sumCart.forEach(el => {
  const item = document.createElement('li');
  item.innerHTML = `<div class="mini-cart"><a class="link-mini-cart" href="">
    <span class="span-minicart">${el.model}</span>
      <img src="${el.urlimage}" class="img-minicart"/>
      <h3 class="title-miinicart">Смартфон "${el.title}"</h3>
      <p class="price-minicart">${el.price}</p></a>

      <button type="button" class="button-plus">+</button>
      <span>1</span>
      <button type="button" class="button-minus">-</button>
      <button type="button" class="delete-cart"></button>
      </div>`;
  listShop.insertAdjacentElement('beforeend', item);
});
