
// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  const icon = menuToggle.querySelector('i');
  icon?.classList.toggle('fa-bars');
  icon?.classList.toggle('fa-times');
});

// Close mobile menu on link click
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded','false');
      const icon = menuToggle?.querySelector('i');
      icon?.classList.add('fa-bars');
      icon?.classList.remove('fa-times');
    }
  });
});
