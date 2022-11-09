let timer;

function começar() {
    timer = setInterval(showTime, 1000);
};

function parar() {
clearInterval(timer);
};


function showTime() {
    let d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    txt = h + ":" + m + ":" + s;

    document.querySelector('.demo').innerHTML = txt;
};

