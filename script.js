window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    document.getElementById('size').innerHTML = 'Ширина: ' + width + ', висота: ' + height;
});