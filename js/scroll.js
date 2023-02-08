window.addEventListener('scroll', function () {
    // 글자 나타나는 효과
    console.log(window.scrollY);
    if (window.scrollY > 300) {
        document.querySelector('.letter').classList.add('opc');
    }
    if (window.scrollY > 600) {
        document.querySelector('.letter2').classList.add('opc');
    }
    if (window.scrollY > 900) {
        document.querySelector('.letter3').classList.add('opc');
    }
    if (window.scrollY > 1200) {
        document.querySelector('.letter4').classList.add('opc');
    }

    // 헤더 바뀌는 효과
    if (window.scrollY > 900) {
        document.querySelector('.header').classList.add('header_color_change');
        document.querySelector('.header').classList.remove('header_color_change2');
    }
    if (window.scrollY > 2400) {
        document.querySelector('.header').classList.remove('header_color_change');
        document.querySelector('.header').classList.add('header_color_change2');
    }
    if (window.scrollY < 900) {
        document.querySelector('.header').classList.remove('header_color_change');
        document.querySelector('.header').classList.remove('header_color_change2');
    }

    // 글자 아래에서 위로 올라오는 효과
    if (window.scrollY > 1350) {
        document.querySelector('.page3 p:nth-child(1)').classList.add('animation')
    }
    if (window.scrollY > 1400) {
        document.querySelector('.page3 p:nth-child(2)').classList.add('animation')
    }
    if (window.scrollY > 1900) {
        document.querySelector('.page4 h2').classList.add('animation')
    }
    if (window.scrollY > 2100) {
        document.querySelector('.portfolio_wrap').classList.add('animation')
    }
    if (window.scrollY > 2900) {
        document.querySelector('.page5 h2').classList.add('animation')
    }
    if (window.scrollY > 3100) {
        document.querySelector('.page5 .language').classList.add('animation')
    }
    if (window.scrollY > 4000) {
        document.querySelector('.page6 .h2').classList.add('animation')
    }
    if (window.scrollY > 4200) {
        document.querySelector('.profile').classList.add('animation')
    }

})

//  WEB PUBLISHER 한글자씩 나타나는 효과
let text = document.querySelector('.page7_h3').innerText;
let splitText = text.split('').join('</span><span>');
splitText = '<span>' + splitText + '</span>';
document.querySelector('.page7_h3').innerHTML = splitText;
const scroll = () => {
    let scrollTop = window.pageYOffset; 
    let offset2 = document.querySelector('.page7').offsetTop;
    console.log(scrollTop,offset2);
    if (scrollTop+500>= offset2) {
        document.querySelectorAll('.page7_h3>span').forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, 50 * (idx + 1));
        });
    }
}
window.addEventListener('scroll', () => {
    scroll();
});