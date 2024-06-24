// wife 비 연결시 와이파이 연결 후 접속하라는 alert 출력 후 사이트 꺼짐
const inOnline = navigator.onLine; //현재 브라우저의 on,off상태를 확인
if(!inOnline){
    alert("인터넷이 연결되지 않았습니다. 확인 후 다시 QR코드를 카메라로 찍어주세요!")
    window.close(); // 자동으로 창 닫음
}
window.addEventListener('offline', function(e) {
    alert("인터넷이 연결되지 않았습니다. 확인 후 다시 QR코드를 카메라로 찍어주세요!")
    //window.close(); // 자동으로 창 닫음
})

// 310px 미만의 디스플레이 회전 png
let smartPhoneSizeErrorBox = document.querySelector('.smart_phone_size_errorbox')
let content = document.querySelector(".content")
let setMenuBoard = document.querySelectorAll('.br')
if(window.innerWidth < 310) {
    // 모든 컨텐츠는 없어지고 디스플레이를 뒤집으라는 이미지가 나온다.   
    smartPhoneSizeErrorBox.style.display = 'block'
    content.style.display = 'none'
}
// 세트메뉴 길이로 인한 br태그 활성화
if(window.innerWidth <= 767){
    for(let i = 0; i < setMenuBoard.length; i++){
        setMenuBoard[i].style.display = 'block'
    }
}
window.addEventListener('resize', function(e) {
    // 세트메뉴 길이로 인한 br태그 활성화
    if(window.innerWidth <= 767){
        for(let i = 0; i < setMenuBoard.length; i++){
            setMenuBoard[i].style.display = 'block'
        }
    } else {
        for(let i = 0; i < setMenuBoard.length; i++){
            setMenuBoard[i].style.display = 'none'
        }
    }
})

// heer 슬라이더 
$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
});
let slickBtns = document.querySelectorAll(".single-item > button")
for(let i = 0; i < slickBtns.length; i++){
    slickBtns[i].style.display = 'none'
}


// menu btns 누르면 active 클랙스 추가 및 해당 영역만 디스플레이 출력
let menuBtn1 = document.querySelector('.menu_btn1')
let menuBtn2 = document.querySelector('.menu_btn2')
let menuBtn3 = document.querySelector('.menu_btn3')
let menuBtn4 = document.querySelector('.menu_btn4')
let menuBtn5 = document.querySelector('.menu_btn5')
let menuBtn6 = document.querySelector('.menu_btn6')
let menuBtn7 = document.querySelector('.menu_btn7')
let menuBtn8 = document.querySelector('.menu_btn8')
let menuBtn9 = document.querySelector('.menu_btn9')
let menuBtn10 = document.querySelector('.menu_btn10')
let menuBtn11 = document.querySelector('.menu_btn11')
let menuBtn12 = document.querySelector('.menu_btn12')
let menuBtn13 = document.querySelector('.menu_btn13')
let menuBtn14 = document.querySelector('.menu_btn14')
let menuBtn15 = document.querySelector('.menu_btn15')
let menuBtn16 = document.querySelector('.menu_btn16')
let boardsUlItems = document.querySelectorAll('.main_content__menu_board > ul')

function menuButtonClassRemoveAction(){
    let menuBtnAll = document.querySelectorAll('.main_content__menu_btns > button')
    for(let i = 0; i < menuBtnAll.length; i++){
        menuBtnAll[i].classList.remove('active')
    }    
}
function menuBoardDisplayAction(value) {
    for(let i = 0; i < boardsUlItems.length; i++){
        boardsUlItems[i].style.display = 'none'
    }
    boardsUlItems[value].style.display = 'block'
}
menuBtn1.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn1.classList.add('active')
    for(let i = 0; i < boardsUlItems.length; i += 1) boardsUlItems[i].style.display = 'block'
})
menuBtn2.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn2.classList.add('active')
    menuBoardDisplayAction(0); 
})
menuBtn3.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn3.classList.add('active')
    menuBoardDisplayAction(1); 
})
menuBtn4.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn4.classList.add('active')  
    menuBoardDisplayAction(2); 
})
menuBtn5.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn5.classList.add('active')
    menuBoardDisplayAction(3); 
})
menuBtn6.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn6.classList.add('active')  
    menuBoardDisplayAction(4); 
})
menuBtn7.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn7.classList.add('active')
    menuBoardDisplayAction(5); 
})
menuBtn8.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn8.classList.add('active')  
    menuBoardDisplayAction(6); 
})
menuBtn9.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn9.classList.add('active')
    menuBoardDisplayAction(7); 
})
menuBtn10.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn10.classList.add('active')  
    menuBoardDisplayAction(8); 
})
menuBtn11.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn11.classList.add('active')  
    menuBoardDisplayAction(9); 
})
menuBtn12.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn12.classList.add('active')
    menuBoardDisplayAction(10); 
})
menuBtn13.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn13.classList.add('active')  
    menuBoardDisplayAction(11); 
})
menuBtn14.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn14.classList.add('active')
    menuBoardDisplayAction(12); 
})
menuBtn15.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn15.classList.add('active')  
    menuBoardDisplayAction(13); 
})
menuBtn16.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn16.classList.add('active')  
    menuBoardDisplayAction(14); 
})


// aside Btn 번역 및 상단 이동
let languageBtn = document.querySelector(".languageBtn")
let upBtn = document.querySelector(".upBtn")
let menuBtnItems = null;
let boards = document.querySelectorAll(".main_content__menu_board > ul > .category > span");

function menuBtnItemsTextChange(items){
    let menuBtnAll = document.querySelectorAll('.main_content__menu_btns > button')
    for(let i = 0; i < items.length; i++){
        menuBtnAll[i].innerHTML = items[i]
    }
}

