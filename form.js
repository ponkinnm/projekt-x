const clickFunc = (e) => {
  e.preventDefault();
};

const connectSubmit = document.querySelector('.connect__btn');
connectSubmit.addEventListener('click', clickFunc);

const menuItems = document.querySelectorAll('.menu__item');
