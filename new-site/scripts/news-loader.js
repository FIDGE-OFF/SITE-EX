const CORS_PROXY = "https://api.allorigins.win/raw?url=";
const RSS_URL = "https://www.ukrinform.net/rss";

async function loadNews() {
    try {
        const response = await fetch(`${CORS_PROXY}${encodeURIComponent(RSS_URL)}`);
        if (!response.ok) throw new Error("Не вдалося завантажити новини");
        
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        
        const items = xmlDoc.querySelectorAll("item");
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "";
        
        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const date = new Date(item.querySelector("pubDate").textContent).toLocaleDateString("uk-UA");
            
            const newsItem = document.createElement("div");
            newsItem.className = "news-item";
            newsItem.innerHTML = `
                <h3><a href="${link}" target="_blank">${title}</a></h3>
                <p class="news-date">${date}</p>
            `;
            newsContainer.appendChild(newsItem);
        });
        
    } catch (error) {
        document.getElementById("news-container").innerHTML = `
            <div class="error">Помилка: ${error.message}</div>
        `;
    }
}

// Ініціалізація при завантаженні
document.addEventListener("DOMContentLoaded", () => {
    loadNews();
    
    document.getElementById("refresh-btn").addEventListener("click", loadNews);
    
    document.getElementById("search-btn").addEventListener("click", () => {
        const searchTerm = document.getElementById("search-input").value.toLowerCase();
        const newsItems = document.querySelectorAll(".news-item");
        
        newsItems.forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            item.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });
});