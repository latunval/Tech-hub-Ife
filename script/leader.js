
    // Function to get initials from a name
    function getInitials(name) {
      const nameParts = name.split(' ');
      if (nameParts.length === 1) {
        return nameParts[0].charAt(0).toUpperCase();
      }
      const firstName = nameParts[0];
      const lastName = nameParts[nameParts.length - 1];
      return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    }

    console.log(getInitials('saliu ridwan'));
    

    // Async function to fetch and populate leader data
    async function loadLeaders() {
      try {
        const response = await fetch('/json/leaders.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        const container = document.getElementById('leader-container');
        data.forEach(leader => {
          const initials = getInitials(leader.name);
          const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=2c3e50&color=fff&size=60`;
          const card = `
            <div class="col">
              <div class="card leader-card">
                <div class="card-body">
                  <img src="${leader.img ? leader.img :   avatarUrl}" alt="${initials} Avatar" class="avatar-img">
                  <h5 class="card-title">${leader.name}</h5>
                  <p class="card-text">"${leader.quote}"</p>
                </div>
              </div>
            </div>
          `;
          container.innerHTML += card;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the async function
    loadLeaders();