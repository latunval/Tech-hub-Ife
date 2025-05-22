const container = document.getElementById('event-container');
// Async function to fetch and populate event data
async function loadEvents() {
  try {
    const response = await fetch('/json/events.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
   data.splice(6, data.length -1);
    data.forEach(event => {

      const card = `
            <div class="col">
              <div class="card event-card">
                <div class="card-body">
                  <img src="${event.images[0].url}" alt="${event.title} Image" class="event-img">
                  <h5 class="card-title">${event.title}</h5>
                  <p class="card-date">${event.date}</p>
                  <p class="card-text">"${event.images[0].description}"</p>
                </div>
              </div>
            </div>
          `;
      container.innerHTML += card;
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
loadEvents();



const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  container.innerHTML = `
  <div class="d-flex justify-content-center w-100">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  `;
  setTimeout(
    async () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm.length > 0) {
    try {
      const response = await fetch('/json/events.json');
      const data = await response.json();
      const foundEvents = data.filter(event =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.images[0].description.toLowerCase().includes(searchTerm)
      );
      console.log(foundEvents);
      if (foundEvents.length > 0) {
        container.innerHTML = '';
        foundEvents.forEach(event => {

          const card = `
            <div class="col">
              <div class="card event-card">
                <div class="card-body">
                  <img src="${event.images[0].url}" alt="${event.title} Image" class="event-img">
                  <h5 class="card-title">${event.title}</h5>
                  <p class="card-date">${event.date}</p>
                  <p class="card-text">"${event.images[0].description}"</p>
                </div>
              </div>
            </div>
          `;
          container.innerHTML += card;
          searchInput.value = '';
        })
      } else{
        container.classList.add('text-danger')
        container.innerHTML = 'opps! your search found no match please try again '
      }

    } catch (error) {
      console.error('Error fetching or searching events:', error);
    }
  }
}, 4000);
  });





