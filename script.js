document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

var form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    e.target.reset();
  });
}
