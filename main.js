// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Code to run when the DOM is ready

    // Example: Fetch data from the backend
    fetchData();

    // Example: Attach event listener to the form for adding new pushups
    const addPushupsForm = document.getElementById('addPushupsForm');
    addPushupsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(addPushupsForm);
        
        // Example: Send data to the backend
        addPushups(formData);
    });
});

function fetchData() {
    // Example: Fetch data from the backend
    fetch('/api/pushups')  // Adjust the URL based on your Flask routes
        .then(response => response.json())
        .then(data => {
            // Handle the fetched data
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function addPushups(formData) {
    // Example: Send data to the backend to add new pushups
    fetch('/add', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log('Added pushups:', data);
        })
        .catch(error => {
            console.error('Error adding pushups:', error);
        });
}
