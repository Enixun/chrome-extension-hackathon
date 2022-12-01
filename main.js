// const pageManager = $('#contents');
// const pageManagerParent = pageManager.parent();
// pageManager.remove();
// pageManagerParent.prepend('<img src="https://searchzen.org/public/code_all_teh_things.jpg">');

// cat shows up on distracting sites, annoys you back into work
// i.e. reddit, facebook, instagram, youtube, etc.

// have a cat show up across on screen
// 
// animate behaviors of the cat
// this would include either having the cat move across the screen 
// ** have an image of the cats paw/arm swipe across the screen to interact with the mouse cursor
// paw link 
// event listeners to track user behavior
// we would need to implement a functionality that is able to track the mouse cursor either on click or by tracking the mouse cursor

// SAMPLE CODE

// following the mouse cursor
// let paw = document.getElementById('paw');
// const onMouseMove = (e) =>{
//     circle.style.left = e.pageX + 'px';
//     circle.style.top = e.pageY + 'px';
//   }
//   document.addEventListener('mousemove', onMouseMove);

// meow on mouse click
/*addEventListener('click', () => {
    const meow = document.createElement()
})
*/
// document.addEventListener('click', function handleClick(event) {
//   box.style.top = event.clientY - 50 + 'px';
//   box.style.left = event.clientX - 50 + 'px';
// });

// flex goals: wave paw off screen, wave tail, modify the mouse cursor image

// mouse cursor image example code
// div {
//     cursor: url(smiley.gif), url(myBall.cur), auto;

// object.style.cursor = ... 
// default value is = auto
// }

console.log('Cat Pun Name loaded')

// document.addEventListener("DOMContentLoaded", () => {
function initializeCat () {
    const pageBody = document.querySelector('body');
    const catElement = document.createElement('div');
    const catImage = document.createElement('img');
    catImage.setAttribute('src', 'https://images.pexels.com/photos/5835401/pexels-photo-5835401.jpeg');
    catElement.setAttribute('id', 'cat-element');
    catElement.style.position = 'fixed';
    catElement.style.height = '100vh';
    catElement.style.width = 'auto';
    // catElement.style.display = 'block';
    // catElement.style.margin = '0 auto';
    // catElement.style.margin = `0 ${(pageBody.clientWidth - catElement.clientWidth) / 2}`;
    catElement.style.margin = `0 50vw`;
    catElement.style.opacity = '50%';
    catElement.style.zIndex = '999';
    catImage.style.height = '100%';
    catImage.style.width = 'auto';
    catElement.appendChild(catImage);

    pageBody.prepend(catElement);
}
// })

window.onload = (event) => {
    console.log('page loaded')
    initializeCat();
    popUpCat();
}

function popUpCat() {
    const cat = document.getElementById('cat-element');
    // console.log(`We're in popUpCat: ${cat.style.top}`);
    cat.style.top = '50px';
    cat.style.top = '50px';

    // popUpCat();
}