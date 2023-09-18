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
    if (scroll_position > 30) {
        header.style.backgroundColor = '#155472';
        logo.style.color = '#FFF';
        list[0].style.color = '#FFF';
        list[1].style.color = '#FFF';
        list[2].style.color = '#FFF';
        list[3].style.color = '#FFF';
        list[4].style.color = '#FFF';
    } else {
        header.style.backgroundColor = '#FFF';
        logo.style.color = '#000';
        list[0].style.color = '#000';
        list[1].style.color = '#000';
        list[2].style.color = '#000';
        list[3].style.color = '#000';
        list[4].style.color = '#000';
    }
});


