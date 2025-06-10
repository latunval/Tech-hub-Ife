const container = document.getElementById('event-container');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

function createCard(event) {
  return `
    <div class="col">
      <div class="card my-2 card-body">
        <div class="">
          <img src="${event.thumbnail.url}"  Image" class="event-img">
          <h5 class="card-title">${event.headline}</h5>
          <p class="card-date">${event.date}</p>
          <p class="card-text">"${event.thumbnail.description}"</p>
          <a href="https://${event.headline}" class="btn btn-primary btn-sm" target="_blank">Read More</a>
        </div>
      </div>
    </div>
  `;
}

async function loadEvents() {
  try {
    const response = await fetch('/json/news.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    container.innerHTML = '';
    data.forEach(event => {
      container.innerHTML += createCard(event);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    container.innerHTML = '<p class="text-danger">Error loading news. Please try again later.</p>';
  }
}

searchBtn.addEventListener('click', () => {
  container.innerHTML = `
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  `;
  setTimeout(async () => {
    try {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const response = await fetch('/json/news.json');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      if (searchTerm.length > 0) {
        const foundEvents = data.filter(event =>
          event.headline.toLowerCase().includes(searchTerm) ||
          event.thumbnail.description.toLowerCase().includes(searchTerm) ||
          event.excerpt.toLowerCase().includes(searchTerm)
        );
        container.innerHTML = '';
        if (foundEvents.length > 0) {
          foundEvents.forEach(event => {
            container.innerHTML += createCard(event);
          });
        } else {
          container.classList.add('text-danger');
          container.innerHTML = 'Oops! Your search found no matches. Please try again.';
        }
      } else {
        loadEvents();
      }
    } catch (error) {
      console.error('Error fetching or searching news:', error);
      container.innerHTML = '<p class="text-danger">Error searching news. Please try again later.</p>';
    }
  }, 4000);
});

loadEvents();