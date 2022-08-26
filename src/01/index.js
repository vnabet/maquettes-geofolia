
import '../reset.css';
import '../base.css';
import '../icons.css';
import './style.css';

import {
  createPopper
} from '@popperjs/core';



let testBtn = document.querySelector('.testBtn');
let ribbon = document.querySelector('.ribbon');

// testBtn.addEventListener('click', () => {
//   ribbon && ribbon.classList.toggle('minified')
// });


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    ribbon.classList.add('minified');
    //window.setTimeout(() => popper.forceUpdate(), 200);
  } else {
    ribbon.classList.remove('minified');
    //window.setTimeout(() => popper.forceUpdate(), 200);

    popper && popper.destroy();
    popper = null;
  }
});

let tooltip = document.querySelector('#tooltip');



document.querySelectorAll('.ribbon button').forEach(element => {
  element.addEventListener('mouseover', (event) => showPopper(event?.currentTarget), true);
  element.addEventListener('mouseleave', (event) => hidePopper(event?.currentTarget), true);
});


let popper = null;

function showPopper(element) {
  if (!popper && ribbon.classList.contains('minified')) {

    const text = element.querySelector('.btn-label span')?.innerText;

    if (text) {

      tooltip.querySelector('span').innerText = text;
      popper = createPopper(element, tooltip
      , {
        placement: 'top',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [8, 8],
          },
        }, ],
      });
    }

  }
}

function hidePopper() {
  popper && popper.destroy();
  popper = null;
}