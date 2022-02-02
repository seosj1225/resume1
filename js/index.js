let saveY = window.scrollY;
let timer;
let currentStep = 0;
let windowHeight = 0;

const sections = document.querySelectorAll('section')
function onScroll() {
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(changeSection, 1000);
}

function changeSection() {
    const isDown = saveY < window.scrollY;
    if(isDown) {
        currentStep++;
    }
    console.log('targetScrollY', targetScrollY)
    console.log('targetScrollY', targetScrollY)
    const targetScrollY = windowHeight*currentStep;
    console.log('targetScrollY', targetScrollY)
    window.scrollTo(0, targetScrollY);
    console.log(currentStep)
}

function changeSectionSize() {
    windowHeight = screen.height;
    for( var i = 0; i<sections.length; i++) {
        sections[i].style.height = `${window.innerHeight}px`;
    }
}
changeSectionSize();

document.addEventListener('scroll', onScroll)
window.addEventListener('resize', changeSectionSize)

