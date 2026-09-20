function scrollCoreValues(direction) {
    const container = document.getElementById("core_values");

    container.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you for your enquiry!");
    window.location.href="Submit-Enquiry.html";
}

function searchNews() {
    let searchText = document.getElementById("searchBar").value.trim();
    let newsCards = document.querySelectorAll(".news-card");
    let searchResult = document.getElementById("searchResult");
    let foundResults = false;

    newsCards.forEach(function(card) {
        let content = card.textContent.toLowerCase();

        if (content.includes(searchText.toLowerCase())) {
            card.style.display = "";
            foundResults = true;
        } else {
            card.style.display = "none";
        }
    });

    if (searchText !== "") {
        if (foundResults) {
            searchResult.textContent = 'Showing results for "' + searchText + '":';
        } else {
            searchResult.textContent = 'No search results found for "' + searchText + '":';
        }
    } else {
        searchResult.textContent = "";
    }
}

new Swiper('.Panel', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});