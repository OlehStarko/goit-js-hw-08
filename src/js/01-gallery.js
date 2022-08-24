// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
  `<div class="gallery__item" style="border-radius:16px">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      style="border-radius:16px"
    />
  </a>
</div>`;

const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ''
);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

galleryBox.addEventListener('click', onGalleryClick);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
});

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imgBigSizesLink = event.target.getAttribute('data-source');
  const modalWindow = basicLightbox.create(`
    <img src="${imgBigSizesLink}" style="border-radius:16px;">
`);
  modalWindow.show();

  document.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(event) {
    document.querySelector('.basicLightbox');
    if (event.code === 'Escape') {
      modalWindow.close();
    }
  }
}
