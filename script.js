function scrollCoreValues(direction) {
    const container = document.getElementById("core_values");

    container.scrollBy({
        left: direction * 500,
        behavior: "smooth"
    });
}