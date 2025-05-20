const homeEls = document.querySelectorAll('.homes');
const leadersEls = document.querySelectorAll('.leaders');
const eventsEls = document.querySelectorAll('.events');
const newsEls = document.querySelectorAll('.news');
const youthsEls = document.querySelectorAll('.youths');





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

