// let store = [] ;
async function youth() {
    try {
        const response = await fetch('/json/youth.json')
        const deliver =  await response.json();
        // store = deliver
// console.log(store[0]);

const youthcard = document.querySelector('.yCard');
   deliver.forEach(youth => {
    
   
// console.log(element.name);
   youthcard.innerHTML += `
     <div class="col">
          <div class="card h-100  shadow">
            <img
              src="${youth.image}"
              class="card-img-top imgs"
              alt="${youth.name}"
            />
            <div class="card-body">
              <h5 class="card-title">${youth.name}</h5>
              <p class="card-text">
               ${youth.description}
              </p>
            </div>
          </div>
        </div>
   `;
});
    

    } catch (error) {
        console.log('error is:', error);
        
    }
}


youth()