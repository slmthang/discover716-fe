

// const Work =  function()  {

//         /******************** BURG-MENU NAV BAR ********************/

//         // const burgOpen = document.querySelector("#nav-bar-mobile .open-close .open");
//         // const burgClose = document.querySelector("#nav-bar-mobile .open-close .close");
//         // const burgMenu = document.querySelector("#burg-menu");

//         // burgOpen.addEventListener("click", () => {
//         //     burgMenu.style.display = "flex";
//         //     burgClose.style.display = "block";
//         //     burgOpen.style.display = "none";
//         // })

//         // burgClose.addEventListener("click", () => {
//         //     burgMenu.style.display = "none";
//         //     burgClose.style.display = "none";
//         //     burgOpen.style.display = "block";
//         // })


//         /******************** Intro Image Animation ********************/

//         function introImageAnimate() {
                
//             const bridgeImg = document.querySelector("#intro-msg .bridgeImg");
//             const sunsetImg = document.querySelector("#intro-msg .sunsetImg");
            
//             const on = bridgeImg.style.display;

//             if (on == "block") {
//                 bridgeImg.style.display = "none";
//                 sunsetImg.style.display = "block";
//             } else {
//                 bridgeImg.style.display = "block";
//                 sunsetImg.style.display = "none";
//             }
        
//         }

//         // changeIntro()
//         setInterval(introImageAnimate, 4000);



//         /******************** Moments Animation ( Pictures ) ********************/

//         const checkbound = function (n) {
//             if (n > 9) {
//                 return n % 9;
//             } else {
//                 return n;
//             }
//         }

//         function getRandomInt(max) {
//             return Math.floor(Math.random() * max) + 1;
//         }

//         const genNums = function () {
//             let num = getRandomInt(9);
//             return [num, checkbound(num + 1) , checkbound(num + 2), checkbound(num + 3) , checkbound(num + 4), checkbound(num + 5)];
//         }

//         const momentsAnimate = function () {

//             const momentsImg = document.querySelectorAll("#moments .moment img");
//             const momentsMobileImg = document.querySelectorAll("#moments-mobile .moment img");
            
//             const pics = genNums();

//             if (window.innerWidth > 767) {
//                 for (let i = 0; i < momentsImg.length; i++) {
//                     momentsImg[i].setAttribute("src", `/assets/moments/${pics[i]}.jpeg`);
//                 }
//             } else {
//                 momentsMobileImg[0].setAttribute("src", `/assets/moments/${pics[0]}.jpeg`);
//             }  
//         }

//         // picsSlider()
//         setInterval(momentsAnimate, 4500);
// };




// try {
//     Work();
// } catch (e) {
    
//     setTimeout(Work, 300);
// }