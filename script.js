window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    document.getElementById('size').innerHTML = 'Ширина: ' + width + ', висота: ' + height;
});