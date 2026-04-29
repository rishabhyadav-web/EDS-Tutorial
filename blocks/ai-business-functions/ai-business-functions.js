import { createOptimizedPicture } from '../../scripts/aem.js';

const BACKGROUND_KEYS = new Set([
  'background',
  'background image',
  'bg image',
  'section background',
]);

function getRowKey(row) {
  const firstCol = row.firstElementChild;
  if (!firstCol) return '';
  return firstCol.textContent.trim().toLowerCase();
}

function applySectionBackground(block, row) {
  const section = block.closest('.section');
  const backgroundImage = row.querySelector('picture img, img');
  if (!section || !backgroundImage?.src) return;

  section.classList.add('ai-business-functions-section');
  section.style.setProperty('--ai-business-bg-image', `url("${backgroundImage.src}")`);
}

export default function decorate(block) {
  const section = block.closest('.section');
  if (section) section.classList.add('ai-business-functions-section');

  const rows = [...block.children];
  const cardRows = [];

  rows.forEach((row) => {
    const rowKey = getRowKey(row);
    if (BACKGROUND_KEYS.has(rowKey)) {
      applySectionBackground(block, row);
      return;
    }
    cardRows.push(row);
  });

  const ul = document.createElement('ul');
  cardRows.forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((col) => {
      if (col.children.length === 1 && col.querySelector('picture')) {
        col.className = 'ai-business-functions-card-image';
      } else {
        col.className = 'ai-business-functions-card-body';
      }
    });
    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '500' }]));
  });

  block.replaceChildren(ul);
}
