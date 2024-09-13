const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = 'e7b77a04616bbe4184f610c6f41bfdf9';
const list = document.querySelector('.js-list');
const loadMore = document.querySelector('.js-load');
const target = document.querySelector('.js-guard');
let currentPage = 1;

///---ВАРІАНТ1-----ПРОЛИТУВАННЯ ФІЛЬМІВ ЗА ДОПОМОГОЮ КНОПКИ ---LOADMORE----------------

/*loadMore.addEventListener('click', onLoad);
// --------КНОПКА ЗАВАНТАЖИТИ ЩЕ
function onLoad() {
  currentPage += 1;
  getTrending(currentPage)
    .then(data => {
      list.insertAdjacentHTML('beforeend', createMarkup(data.results));

      if (data.page === data.total_pages) {
        loadMore.hidden = true;
      }
    })
    .catch(err => console.log(err));
}
//-----------ЗАПИТ НА ФІЛЬМИ
function getTrending(page = 1) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}
//-----ОТРИМУЄМО ВІДПОВІДЬ КОЛЕКЦІЮ ФІЛЬМІВ
getTrending()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    if (data.page !== data.total_pages) {
      loadMore.hidden = false;
    }
  })
  .catch(err => console.log(err));
  
//------РЕНДЕРИМО ФІЛЬМИ
function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) =>
        `<li>
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
        <h2>${title}</h2>
      </li>`
    )
    .join('');
}*/
///--------СКРОЛ------------
/*let counter = 0;
document.querySelector('scroll', onScroll);

function onScroll() {
  counter += 1;
  console.log(counter);
}*/
///---ВАРІАНТ2-----ПРОЛИТУВАННЯ ФІЛЬМІВ ЗА ДОПОМОГОЮ СКРОЛ------------
let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};
let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      getTrending(currentPage)
        .then(data => {
          list.insertAdjacentHTML('beforeend', createMarkup(data.results));
          if (data.page !== data.total_pages) {
            observer.unobserve(target);
          }
        })
        .catch(err => console.log(err));
    }
  });
}

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}

getTrending()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    observer.observe(target);
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) =>
        `<li>
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
        <h2>${title}</h2>
      </li>`
    )
    .join('');
}
