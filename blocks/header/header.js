export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'su-navbar';

  nav.innerHTML = `
    <div class="su-logo">
      <img src="https://www.searchunify.com/wp-content/uploads/2021/04/searchunify-logo.webp" alt="SearchUnify Logo">
    </div>
    <ul class="su-nav-links">
      ${['Platform', 'Products', 'Industries', 'Resources', 'Company']
        .map((item) => `<li class="su-nav-item">${item} <span class="arrow"></span></li>`)
        .join('')}
    </ul>
    <div class="su-cta-wrapper">
      <a href="#" class="su-btn-demo">Book a Demo <span>➔</span></a>
    </div>
  `;

  block.replaceChildren(nav);
}