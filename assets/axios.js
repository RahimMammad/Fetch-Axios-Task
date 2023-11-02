const API = "https://api.tvmaze.com/shows";


const axiosFunction = async () => {
    try {
        const response = await axios.get(API);
        const data = response.data;
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

axiosFunction();


