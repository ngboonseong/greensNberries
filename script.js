document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We\'ll get back to you soon.');
  e.target.reset();
});
