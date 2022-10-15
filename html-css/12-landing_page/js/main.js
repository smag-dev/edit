window.addEventListener('scroll', function() {
    
    if (window.pageYOffset >= 720) {
        document.querySelector('nav').classList.add('nav-fixed');
    } else {
        document.querySelector('nav').classList.remove('nav-fixed');
    }
});

