const searchInput = document.querySelector('#search-input');
const searchWrapper = document.querySelector('.search-wrapper');

searchInput.addEventListener('keyup', ()=> {
   searchWrapper.classList.remove('hidden');

   if (searchInput.value === '') {
      searchWrapper.classList.add('hidden');
   }

   window.addEventListener('click', () => {
      searchInput.value = ''
      searchWrapper.classList.add('hidden');
   })
})

const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('#sidebar-menu');
const body    = document.querySelector('body')

showSidebar(menu);
hideSidebar(window);
hideSidebar(close);

// Functions

function showSidebar(item){
   item.addEventListener('click', (e) => {
      e.preventDefault();

      e.stopPropagation();

      sidebar.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('overflow-hidden');
   })
}

function hideSidebar(item){
   item.addEventListener('click', (e) => {
      e.preventDefault();

      e.stopPropagation();

      console.log(e.target)

      if (e.target !== sidebar) {
         if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('overflow-hidden');
         } else {
            return;
         }
      } else {
         return;
      }
   })
}

// Glider

// new Glider(document.querySelector('.glider'), {
//    slidesToShow: 1,
//    dots: '#dots',
//    draggable: true,
//    arrows: {
//      prev: '.glider-prev',
//      next: '.glider-next'
//    }
//  });