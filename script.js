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
        location: "APU Volleyball Court",
        description: "Casual friendly match for members to practise teamwork, positioning and match play."
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
        day: 8,
        month: 9,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Volleyball Court",
        description: "Training session focused on passing accuracy, catching under pressure and movement into space."
    },
    {
        day: 15,
        month: 9,
        year: 2026,
        title: "Friendly Match",
        type: "friendly-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Friendly match between APU Frisbee Club members, with occasional matches against IMU students."
    },
    {
        day: 22,
        month: 9,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Volleyball Court",
        description: "Weekly club training with warm-up drills, skill practice and short games."
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
        location: "APU Volleyball Court",
        description: "Friendly match between APU Frisbee Club members, with occasional matches against IMU students."
    },
    {
        day: 19,
        month: 10,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Regular training session with throwing drills, catching practice and team scrimmages."
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
    },

    {
        day: 3,
        month: 11,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Volleyball Court",
        description: "Weekly training session focused on core frisbee skills and match preparation."
    },
    {
        day: 10,
        month: 11,
        year: 2026,
        title: "Frisbee Training",
        type: "training-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Futsal Court",
        description: "Regular practice session with drills followed by short competitive games."
    },
    {
        day: 17,
        month: 11,
        year: 2026,
        title: "Friendly Match",
        type: "friendly-event",
        time: "5:00 PM - 8:00 PM",
        location: "APU Volleyball Court",
        description: "Friendly match between APU Frisbee Club members, with occasional matches against IMU students."
    },
    {
        day: 20,
        month: 11,
        year: 2026,
        title: "Year-End Tournament",
        type: "tournament-event",
        time: "9:00 AM - 5:00 PM",
        location: "APU Futsal Court",
        description: "Year-end club tournament bringing members together for a full day of team matches."
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

        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }

        renderCalendar();
    });

    nextButton.addEventListener("click", function() {

        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }

        renderCalendar();
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