languageBtn.addEventListener('click', function(e) {
    if(languageBtn.innerHTML == 'ENG'){
        // header
        languageBtn.innerHTML = "KOR"
        document.querySelector('.banner1_span').innerHTML = `As the first dining brand in Korea with a luxurious concept aimed at being a high-end pub, we strive to captivate our main consumer base, women. We have meticulously prepared to offer a unique experience that delivers a different level of satisfaction.`
        //이벤트 후 제거가능한 코드(시작)
        document.querySelector('.banner2_sub_title_span').innerHTML = 'June Special Event'
        document.querySelector('.banner2_title_span').innerHTML = '50% Off Soju Event'
        document.querySelector('.banner2_span').innerHTML = 'Co&Tabe Dongducheon Branch 1st Anniversary Soju Discount Event! The discounted soju options are limited, so please ask our staff for details.'
        // menu buttons
        menuBtnItems = ['Full Menu', 'Set Menu', 'New Menu', 'Soup Dishes', 'Pizza Dishes', 'Special Dishes','Dried Snacks', 'Fried Dishes', 'Dessert Dishes', 'Main Dishes', 'Beverages', 'Soju', 'Beer', 'Makgeolli', 'Imported Beer', 'Liquor or Spirits']
        menuBtnItemsTextChange(menuBtnItems)    
        // menu board
        for(let i  = 0; i < boards.length; i++){
            boards[i].innerText = menuBtnItems[i + 1];
        }
        // 아무거나
        document.querySelector('.detail_desc').innerHTML = `Introducing our new assorted platter!
        You can enjoy fried chicken, an assortment of fried snacks, fresh fruit, dried snacks, and tangy vegetable noodles all in one. This assorted platter offers a variety of flavors and textures, making it perfect for sharing with friends or family. Enjoy a delicious selection of snacks all at once!`
    } else {
        // header
        languageBtn.innerHTML = "ENG" 
        document.querySelector('.banner1_span').innerHTML = `국내 최초 럭셔리 분위기의 컨셉으로 요리 주점을 지향하는 외식 브랜드는 주요 소비 계층인
        여심을 사로잡을 수 있어야 합니다. 만족의 온도가 다른 특별함으로 완벽히 준비했습니다.`
        //이벤트 후 제거가능한 코드(시작)
        document.querySelector('.banner2_sub_title_span').innerHTML = '6월 스페셜 이벤트'
        document.querySelector('.banner2_title_span').innerHTML = '소주 50% 할인 이벤트'
        document.querySelector('.banner2_span').innerHTML = `코앤타베 동두천점 1주년 기념 소주 할인 행사! 할인 가능한 소주는 정해져 있으니 직원에게 문의 바랍니다.`
        //  menu buttons
        menuBtnItems = ['전체메뉴', '세트메뉴', '신메뉴', '탕류', '피자류', '별미류','마른안주', '튀김류', '후식류', '식사류', '음료', '소주', '맥주', '막걸리', '수입맥주', '양주']
        menuBtnItemsTextChange(menuBtnItems)    
        // menu board
        for(let i  = 0; i < boards.length; i++){
            boards[i].innerText = menuBtnItems[i + 1];
        }
         // 아무거나
        document.querySelector('.detail_desc').innerHTML = `이번에 새롭게 선보이는 모둠 플레이트를 소개합니다. 후라이드 치킨 그리고 모둠 튀김, 신선한 과일과 마른안주 및 새콤한 야채 소면을 한 번에 즐길 수 있습니다.
            이 모둠 플레이트는 다양한 맛과 식감을 제공하여 친구나 가족과 함께 나눠 먹기에 완벽합니다. 맛있는 안주를 한 번에 즐겨보세요!`
    }
})

// 상단 이동
$("#scroll-top").on("click",function(){
    
    if(window.innerWidth >= 1021){
        $('html, body').animate({
            scrollTop : 500
            }, 500)
            return false;
    } else if(window.innerWidth <= 1020 && window.innerWidth >= 768){
        $('html, body').animate({
            scrollTop : 486
            }, 500)
            return false;
    } else {
        $('html, body').animate({
            scrollTop : 300
            }, 500)
            return false;
    }
});

window.addEventListener('scroll',function(){
    let caret = document.querySelector('.upBtn > i')
    windowY = window.scrollY
    if(window.innerWidth >= 1021){
        if(windowY < 500){
            caret.classList.replace('fa-caret-up', 'fa-caret-down')
        } else {
            caret.classList.replace('fa-caret-down', 'fa-caret-up')
        }
    } else if(window.innerWidth <= 1020 && window.innerWidth >= 768){
        if(windowY < 486){
            caret.classList.replace('fa-caret-up', 'fa-caret-down')
        } else {
            caret.classList.replace('fa-caret-down', 'fa-caret-up')
        }
    } else{
        if(windowY < 300){
            caret.classList.replace('fa-caret-up', 'fa-caret-down')
        } else {
            caret.classList.replace('fa-caret-down', 'fa-caret-up')
        }
    }
})

// 아무거나 detail설정
let body = document.querySelector("body")
document.querySelector(".board2_item1").addEventListener('click', function(){
    document.querySelector('.detail_board').style.display = 'block'
    body.style.overflow='hidden'
})
document.querySelector(".close_btn").addEventListener('click', function() {
    document.querySelector('.detail_board').style.display = 'none'
    body.style.overflow='visible'

})
document.querySelector('html').addEventListener('click', function(e) {
    if(e.target.className == 'detail_board') {
        document.querySelector('.detail_board').style.display = 'none'
        body.style.overflow='visible'
    }
})