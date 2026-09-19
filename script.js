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
    let searchText = document.getElementById("searchBar").value.toLowerCase();
    let newsCards = document.querySelectorAll(".news-card");
    let searchResult = document.getElementById("searchResult");

    if (searchText.trim() !== "") {
        searchResult.textContent = 'Showing search results for "' + searchText + '":';
    } else {
        searchResult.textContent = "";
    }

    newsCards.forEach(function(card) {
        let content = card.textContent.toLowerCase();

        if (content.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
            searchResult.textContent = 'No search results found for "' + searchText + '"';
        }
    });
}