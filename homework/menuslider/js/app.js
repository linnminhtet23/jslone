//UI
const toggleBtn = document.getElementById('header-toggle'),
nav= document.getElementById('navbar');

// console.log(toggleBtn);

toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('show-menu')

    toggleBtn.classList.toggle('bx-x')
});


const linkColor = document.querySelectorAll('.nav-link');

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}
linkColor.forEach(l=>l.addEventListener('click', colorLink))