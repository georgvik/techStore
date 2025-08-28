import { phone } from './index.js';

// function titleName() {
const titleCategory = document.querySelector('.title');
//   let titleCat = localStorage.getItem('title');
//   titleCategory.textContent = titleCat;
//   const nameCategory = titleCategory.textContent.toLocaleLowerCase();
//   return nameCategory;
// }
const listPhone = document.querySelector('.list-phone');
try {
  phone.forEach(el => {
    const item = document.createElement('li');
    item.classList.add('catalog-item');
    item.innerHTML = `<div class="cat-mini-cart" data-memory="${el.memory}" data-ram="${el.ram}" data-brand="${el.brand}" data-core="${el.core}">

      <img src="${el.urlimage}" class="img-cat-minicart"/>
      <div class="content-cat-minicart"><h3 class="title-cat-minicart">Смартфон ${el.title}</h3>
      <p class="display-cat-minicart">Екран: ${el.display}/${el.resolution}</p><p class="proc-cat-minicart">Процесор: ${el.processor}</p>
      <p class="res-cat-minicart">Кількість ядер: ${el.core}</p>
      </div>
      <p class="price-cat-minicart">${el.price} ₴</p>
      <button type="button" class="button-bag cat-button-bag">В кошик</button>
      </div>`;
    listPhone.insertAdjacentElement('beforeend', item);
  });
} catch (error) {}

// const minicarts = document.querySelectorAll('.link-mini-cart');

// minicarts.forEach(cart => {
//   cart.addEventListener('click', function (e) {
//     e.preventDefault();
//     let firstChild = e.currentTarget.childNodes[1].innerHTML;
//     console.log(firstChild);
//     createModalCart(firstChild);
//   });
// });

// function createModalCart(mod) {
//   console.log(mod);
//   const data = phone.filter(phon => phon.model === mod);

//   console.log(data);
//   const modalDiv = document.createElement('div');
//   modalDiv.classList.add('modal-opencart');
//   modalDiv.innerHTML = `<img src="${data[0].urlimage}"/> <p>"${data[0].price}"</p>`;
//   document.body.appendChild(modalDiv);
// }
// // Додавання до кошику
// const buttonCarts = document.querySelectorAll('.button-bag');
// let shopCart = [];
// buttonCarts.forEach(button => {
//   button.addEventListener('click', function () {
//     const modelPhone = this.previousElementSibling.children[0].innerText;

//     phone.forEach(phon => {
//       if (phon.model === modelPhone) {
//         shopCart.push(phon);
//       }
//     });
//     console.log(shopCart);
//     localStorage.setItem(`${titleName()}`, JSON.stringify(shopCart));
//   });
// });

const filterButtonOpen = document.querySelector('.catalog-filter');
const modalFilter = document.querySelector('.modal-filter');
const filterButtonClose = document.querySelector('.button-filter-close');

filterButtonOpen.addEventListener('click', () => {
  modalFilter.classList.remove('modal-hiden');
});

filterButtonClose.addEventListener('click', () => {
  modalFilter.classList.add('modal-hiden');
});

// ------------------------------------
// Логіка модального вікна з фільтрами

let data = [];

const filterBuildMemory = document.getElementById('check-memory');
const filterRamMemory = document.getElementById('check-ram');
const filterBrandName = document.getElementById('check-brand');
const filterCoreNum = document.getElementById('check-core');
const products = document.querySelectorAll('.cat-mini-cart');

function applyFilters() {
  console.log(this);
  const selectMemory = filterBuildMemory.value;
  const selectRam = filterRamMemory.value;
  const selectBrand = filterBrandName.value;

  const selectCore = filterCoreNum.value;
  console.log(selectMemory);
  products.forEach(product => {
    const productMemory = product.dataset.memory;
    const productRam = product.dataset.ram;
    const productBrand = product.dataset.brand;
    const productCore = product.dataset.core;
    console.log(productMemory);
    console.log(productMemory === selectMemory);

    const memoryS = !selectMemory || productMemory === selectMemory;
    const ramS = !selectRam || productRam === selectRam;
    const brandS = !selectBrand || productBrand === selectBrand;
    const coreS = !selectCore || productCore === selectCore;

    if (memoryS && ramS) {
      product.style.display = 'flex';
    } else {
      product.style.display = 'none';
    }
  });
  // console.log(data);
}

// Додаємо обробники подій для всіх фільтрів
filterBuildMemory.addEventListener('change', applyFilters);
filterRamMemory.addEventListener('change', applyFilters);
filterBrandName.addEventListener('change', applyFilters);
// 'input' для полів типу number
filterCoreNum.addEventListener('change', applyFilters);
