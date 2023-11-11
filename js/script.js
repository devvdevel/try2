document.addEventListener("DOMContentLoaded", function () {
}); 

//newsletter
var subscribeForm = document.getElementById("subscribeForm");
    var confirmationModal = document.getElementById("confirmationModal");
    var confirmationText = document.getElementById("confirmationText");
    var confirmButton = document.getElementById("confirmButton");
    var cancelButton = document.getElementById("cancelButton");

    // Event listener for the subscribe form
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the email input value
        var email = document.getElementById("emailInput").value;

        // Validate the email address (you can enhance this validation)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show custom confirmation modal
        confirmationText.innerText = "Are you sure you want to subscribe with the email: " + email + "?";
        confirmationModal.style.display = "block";

        // Handle confirm button click
        confirmButton.onclick = function () {
            // Simulate sending the subscription request (replace this with your actual subscription logic)
            setTimeout(function () {
                subscribeForm.reset(); // Clear the form
                document.getElementById("confirmationMessage").innerText = "Subscription successful!";
                confirmationModal.style.display = "none"; // Close the modal
            }, 1000); // Simulating a delay, replace with actual async operation time
        };

        // Handle cancel button click
        cancelButton.onclick = function () {
            confirmationModal.style.display = "none"; // Close the modal
        };
        //newsletter
    
    });


