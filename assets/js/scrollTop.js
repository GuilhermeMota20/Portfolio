// Show scroll top
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    // When the scroll is higer than 560 viewport height, and the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll')
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)