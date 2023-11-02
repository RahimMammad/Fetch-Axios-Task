const API = "https://api.tvmaze.com/shows";


const fetchFunction = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        const mainCardContainer = document.querySelector(".header-main-container");

        let cardsHTML = "";

        data.forEach((card) => {
            cardsHTML += `
                <div class="main-card">
                    <img src="${card.image.medium}">
                    <h3>${card.name}</h3>
                    <span>${card.rating.average}</span>
                    <h4>${card.language}</h4>
                </div>
            `;
        });

        mainCardContainer.innerHTML = cardsHTML;
    } catch (error) {
        console.log("Error:", error);
    }
};

fetchFunction();