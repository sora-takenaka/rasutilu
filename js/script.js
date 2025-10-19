const menu_btn = document.querySelector("#menu-btn");
const menu_navi = document.querySelector("#menu-navi");



menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('close');
    menu_navi.classList.toggle('menu_open');
});