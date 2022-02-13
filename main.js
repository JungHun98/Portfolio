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

console.log(window.scrollY + window.innerHeight);
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

const headerToggle = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__menubox');
headerToggle.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
})

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#contact'
];

// Scroll시 현제 섹션 표시
const sectionArray = document.querySelectorAll('section');

let list = []
menuArray.forEach(elem => list.push(elem.dataset.link));

const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

let selectedMenuIdx;
let selectedMenu = menuArray[0];

function selecteMenu(index){
  selectedMenu.classList.remove('active');
  selectedMenu = menuArray[index];
  selectedMenu.classList.add('active');
}

const action = (entries, observer) => {
  entries.forEach(entry => {

    if(!entry.isIntersecting && entry.intersectionRatio > 0){
      const idx = sectionIds.indexOf('#' + entry.target.id);

      if(entry.boundingClientRect.y < 0){
        selectedMenuIdx = idx + 1;
      }
      else{
        selectedMenuIdx = idx - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(action, option);

sectionArray.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  if(window.scrollY === 0){
    selectedMenuIdx = 0;
  }
  else if(Math.floor(window.scrollY + window.innerHeight) === document.body.clientHeight){
    selectedMenuIdx = menuArray.length - 1;
  }
  selecteMenu(selectedMenuIdx);
})