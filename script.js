const navbar = document.querySelector("nav")
const open_menu = document.querySelector(".open-menu")
const close_menu = document.querySelector(".close-menu")
const overlay = document.querySelector(".overlay")

function toggleNav () { navbar.classList.toggle("active") }

open_menu.addEventListener("click", toggleNav)
close_menu.addEventListener("click", toggleNav)
overlay.addEventListener("click", toggleNav)

const dropdown_togglers = document.querySelectorAll("[data-dropdown]")

dropdown_togglers.forEach(dropdown_btn => {
  dropdown_btn.addEventListener("click", function () {
    this.classList.toggle("active")
    const dropdown = this.nextElementSibling
    const isActive = this.classList.contains("active")
    
    if (isActive) {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px"
    } else {
      dropdown.style.maxHeight = "0px"
    }
  })
})