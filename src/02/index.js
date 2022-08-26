import '../reset.css';
import '../base.css';
import '../icons.css';
import './style.css';

let toggleBtns = document.querySelectorAll('.toggle button');
let navigation = document.querySelector('.navigation');

toggleBtns?.forEach((toggleBtn) => {
  toggleBtn.addEventListener('click', () => {
    toggleBtnsToggle();
    //toggleBtn.classList.toggle('active')
    navigation.classList.toggle('opened')
  })
});

function toggleBtnsToggle() {
  toggleBtns?.forEach((toggleBtn) => {
    toggleBtn.classList.toggle('active');
  });
}


let lis = document.querySelectorAll('.navigation nav.main>ul>li');
let nav = document.querySelector('.navigation nav.main');
let navSub = document.querySelector('.navigation nav.sub');


lis?.forEach((li) => {
  li.addEventListener('click', () => {
    if (nav.classList.contains('selection')) {
      nav.classList.remove('selection');
      navSub.classList.remove('visible');
    } else {
      nav.classList.add('selection');
      navSub.classList.add('visible');
      lis.forEach((l) => {
        if (l !== li) {
          l.classList.remove('selected');
        } else {
          l.classList.add('selected');
        }
      })
    }
  })
})