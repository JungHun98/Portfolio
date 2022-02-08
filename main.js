'use strict';

let header = document.querySelector('#header');
let headerHeight = header.clientHeight;

//스크롤 시 header의 backgound의 색이 진해짐 
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight){
    header.classList.add('header--dark');
  }
  else{
    header.classList.remove('header--dark');
  }
  
  let menuArray = document.querySelectorAll('.header__menu__item');

});

// header, contact click시 스크롤 이동
document.addEventListener('click', (event) => {
  let moveId = event.target.dataset.link;
  if(moveId == null){
    return;
  }
  else{
    let movePoint = document.querySelector(moveId)
    movePoint.scrollIntoView({behavior: "smooth"});
  }
})

console.log(document.querySelectorAll('.header__menu__item'))
// about 500
// skills 1137