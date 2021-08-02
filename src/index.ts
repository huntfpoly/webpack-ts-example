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
      console.log('home1');
    },
    '/about': function () {
      const about = document.querySelector('h1')?.innerHTML;
      console.log(about);
    },
    '*': function () {
      console.log('link not found');
      router.navigate('/');
    },
  })
  .resolve();
router.lastResolved();
router.updatePageLinks();
console.log(!router.lastResolved()?.[0]?.url);
