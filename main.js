/* Main javascript file */

const menu = document.getElementById("nav-list");
const menuButton = document.getElementById("nav-btn");

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;
};
console.log(generateRandomNumber());

const randomSiteGame = () => {
  generateRandomNumber();
  switch(randomNumber) {
    case 0:
      //link to site;
      break;
    case 1:
      //link to site;
      break;
    case 2:
      //link to site;
      break;
    case 3:
      //link to site;
      break;
    case 4:
      //link to site;
      break;
    default:
      console.log(`something went wrong`);
  ;}
};

const toggleMenuButtonColor = () => {
  if (menuButton.style.color === "green") {
      menuButton.style.color = "aqua";
  } else if (menuButton.style.color === "aqua") {
    menuButton.style.color = "blue";
  } else if (menuButton.style.color === "blue") {
      menuButton.target.style.color = "green";
  };
};

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
