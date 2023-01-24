/* ==================== MAIN JAVASCRIPT FILE ===================== */

/* ==================== VARIABLE BANK ============================ */

const body = document.querySelector('body');
const hello = document.getElementById('hello-sign');
const logo = document.getElementById('logo');
const welcomeP = document.getElementById('welcome-p');
const aboutMeP = document.querySelector('.about-me-p');
const aboutSiteP = document.querySelector('.about-site-p');
const otherProjectsP = document.querySelector('.other-projects-p');
const underSimp = document.querySelector('.under-simp');
const simpPhoto = document.querySelector('#simp-photo');



/*============== PARAGRAPH INTERACTIVITY FUNCTIONS ================ */

function changeWelcomePColor() {
  if (welcomeP.style.color !== 'orange') {
    welcomeP.style.color = 'orange';
  } else {
    welcomeP.style.color = 'rgb(32, 29, 29)';
  };
};

welcomeP.onclick = changeWelcomePColor;

function changeAboutMePColor() {
  if (aboutMeP.style.color !== 'orange') {
    aboutMeP.style.color = 'orange';
  } else {
    aboutMeP.style.color = 'rgb(32, 29, 29)';
  };
};

aboutMeP.onclick = changeAboutMePColor;

function changeAboutSitePColor() {
  if (aboutSiteP.style.color !== 'orange') {
    aboutSiteP.style.color = 'orange';
  } else {
    aboutSiteP.style.color = 'rgb(32, 29, 29)';
  };
};

aboutSiteP.onclick = changeAboutSitePColor;

function changeOtherProjectsPColor() {
  if (otherProjectsP.style.color !== 'orange') {
    otherProjectsP.style.color = 'orange';
  } else {
    otherProjectsP.style.color = 'rgb(32, 29, 29)';
  };
};

otherProjectsP.onclick = changeOtherProjectsPColor;


/*===============================END OF PARAGRAPH INTERACTIVITY=======================================*/ 
/*===============================Start of welcome sign functions======================================*/


function makeBright() {
  if (hello.style.filter === 'none'){
    hello.style.filter = 'brightness(150%)';
    hello.style.background = 'radial-gradient(closest-side, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5), rgba(255, 105, 180, 0.7), rgba(255, 105, 180, 0.25), rgba(255, 105, 180, 0.05), rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5), transparent)';
    body.style.backdropFilter = 'brightness(30%)';
  } else {
    hello.style.filter = 'none';
    hello.style.background = 'none';
    body.style.backdropFilter = 'none';
  }
};

hello.onclick = makeBright;

function makeShrink() {
  hello.style.width = '99.5%';
};

function returnToNormalSize() {
  hello.style.width = '100%';
};

hello.onmousedown = makeShrink;
hello.onmouseup = returnToNormalSize;


/* ================ PHOTO FUNCTIONS =============== */

function nameAppearSimp() {
    underSimp.style.opacity = '0.9';
};

function nameDisappearSimp() {
  underSimp.style.opacity = '0';
}


simpPhoto.onmouseenter = nameAppearSimp;
simpPhoto.onmouseleave = nameDisappearSimp;