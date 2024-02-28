console.log('working!!!');

const openMenu = document.getElementById('open--menu');
const closeMenu = document.getElementById('close--menu');
const navLinks = document.getElementById('nav--links');

console.log(openMenu);

openMenu.addEventListener('click', () => {
  console.log('open menu!!!');

  navLinks.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  console.log('close menu!!!');
  navLinks.style.right = '-200px';
});
