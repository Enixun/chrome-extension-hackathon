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

const memes = [
    'https://media.discordapp.net/attachments/1040063913124974640/1047675210649841744/Screenshot_2022-11-30_at_6.47.07_PM.png',
    'https://media.discordapp.net/attachments/1040063913124974640/1047558523862663309/420.jpg',
    'https://media.discordapp.net/attachments/1044809683686404106/1045873111951753287/juicy.jpg',
    'https://media.discordapp.net/attachments/1044809683686404106/1045860819025526814/recursion.png',
    'https://cdn.discordapp.com/attachments/1047744135068655696/1047744655502090250/ezgif.com-gif-maker_1.gif',
    'https://media.discordapp.net/attachments/1044809683686404106/1045765410806575265/Fevdi1669403672.jpeg',
    'https://media.discordapp.net/attachments/1040063913124974640/1045755257310953553/image.png?width=821&height=456',
    'https://media.discordapp.net/attachments/1040063913124974640/1045144390064148520/image.png',
    'https://media.discordapp.net/attachments/1044809683686404106/1045123117292466187/3cwxv3fo2co51.jpg',
    'https://media.discordapp.net/attachments/1044809683686404106/1045121417303302185/telegram-cloud-photo-size-1-5629927807333279687-y.jpg?width=821&height=735',
    'https://media.discordapp.net/attachments/1040063913124974640/1045120671455387738/Dredd_Imposter.jpeg',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png',
    'https://pbs.twimg.com/media/EXUgmSsXQAAlWg7.jpg',
    'https://i.ytimg.com/vi/g_Y9ZV-y3bM/maxresdefault.jpg',
    'https://img-9gag-fun.9cache.com/photo/aVxLwmy_460s.jpg',
    'https://www.googleapis.com/download/storage/v1/b/kaggle-forum-message-attachments/o/inbox%2F10465213%2Fdc039d8cd72d8b454e0b9a33ba7e72a5%2Fprogrammerhumor-io-frontend-memes-programming-memes-4eacde1cc669487-608x574.webp?generation=1660784184136085&alt=media',
    'https://cdn.ebaumsworld.com/mediaFiles/picture/2502212/86588813.png',
    'https://media.tenor.com/G5cXavmG-fcAAAAC/programming-meme.gif'
];
const catVersions = [
    'https://github.com/Enixun/chrome-extension-hackathon/blob/main/Cat.png?raw=true',
    'https://github.com/Enixun/chrome-extension-hackathon/blob/main/Cat-Phil.png?raw=true',
    'https://github.com/Enixun/chrome-extension-hackathon/blob/main/Cat-Will.png?raw=true'
];

const work = [
    'https://sayingimages.com/wp-content/uploads/back-to-work-break-over-now-meme.jpg',
    'https://uploads-ssl.webflow.com/602250ed045ee75512d753ec/616025235ceb3552b934db91_wUkImCuqVSGDuaKojulafIvbapieMCOSPI4OvaKnKDggZAbD279hyopMKLHgXxSp0F8u8rVOvFtn3_9x2sTglijjm3wXaFngDxBJuEZ0Esj-L49fr_zgOJ6gFMufY125R9OQHxMe%3Ds0.png',
    'https://i.imgflip.com/420xaq.jpg',
    'https://www.siliconrepublic.com/wp-content/uploads/2016/01/back-to-work-memes-arnie.jpg',
    'https://i.pinimg.com/originals/d5/c0/86/d5c0866f5993f929a3cc3ebd52c6e51f.jpg',
    'https://media.makeameme.org/created/get-back-to-imuq2t.jpg'

]

// console.log('Cat Pun Name loaded')

// document.addEventListener("DOMContentLoaded", () => {
function initializeCat () {
    const pageBody = document.querySelector('body');
    
    const catElement = document.createElement('div');
    catElement.setAttribute('id', 'cat-element');
    // catElement.style.cssText = `
    //     position: fixed;
    //     height: 100vh;
    //     width: 100vw;
    //     z-index: 999;
    //     top: 100vh;
    // `;
    catElement.style.position = 'fixed';
    catElement.style.height = '100vh';
    catElement.style.width = '100vw';
    catElement.style.zIndex = '999';
    catElement.style.top = '100vh';
    catElement.style.background = 'rgba(128,128,128,0.8)';
    
    const catImage = document.createElement('img');
    catImage.setAttribute('id', 'cat-img');
    catImage.setAttribute('src', catVersions[0]);
    catImage.style.height = '100%';
    catImage.style.width = 'auto';
    // catImage.style.margin = `0 ${Math.random() * 50}vw`;
    catImage.style.margin = `0 30vw`;
    catElement.appendChild(catImage);

    pageBody.prepend(catElement);
    
    
    // const pawElement = document.createElement('div');
    // const pawImg = document.createElement('img');
    // pawImg.setAttribute('src', 'https://thumbs.dreamstime.com/z/cat-paw-white-background-173592268.jpg');
    // pawElement.setAttribute('id', 'paw-element');
    // pawElement.style.height = '100%';
    // pawElement.style.width = 'auto';
    // pawElement.style.zIndex = '999';
    // pawImg.style.height = '100%';
    // pawImg.style.width = 'auto';
    // pawElement.style.top = '200px';
    // pawElement.style.position = 'fixed';
    // // catElement.appendChild(pawElement);
    // catElement.prepend(pawElement);
    

    // const meow = document.createElement('audio');
    // // meow.setAttribute('src', 'https://github.com/Enixun/chrome-extension-hackathon/blob/main/angry-2.mp3');
    // // meow.setAttribute('use');
    // meow.setAttribute('id', 'meowAudio');
    // catElement.appendChild(meow);
}
// })

