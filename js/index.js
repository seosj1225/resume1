
let saveY = window.scrollY;
let timer;
let currentStep = 0;
let windowHeight = 0;
let isScrollLock = false;

const INIT_COUNT = 20;
let count = INIT_COUNT;

const sections = document.querySelectorAll('section');

function onScroll(e) {
    if(!isScrollLock) {
        isScrollLock = true;
        changeSection();
    }    
}

function changeSection() {
    const isDown = saveY < window.scrollY;
    const isUp = saveY > window.scrollY;
    if(isDown && currentStep < 3) {
        currentStep++;
        move();
    } else if(isUp && currentStep > 0) {
        currentStep--;
        move();
    }
}


function move() {
    const targetScrollY = windowHeight*currentStep;
    const gap = (targetScrollY - window.scrollY)/count;

    if(count > 0) {
        --count;
        window.scrollTo(0, window.scrollY + gap);
        window.requestAnimationFrame(move);
    } else {
        saveY = targetScrollY;
        count = INIT_COUNT;
        isScrollLock = false;

        setNavClass();
    }
}

function setNavClass() {
    const navs = document.querySelectorAll('.nav_left > li');
    for(var i = 0; i<navs.length; i++) {
        if( i === currentStep) {
            navs[i].classList.add('on');
        } else {
            navs[i].classList.remove('on');
        }
    }
}

function changeSectionSize() {
    windowHeight = window.innerHeight;
    for( var i = 0; i<sections.length; i++) {
        sections[i].style.height = `${windowHeight}px`;
    }
}
//changeSectionSize();

//document.addEventListener('scroll', onScroll)
//window.addEventListener('resize', changeSectionSize)


function onClickMenu(sectionNum) {
    isScrollLock = true;
    currentStep = sectionNum;
    move();
}


const pcPortfolio = document.querySelector('#pc');
const mobilePortfolio = document.querySelector('#mobile');

function showPortfolio(filter) {
    if (filter === 'pc') {
        pcPortfolio.style.display = 'flex';
        mobilePortfolio.style.display = 'none';
    } else if (filter === 'mobile'){
        pcPortfolio.style.display = 'none';
        mobilePortfolio.style.display = 'flex';
    } else {
        pcPortfolio.style.display = 'flex';
        mobilePortfolio.style.display = 'flex';
    }
}