 async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const container = document.getElementById('data');
    container.innerHTML = '';

    data.slice(0, 5).forEach(item => { // only show 5 items for simplicity
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="title">
          ${item.title}
          <span class="arrow">▼</span>
        </div>
        <div class="details">
          <p><b>ID:</b> ${item.id}</p>
          <p>${item.body}</p>
        </div>
      `;

      // toggle visibility when clicking the arrow
      const arrow = card.querySelector('.arrow');
      const details = card.querySelector('.details');
      arrow.addEventListener('click', () => {
        if (details.style.display === 'none' || details.style.display === '') {
          details.style.display = 'block';
          arrow.textContent = '▲';
        } else {
          details.style.display = 'none';
          arrow.textContent = '▼';
        }
      });

      container.appendChild(card);
    });
  }

  fetchData();