const box1 = document.querySelector('#cajita1');
const box2 = document.querySelector('#cajita2');
const box3 = document.querySelector('#cajita3');
const box4 = document.querySelector('#cajita4');

/* Cajita1 */
box1.style.backgroundColor = 'red';
box1.style.width = '200px';
box1.style.height = '200px';

/* Cajita2 */
box2.style.backgroundColor = 'green';
box2.style.width = '200px';
box2.style.height = '200px';

/* Cajita3 */
box3.style.backgroundColor = 'blue';
box3.style.width = '200px';
box3.style.height = '200px';

/* Cajita4 */
box4.style.backgroundColor = 'yellow';
box4.style.width = '200px';
box4.style.height = '200px';


const letraA = 'pink';
const letraS = 'orange';
const letraD = 'tomato';


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        box1.style.backgroundColor=letraA;
    } else if (event.key === 's') {
        box2.style.backgroundColor=letraS;
    } else if (event.key === 'd'){
        box3.style.backgroundColor=letraD;
    }
})