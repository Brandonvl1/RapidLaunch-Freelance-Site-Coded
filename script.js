// RESPONSIVE NAV

const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggleIcons(); //you call the function here to execute the function on click of the menu icon
});

function toggleIcons() {
    menuIcon.classList.toggle('fa-bars'); //this is the original state of the icon
    menuIcon.classList.toggle('fa-times');// when clicked it will be toggled to this icon
    closeIcon.classList.toggle('fa-times');//this is the original state of the icon after it changed from menuicon
    closeIcon.classList.toggle('fa-bars');// when clicked it will be toggled to this icon
    
}

// SMOOTH SCROLLING FOR ANCHOR LINKS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



//----------------- TYPING ANIMATION

const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Design';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Develop';
    }, 3000);
    setTimeout(() => {
        text.textContent = 'Manage';
    }, 6000);
    setTimeout(() => {
        text.textContent = 'Maintain';
    }, 9000);
}

textLoad();
setInterval(textLoad, 12000);


// ---------------------COUNTER

function isInView(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function startCounterIfInView() {
    const targetSection = document.querySelector('.inhouse');
    if (isInView(targetSection)) {
        startCounter();

        window.removeEventListener('scroll', startCounterIfInView);
    }
}

function startCounter() {
    let count1 = 1;
    let count2 = 600;
    let count3 = 1;

    const coffee = setInterval(cupsCoffee, 3);
    const design = setInterval(hoursOfDesign, 0.3);
    const project = setInterval(projectDone, 100);

    function cupsCoffee() {
        count1++;
        document.querySelector('#number1').innerHTML = count1;
        if (count1 >= 300) clearInterval(coffee);
    }

    function hoursOfDesign() {
        count2++;
        document.querySelector('#number2').innerHTML = count2;
        if (count2 >= 1000) clearInterval(design);
    }

    function projectDone() {
        count3++;
        document.querySelector('#number3').innerHTML = count3;
        if (count3 >= 20) clearInterval(project);
    }
}

window.addEventListener('scroll', startCounterIfInView);


// FILTERABLE GALLERY

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');    
        }

        this.classList.add('active');


        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                itemBox[k].classList.remove('hide');  
                itemBox[k].classList.add('active');  
            }
        }


    })
}
