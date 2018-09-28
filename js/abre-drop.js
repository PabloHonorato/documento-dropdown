var btndrop = document.querySelector('.btn-drop');
var body = document.querySelector('.bodyy');
var itensdrop = document.querySelector('#meu-dropdown');

btndrop.addEventListener('click',function() {
    itensdrop.classList.toggle('open');
})

body.addEventListener('click',function(){
    itensdrop.classList.remove('open');
})