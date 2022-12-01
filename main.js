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


// meow on mouse click
// window.addEventListener('click', () => {
    //https://github.com/Enixun/chrome-extension-hackathon/blob/main/angry-2.mp3
    // const meow = document.createElement('audio');
    // meow.setAttribute('src', 'https://github.com/Enixun/chrome-extension-hackathon/blob/main/angry-2.mp3');
    // meow.setAttribute('id', 'audio');
    // meow.play();
// })

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
    catImage.setAttribute('src', 'https://github.com/Enixun/chrome-extension-hackathon/blob/main/Cat.png?raw=true');
    catElement.setAttribute('id', 'cat-element');
    catElement.style.position = 'fixed';
    catElement.style.height = '100vh';
    catElement.style.width = 'auto';
    // catElement.style.display = 'block';
    // catElement.style.margin = '0 auto';
    // catElement.style.margin = `0 ${(pageBody.clientWidth - catElement.clientWidth) / 2}`;
    catElement.style.margin = `0 ${Math.random() * 50}vw`;
    // catElement.style.opacity = '50%';
    catElement.style.zIndex = '999';
    catElement.style.top = '100vh';
    catImage.style.height = '100%';
    catImage.style.width = 'auto';
    catElement.appendChild(catImage);

    pageBody.prepend(catElement);
    
    const pawElement = document.createElement('img');
    pawElement.setAttribute('src', '');
    pawElement.setAttribute('id', 'paw-element');
    catElement.appendChild(pawElement);
    

    const meow = document.createElement('audio');
    // meow.setAttribute('src', 'https://github.com/Enixun/chrome-extension-hackathon/blob/main/angry-2.mp3');
    // meow.setAttribute('use');
    meow.setAttribute('id', 'meowAudio');
    catElement.appendChild(meow);
}
// })

window.onload = (event) => {
    console.log('page loaded')
    initializeCat();
    setTimeout(popUpCat, (Math.random() * 10000) );
    // popUpCat();
}

window.onclick = (e) => {
    // popUpCat();
    // document.getElementById('meowAudio').play();
}

function popUpCat() {
    const cat = document.getElementById('cat-element');
    const oldPosition = Number(cat.style.top.replace('vh', ''));
    // console.log(`We're in popUpCat: ${oldPosition}`);
    if (oldPosition === 0) return;
    cat.style.top = `${oldPosition - 0.05}vh`;
    setTimeout(popUpCat, 1);
}

let circle = document.getElementById('paw');
const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
window.addEventListener('mousemove', (e) => {
    const paw = document.getElementById('paw-element');
    paw.style.left = e.pageX + 'px';
    paw.style.right = e.pageY + 'px';
});