window.onload = (event) => {
    // console.log('page loaded')
    // setTimeout(popUpCat, (Math.random() * 10000) );
    popUpCat();
    // document.getElementById('cat-element').style.top = '0vh';
}

initializeCat();
createTextBubble();
document.getElementById('wait-btn').addEventListener('mousedown', (e) => {
    pushDownCat();
});
document.getElementById('meme-btn').addEventListener('mousedown', (e) => {
    const memeBtn = document.getElementById('meme-btn');
    let memeCount = Number(memeBtn.innerText[memeBtn.innerText.length - 1]);
    console.log(memeCount);
    if (memeCount > 1) {
        document.getElementById('meme-img').src = memes[Math.floor(Math.random() * memes.length)];
        memeBtn.innerText = `Meme: ${--memeCount}`;
    } else {
        memeBtn.style.display = 'none';
        document.getElementById('meme-img').src = work[Math.floor(Math.random() * work.length)];
        // memeBtn.disabled = true;
    }

    
});

// window.addEventListener('click' , function(event) {
//     pushDownCat();
//     // popUpCat();
//     // document.getElementById('meowAudio').play();
// });

function popUpCat() {
    const cat = document.getElementById('cat-element');
    const oldPosition = Number(cat.style.top.replace('vh', ''));
    document.querySelector('#meme-btn').style.display = 'inline-block';
    document.querySelector('#meme-btn').innerText = 'Meme: 5';
    // console.log(`We're in popUpCat: ${oldPosition}`);
    if (oldPosition === 0) {
        // console.log);
        // setTimeout(createTextBubble, 500);
        document.getElementById('cat-text').style.visibility = 'visible';
        return;
    }
    cat.style.top = `${oldPosition - 0.5}vh`;
    setTimeout(popUpCat, 1);
}

function pushDownCat() {
    const cat = document.getElementById('cat-element');
    const oldPosition = Number(cat.style.top.replace('vh', ''));
    if (oldPosition === 100 ) {
        setTimeout(popUpCat, 50); //update 50 to whatever snooze length in ms
        document.getElementById('cat-img').src = catVersions[Math.floor(Math.random() * catVersions.length)];
        return;
    }
    if (oldPosition === 0) {
        document.getElementById('meme-img').src = memes[Math.floor(Math.random() * memes.length)];
        document.getElementById('cat-text').style.visibility = 'hidden';
    }
    cat.style.top = `${oldPosition + 0.4}vh`;
    setTimeout(pushDownCat, 1);
}

function createTextBubble() {
    const cat = document.getElementById('cat-element');
    const txt = document.createElement('div');
    txt.setAttribute('id', 'cat-text');
    txt.style.cssText = `
        width: 55em;
        height: 45em;
        margin: 0.5em;
        position: absolute;
        z-index: 999;
        background-color: white;
        border: 1px solid black;
        border-radius: 5em;
        overflow: hidden;
        visibility: hidden;
    `;
    // txt.style.width = '45%';
    // txt.style.height = '55%';
    // txt.style.margin = '0.5em';
    // txt.style.position = 'absolute';
    // txt.style.zIndex = '999';
    // txt.style.backgroundColor = 'white';
    // txt.style.border = '1px solid black';
    // txt.style.borderRadius = '5em';
    // txt.style.overflow = 'hidden';
    // txt.style.visibility = 'hidden';
    
    const textImage = document.createElement('img');
    textImage.setAttribute('id', 'meme-img');
    textImage.setAttribute('src', memes[Math.floor(Math.random() * memes.length)]);
    textImage.style.height = '100%';
    textImage.style.width = '100%';

    txt.appendChild(textImage);

    cat.prepend(txt);
    
    // can create a function to create these buttons
    
    // wait/snooze button
    const waitBtn = document.createElement('div');
    waitBtn.innerText = 'Snooze';
    waitBtn.setAttribute('id', 'wait-btn')
    waitBtn.style.cssText = `
        position: absolute;
        line-height: 50px;
        text-align: center;
        border: 1px solid black;
        border-radius: 0.25em;
        width: 75px;
        height: 50px;
        z-index: 999;
        left: 2em;
        bottom: 2em;
        background-color: white;
        user-select: none;
        cursor: pointer;
        color: black;
    `;

    const memeBtn = document.createElement('div');
    memeBtn.innerText = 'Meme: 5';
    memeBtn.setAttribute('id', 'meme-btn');
    memeBtn.style.cssText = `
        position: absolute;
        line-height: 50px;
        text-align: center;
        border: 1px solid black;
        border-radius: 0.25em;
        width: 75px;
        height: 50px;
        z-index: 999;
        left: 10em;
        bottom: 2em;
        background-color: white;
        user-select: none;
        cursor: pointer;
        color: black;
    `;

    cat.prepend(memeBtn);
    cat.prepend(waitBtn);
}


// window.addEventListener('mousemove', (e) => {
//     const catImg = document.getElementById('cat-element');
//     const fixedPos = Number(catImg.style.top.replace('vh', ''));
//     const paw = document.getElementById('paw-element');
//     if(fixedPos === 0){
//         console.log(`e.pageX: ${e.pageX}`)
//         paw.style.left = `${e.pageX}px`;
//         paw.style.top = `${e.pageY}px`;
//     }
// });