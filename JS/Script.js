// loading page
var loading = document.getElementById('loading');

function load(){
    loading.style.display= "none";
}

// backgroundColor => header
var header = document.querySelector('.header');
var logo = document.querySelector('.header-container .header-logo h1');
var list = document.querySelectorAll('.header-list ul a');

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    for(let i = 0; i < list.length; i++) {
        if (scroll_position > 30) {
            header.style.backgroundColor = '#155472';
            logo.style.color = '#FFF';
            list[i].style.color = "#FFF"
    
        } else {
            header.style.backgroundColor = '#FFF';
            logo.style.color = '#000';
            list[i].style.color = '#000';
        }
    }
});


