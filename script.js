
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

if (typeof Swiper !== "undefined") {
    new Swiper('.Panel', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function changeContent(cardId) {
    const textView = document.getElementById(cardId + '-text');
    const photoView = document.getElementById(cardId + '-photo');
    
    if (textView && photoView) {
        textView.classList.toggle('chua-hidden');
        photoView.classList.toggle('chua-hidden');
    }
}

const monthTitle = document.getElementById("month-title");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const calendarGrid = document.querySelector(".calendar-grid");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let currentMonth = 8;
let currentYear = 2026;
let activeFilter = "all";

const events = [
    {
        day: 3,
        month: 8,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Weekly frisbee training focused on throwing, catching, movement drills and small-sided games."
    },
    {
        day: 10,
        month: 8,
        year: 2026,
        title: "Friendly Match",
        type: "friendly-event",
        time: "5:00 PM - 8:00 PM",
        location: "Volleyball Court",
        description: "Friendly match between APU Frisbee Club members, with occasional matches against IMU students."
    },
    {
        day: 17,
        month: 8,
        year: 2026,
        title: "Frisbee Tournament",
        type: "tournament-event",
        time: "9:00 AM - 5:00 PM",
        location: "APU Futsal Court",
        description: "Club tournament featuring several teams competing in a series of matches throughout the day."
    },

    {
        day: 1,
        month: 9,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Regular training session covering basic skills, fitness drills and team practice."
    },
    {
        day: 15,
        month: 9,
        year: 2026,
        title: "Friendly Match",
        type: "friendly-event",
        time: "5:00 PM - 8:00 PM",
        location: "Volleyball Court",
        description: "Friendly match session for members to practise teamwork and match play."
    },
    {
        day: 22,
        month: 9,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Weekly club training with drills, skill practice and short games."
    },

    {
        day: 5,
        month: 10,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Training session focusing on communication, defensive positioning and team movement."
    },
    {
        day: 12,
        month: 10,
        year: 2026,
        title: "Friendly Match",
        type: "friendly-event",
        time: "5:00 PM - 8:00 PM",
        location: "Volleyball Court",
        description: "Friendly match between club members, with selected sessions involving IMU students."
    },
    {
        day: 28,
        month: 10,
        year: 2026,
        title: "Frisbee Tournament",
        type: "tournament-event",
        time: "9:00 AM - 5:00 PM",
        location: "APU Futsal Court",
        description: "Competitive club tournament with scheduled matches and team-based competition."
    }
];

function renderCalendar() {
    const oldDays = document.querySelectorAll(".calendar-day");
    oldDays.forEach(function(day) {
        day.remove();
    });

    monthTitle.textContent =
        months[currentMonth] + " " + currentYear;
    const firstDay =
        new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth =
        new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("calendar-day");
        calendarGrid.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayBox = document.createElement("div");
        dayBox.classList.add("calendar-day");
        const dateNumber = document.createElement("span");
        dateNumber.classList.add("date-number");
        dateNumber.textContent = day;
        dayBox.appendChild(dateNumber);
        const event = events.find(function(item) {

            return item.day === day &&
                   item.month === currentMonth &&
                   item.year === currentYear;
        });

        if (
            event &&
            (activeFilter === "all" || event.type === activeFilter)
        ) {
            const eventBox = document.createElement("div");
            eventBox.classList.add(
                "calendar-event",
                event.type
            );
            eventBox.textContent = event.title;
            eventBox.addEventListener("click", function() {
                document.getElementById("event-title").textContent =
                    event.title;
                document.getElementById("event-date").textContent =
                    day + " " +
                    months[currentMonth] + " " +
                    currentYear;
                document.getElementById("event-time").textContent =
                    event.time;
                document.getElementById("event-location").textContent =
                    event.location;
                const eventDescription =
                document.getElementById("event-description");
                eventDescription.classList.remove(
                    "training-event",
                    "friendly-event",
                    "tournament-event"
                );
                eventDescription.classList.add(event.type);
                eventDescription.textContent =
                   event.description;
            });
            dayBox.appendChild(eventBox);
        }
        calendarGrid.appendChild(dayBox);
    }
}

function renderUpcomingEvents() {
    const upcomingList =
        document.getElementById("upcoming-events-list");

    if (!upcomingList) {
        return;
    }
    upcomingList.innerHTML = "";

    events.slice(0, 5).forEach(function(event) {
        const eventItem =
            document.createElement("div");
        eventItem.classList.add("upcoming-event-item", event.type);

        eventItem.innerHTML =
            "<h3>" + event.title + "</h3>" +
            "<p><strong>Date:</strong> " +
            event.day + " " +
            months[event.month] + " " +
            event.year +
            "</p>" +
            "<p><strong>Time:</strong> " +
            event.time +
            "</p>" +
            "<p><strong>Location:</strong> " +
            event.location +
            "</p>";

        upcomingList.appendChild(eventItem);
    });
}

if (prevButton && nextButton && monthTitle && calendarGrid) {

    prevButton.addEventListener("click", function() {
        if (currentMonth > 8) {
            currentMonth--;
            renderCalendar();
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentMonth < 10) {
            currentMonth++;
            renderCalendar();
        }
    });

    renderCalendar();
}

renderUpcomingEvents();

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        activeFilter = button.dataset.filter;
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        renderCalendar();
    });
});

