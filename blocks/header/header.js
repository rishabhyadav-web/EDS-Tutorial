// header.js
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('custom-header');

    // Create Main Nav Element
    const nav = document.createElement('nav');
    nav.className = 'su-navbar';

    // Logo Container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'su-logo';
    logoContainer.innerHTML = `
        <img src="https://www.searchunify.com/wp-content/uploads/2021/04/searchunify-logo.webp" alt="SearchUnify Logo">
    `;

    // Navigation Links
    const menuItems = ['Platform', 'Products', 'Industries', 'Resources', 'Company'];
    const navLinks = document.createElement('ul');
    navLinks.className = 'su-nav-links';

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'su-nav-item';
        li.innerHTML = `${item} <span class="arrow"></span>`;
        navLinks.appendChild(li);
    });

    // CTA Button
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'su-cta-wrapper';
    const ctaBtn = document.createElement('a');
    ctaBtn.href = '#';
    ctaBtn.className = 'su-btn-demo';
    ctaBtn.innerHTML = 'Book a Demo <span>➔</span>';
    ctaWrapper.appendChild(ctaBtn);

    // Assemble
    nav.appendChild(logoContainer);
    nav.appendChild(navLinks);
    nav.appendChild(ctaWrapper);
    headerContainer.appendChild(nav);
});