const menuSub = document.querySelectorAll(".menu_sub");
const menuLink = document.querySelectorAll(".menu__link");

function closeMenu() {
  menuSub.forEach((item) => {
    item.className = 'menu menu_sub';
  })
}

menuLink.forEach((item) => {
  item.onclick = () => {
    parent = item.closest(".menu__item");

    if (parent.querySelector(".menu_sub")) {
        if (parent.querySelector(".menu_active")) {
            closeMenu();
        } else {
            closeMenu();
            parent.querySelector(".menu_sub").classList.add("menu_active");
        }
        return false;
    } else {
        closeMenu();
    }
  }
})