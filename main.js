'use strict';

let header = document.querySelector('#header');
let headerHeight = header.clientHeight;
let home = document.querySelector('#home');
let homeNote = document.querySelector('.home__box');
let homeHeight = home.getBoundingClientRect().height;

let menuArray = document.querySelectorAll('.header__menu__item');
let arrowUp = document.querySelector('.arrowup');

//스크롤 시 header의 backgound의 색이 진해짐 
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight){
    header.classList.add('header--dark');
  }
  else{
    header.classList.remove('header--dark');
  }
  homeNote.style.opacity = 1 - window.scrollY / homeHeight;

  if(window.scrollY > headerHeight){
    arrowUp.classList.add('visible');
  }
  else{
    arrowUp.classList.remove('visible');

  }
});

// header, contact click시 스크롤 이동
document.addEventListener('click', (event) => {
  let moveId = event.target.dataset.link;
  if(moveId == null){
    return;
  }
  else{
    scrollIntoView(moveId);
  }
})

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
})

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}