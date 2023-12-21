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

function displayPushupsTable(pushups) {
    const tableBody = document.getElementById('pushupsTableBody');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Append new rows for each pushup record
    pushups.forEach(pushup => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pushup.id}</td>
            <td>${pushup.userid}</td>
            <td>${pushup.date}</td>
            <td>${pushup.amount}</td>
            <td>
                <a href="#" class="btn btn-sm btn-primary">Edit</a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function fetchData() {
    // Example: Fetch data from the backend
    fetch('https://barnabs.pythonanywhere.com/api/pushups')  // Adjust the URL based on your Flask routes
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
    fetch('https://barnabs.pythonanywhere.com/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('Almafa123')
        },
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

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
