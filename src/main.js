import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let page = 1;
let currentQuery = '';
const PER_PAGE = 15;

const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements['search-text'].value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = searchQuery;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 4000,
      });
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / PER_PAGE);
    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

const loadMoreBtn = document.querySelector('.load-more-btn');
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / PER_PAGE);

    if (page >= totalPages) {
      iziToast.info({
        title: 'End of collection',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');

  if (firstCard) {
    const { height: cardHeight } = firstCard.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
