let saveY = window.scrollY;
let timer;
let currentStep = 0;
let windowHeight = 0;

const sections = document.querySelectorAll('section')
function onScroll() {
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(changeSection, 100);
}

function changeSection() {
    const isDown = saveY < window.scrollY;
    const isUp = saveY > window.scrollY;
    if(isDown) {
        currentStep++;
        const targetScrollY = windowHeight*currentStep;
        window.scrollTo(0, targetScrollY);
        saveY = targetScrollY;
    } else if(isUp) {
        currentStep--;
        const targetScrollY = windowHeight*currentStep;
        window.scrollTo(0, targetScrollY);
        saveY = targetScrollY;
    }
}

function changeSectionSize() {
    windowHeight = window.innerHeight;
    for( var i = 0; i<sections.length; i++) {
        sections[i].style.height = `${windowHeight}px`;
    }
}
changeSectionSize();

document.addEventListener('scroll', onScroll)
window.addEventListener('resize', changeSectionSize)

