const hamburgerBtn = document.querySelector(".hamburger-btn")
const closeHamburgerBtn = document.querySelector(".hamburger-btn-close")

function showSidebar(){
    const sideBar = document.querySelector('.side-bar')
    sideBar.style.display = 'flex'
}

function closeSidebar(){
    const sideBar = document.querySelector('.side-bar')
    sideBar.style.display = 'none'
}

hamburgerBtn.addEventListener('click', ()=>{
    showSidebar()
})

closeHamburgerBtn.addEventListener('click', ()=>{
    closeSidebar()
})