function handleActive(e) {
    let currentActive = document.querySelector('ul .active')
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    e.target.classList.add('active')
}