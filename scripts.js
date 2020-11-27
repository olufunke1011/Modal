const dance = document.querySelector('.dancing-animation');
const container = document.querySelector('.container');
const close_btn = document.querySelector('#close');
const submit = document.querySelector('#submit');

dance.onmouseover = openModal;

    function openModal() {
        container.style.display = 'block';
        dance.style.display = 'none';
    }

close_btn.addEventListener('click', closeModal);
    
    function closeModal() {
        container.style.display = 'none';
        dance.style.display = 'block';
    }

submit.addEventListener('click', info);

    function info() {
        alert('Thank You For Visiting our Page Check Your Email For Our Promos and Products');
    }
