/* Main javascript file */

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

function openNav() {
  document.getElementById('sidebar-nav').classList.toggle('active');
}