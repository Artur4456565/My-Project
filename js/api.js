const url = 'https://allscores.p.rapidapi.com/api/allscores/news?sport=1&timezone=America%2FChicago&langId=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4fc19c6ac4msh0fa36bccb37b77ep12247ejsn6a448af78a81',
		'x-rapidapi-host': 'allscores.p.rapidapi.com'
	}
};
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayData(result);
         console.log(result);
    } catch (error) {
        console.error(error);
    }
}



function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Очистить контейнер перед добавлением новых данных

    if (data && data.news && Array.isArray(data.news)) {
        data.news.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'one-third animate-box';
            listItem.setAttribute('data-animate-effect', 'fadeIn');
            listItem.style.backgroundImage = `url(${item.images})`; // Используем URL изображения из данных или default

            listItem.innerHTML = `
                <a href="${item.url}">
                    <div class="case-studies-summary">
                        <span>${item.summary}</span>
                        <h2>${item.title}</h2>
                    </div>
                </a>
            `;

            container.appendChild(listItem);
        });
    } else {
        container.innerHTML = '<p>No news found.</p>';
    }
}
document.addEventListener('DOMContentLoaded', fetchData);
