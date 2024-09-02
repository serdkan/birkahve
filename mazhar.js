fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('card-container');

    
    for (let i = 0; i < 50; i++) {
        const item = data[i];
        const card = document.createElement('div');
        card.className = 'col-md-4';

        card.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">ID: ${item.id}</h5>
                    <p class="card-text">${item.title}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
})
.catch(error => console.error('Error fetching data:', error));