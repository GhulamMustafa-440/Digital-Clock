setInterval(function date() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();

    let time = `${h} : ${m} : ${s}`;

    let h1 = document.getElementById('time');
    h1.innerHTML = time

    let month = a.getMonth();
    let year = a.getFullYear();
    let date = a.getDate();

    let allDate = `${date} - ${month} - ${year}`

    let dated = document.getElementById('dated')
    dated.innerHTML = allDate
    
}, 1000)