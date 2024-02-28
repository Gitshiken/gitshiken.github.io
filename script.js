document.addEventListener("DOMContentLoaded", function() {
    var eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(function(card) {
        var eventTitle = card.querySelector(".event-title").textContent;
        var eventDateText = card.querySelector(".event-date").textContent;

        // Convert event date text to a Date object, assuming the date is in "DD MMMM YYYY" format
        var eventDate = parseDate(eventDateText);

        // Convert event date to UTC to ensure consistent comparison
        var eventDateUTC = new Date(Date.UTC(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()));

        // Get current date in UTC
        var currentDateUTC = new Date();

        if (eventDateUTC < currentDateUTC) {
            // Move the card to past events
            document.getElementById("past-events-container").appendChild(card);
        } else {
            // Leave the card in upcoming events
            document.getElementById("upcoming-events-container").appendChild(card);
        }
    });

    function parseDate(dateString) {
        // Parse the date string assuming it's in "DD MMMM YYYY" format
        var parts = dateString.split(' ');
        var day = parseInt(parts[0], 10);
        var month = parseMonth(parts[1]);
        var year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }

    function parseMonth(monthString) {
        // Convert month string to month index
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.indexOf(monthString);
    }
});
