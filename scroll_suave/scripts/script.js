function scrollUp(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

function decide(){
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none';
    } else{
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', decide);