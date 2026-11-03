const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const words = ['AI-powered products.', 'intelligent applications.', 'useful experiences.'];
let index = 0;
const target = document.getElementById('rotating-word');
setInterval(() => {
  index = (index + 1) % words.length;
  target.animate([{opacity:1, transform:'translateY(0)'},{opacity:0,transform:'translateY(7px)'}],{duration:180,fill:'forwards'}).onfinish = () => {
    target.textContent = words[index];
    target.animate([{opacity:0,transform:'translateY(-7px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,fill:'forwards'});
  };
}, 2600);
