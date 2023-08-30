const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const wake = document.getElementById('wake_up');
const lunch = document.getElementById('lunch');
const nap = document.getElementById('nap');
const night = document.getElementById('night');
const btn = document.querySelector('.button');
const photo = document.querySelector('.photo');

function demo(){
    console.log(wake.children[wake.selectedIndex].innerText);
    console.log(lunch.children[lunch.selectedIndex].innerText);
    console.log(nap.children[nap.selectedIndex].innerText);
    console.log(night.children[night.selectedIndex].innerText);
}
btn.addEventListener('mouseover',()=>{
    btn.innerText='Party Time';
    btn.style.background='linear-gradient(-113deg, #6E54EC 0%, #CB52F8 40%, #FC5EFF 81%, #F1A7C5 100%)';
})
btn.addEventListener('mouseout',()=>{
    btn.innerText='Set Alarm';
    btn.style.background='linear-gradient(113deg, #6E54EC 0%, #CB52F8 40%, #FC5EFF 81%, #F1A7C5 100%)';
})

btn.addEventListener('click', () => {
    let date = new Date();
    let hours = date.getHours();
    let labelText = document.getElementsByClassName('label');

    labelText[0].innerText = wake.children[wake.selectedIndex].innerText;
    labelText[1].innerText = lunch.children[lunch.selectedIndex].innerText;
    labelText[2].innerText = nap.children[nap.selectedIndex].innerText;
    labelText[3].innerText = night.children[night.selectedIndex].innerText;

 if(Number(lunch.value) === hours){
        msg1.innerText = "LET'S HAVE SOME LUNCH !!";
        photo.src = "./images/photo2.png";
    }
    else if(Number(nap.value) === hours){
        msg1.innerText = " STOP YAWNING, GET SOME TEA... ITS JUST EVENING!";
        photo.src = "./images/photo3.png";
    }
    else if(Number(night.value) === hours){
        msg1.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        photo.src = "./images/photo4.png";
    }else{
        msg1.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        photo.src = "./images/photo.png";
    }
})

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = 'AM';

    if (hours >= 0 && hours <= 11) {
        msg2.innerText = "GOOD MORNING!! WAKE UP !!"
        console.log('mrng')
    }
    if (hours >= 12 && hours < 16) {
        msg2.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        console.log('afternoon')
    }
    if (hours >= 16 && hours < 20 ) {
        msg2.innerText = "GOOD EVENING !!"
    }
    if (hours >= 20 && hours < 23 ) {
        msg2.innerText = "GOOD NIGHT !!"
    }

    if(hours>=12){
        hours-=12;
        ampm="PM";
    }

    if(hours===0)
        hours = 12;
    if(hours<10)
        hours='0'+hours;
    if(minutes<10)
        minutes='0'+minutes;
    if(seconds<10)
        seconds='0'+seconds;

    let hrss = document.getElementById('hr');
        hrss.innerText = hours;
    let mins = document.getElementById('min');
        mins.innerText = minutes;
    let secs = document.getElementById('sec');
        secs.innerText = seconds;
    let AMPM = document.getElementById('ampm');
        AMPM.innerText = ampm;
}
setInterval(()=>{
    clock()
},1000);