const allButton = document.querySelector('[data-filter="all"]');

if (allButton) {
    allButton.classList.add("active");
}

const zoomContainer = document.querySelector(".zoomContainer");
const imageZoom = document.querySelector(".imageZoom");
const xButton = document.querySelector(".xButton");
const zoom = document.querySelectorAll(".zoom");

zoom.forEach(function(image) {
    image.addEventListener("click", function() {
        imageZoom.src = image.src;
        imageZoom.alt = image.alt;
        zoomContainer.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

if(xButton){
xButton.addEventListener("click", function() {
    zoomContainer.style.display = "none";
    document.body.style.overflow = "";
});
}

if(zoomContainer){
zoomContainer.addEventListener("click", function(event) {
    if (event.target === modal) {
        zoomContainer.style.display = "none";
        document.body.style.overflow = "";
    }
});
}

const phoneInput = document.getElementById("Phone_Contact");

if (phoneInput) {
    phoneInput.addEventListener("input", function () {
        if (phoneInput.value === "") {
            return;
        }
        let digits = phoneInput.value.replace(/\D/g, "");
        if (digits.startsWith("60")) {
            digits = digits.slice(2);
        }
        if (digits.startsWith("0")) {
            digits = digits.slice(1);
        }
        digits = digits.slice(0, 9);
        let formattedNumber = "+60";
        if (digits.length > 0) {
            formattedNumber += " " + digits.slice(0, 2);
        }
        if (digits.length > 2) {
            formattedNumber += "-" + digits.slice(2, 5);
        }
        if (digits.length > 5) {
            formattedNumber += " " + digits.slice(5, 9);
        }
        phoneInput.value = formattedNumber;
    });
}

const studentIdInput = document.getElementById("Student_ID");

if (studentIdInput) {
    studentIdInput.addEventListener("input", function () {
        if (studentIdInput.value === "") {
            return;
        }
        let digits = studentIdInput.value.replace(/\D/g, "");
        digits = digits.slice(0, 6);
        studentIdInput.value = "TP" + digits;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            button.classList.add("active");

            const target = button.getAttribute("data-target");
            galleryItems.forEach(item => {
                if (target === "all") {
                    item.style.display = "block";
                } else {
                    if (item.classList.contains(target)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
/*放大*/
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");

    galleryItems.forEach(item => {
        const img = item.querySelector("img");
        if (img) {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt;
            });
        }
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});