const homeEls = document.querySelectorAll('.homes');
const leadersEls = document.querySelectorAll('.leaders');
const eventsEls = document.querySelectorAll('.events');
const newsEls = document.querySelectorAll('.news');
const youthsEls = document.querySelectorAll('.youths');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.icon-close');
const navLinks = document.querySelector('nav ul');
console.log(navLinks);







const router = function (link) {
   window.location.href = link;
}


homeEls.forEach(homeEl => {
   homeEl.addEventListener('click', () => router("/index.html"));
});
leadersEls.forEach(leadersEl => {
   leadersEl.addEventListener('click', () => router("/html/leaders.html"));
});
eventsEls.forEach(eventsEl => {
   eventsEl.addEventListener('click', () => router("/html/event.html"));
});
newsEls.forEach(newsEl => {
   newsEl.addEventListener('click', () => router("/html/news.html"));
});
youthsEls.forEach(youthsEl => {
   youthsEl.addEventListener('click', () => router("/html/youth.html"));
});

const dateEl = document.querySelector('.date');
const date = new Date().getFullYear();

dateEl.textContent = date ;


menuIcon.addEventListener('click', () => {
navLinks.style.display = 'block' ,
closeIcon.classList.remove('hidden');
menuIcon.classList.add('hidden')
});

closeIcon.addEventListener('click', () => {
navLinks.style.display = 'none' ,
closeIcon.classList.add('hidden');
menuIcon.classList.remove('hidden')
});




document.body.addEventListener('click', function (e) {
   
    if (
        navLinks.style.display === 'block' &&
        !navLinks.contains(e.target) &&
        !menuIcon.contains(e.target) &&
        !closeIcon.contains(e.target)
    ) {
      console.log(e.target);
      
        navLinks.style.display = 'none';
        closeIcon.classList.add('hidden');
        menuIcon.classList.remove('hidden');
    }
});

