function searchQuote() {
    const searchInput = document.getElementById("search").value;

    if (searchInput !== "") {

        const apiEndpoint = `https://api.quotable.io/quotes?author=${encodeURIComponent(searchInput)}`;

        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

                const random = Math.floor(Math.random() * data.results.length);
                console.log(data.results[random]);
                const quoteElement = document.getElementById("quote");
                const authorElement = document.getElementById("quoteAuthor");
                quoteElement.innerText = `"${data.results[random].content}"`;
                authorElement.innerText = `- ${data.results[random].author}`;

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        const apiEndpoint = `https://api.quotable.io/quotes/random?limit=1`;
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            }).then(data => {
                console.log(data)

                const quoteElement = document.getElementById("quote");
                const authorElement = document.getElementById("quoteAuthor");
                quoteElement.innerText = `"${data[0].content}"`;
                authorElement.innerText = `- ${data[0].author}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}
