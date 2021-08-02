import Navigo from 'navigo';
const router: Navigo = new Navigo('/', { hash: true, linksSelector: 'a' });

// window.router = router;
const rootHTML = document.querySelector('#root') as HTMLDivElement;
rootHTML.innerHTML = `
      <h1>Hello</h1>
      <a href="/" data-navigo>Home</a>
      <a href="about" data-navigo>about</a>
    `;

router
  .on({
    '/': function (match: string) {
      const about = document.querySelector('h1') as HTMLDivElement;
      about.innerHTML = 'home';
    },
    '/about': function () {
      const about = document.querySelector('h1') as HTMLDivElement;
      about.innerHTML = 'about';
      // console.log(about);
    },
  })
  .resolve();
router.lastResolved();
router.updatePageLinks();
