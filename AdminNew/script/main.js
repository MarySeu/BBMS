let currentViewIndex = 0;
const viewLimit = 5;

// Sample donor data for demonstration purposes
const donorData = [
    { name: 'John Doe', mobile: '1234567890', email: 'john@example.com', gender: 'female', bloodGroup: 'A+', city: 'osun' },
    { name: 'Jane Smith', mobile: '0987654321', email: 'jane@example.com', gender: 'male', bloodGroup: 'B-', city: 'osun' },
    { name: 'Alice Johnson', mobile: '5555555555', email: 'alice@example.com', gender: 'female', bloodGroup: 'O+', city: 'osun' },
    { name: 'Bob Brown', mobile: '4444444444', email: 'bob@example.com', gender: 'female', bloodGroup: 'AB+', city: 'osun' },
    { name: 'Charlie Black', mobile: '3333333333', email: 'charlie@example.com', gender: 'male', bloodGroup: 'A-', city: 'osun' },
    { name: 'Diana White', mobile: '2222222222', email: 'diana@example.com', gender: 'female', bloodGroup: 'O-', city: 'osun' },
    { name: 'Eve Green', mobile: '1111111111', email: 'eve@example.com', gender: 'female', bloodGroup: 'B+', city: 'osun' },
    // Add more donor data here as needed
];

function loadDonors() {
    const donorTable = document.getElementById('donorTable');
    donorTable.innerHTML = '';

    for (let i = currentViewIndex; i < currentViewIndex + viewLimit && i < donorData.length; i++) {
        const donor = donorData[i];
        const row = `<tr>
            <td>${i + 1}</td>
            <td>${donor.name}</td>
            <td>${donor.mobile}</td>
            <td>${donor.email}</td>
            <td>${donor.gender}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.city}</td>
            <td>
                <button class="btn btn-info btn-sm">View More</button>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>`;
        donorTable.innerHTML += row;
    }

    // Disable or enable buttons based on current view index
    document.getElementById('prevButton').disabled = currentViewIndex === 0;
    document.getElementById('nextButton').disabled = currentViewIndex + viewLimit >= donorData.length;
}

document.getElementById('prevButton').addEventListener('click', function() {
    if (currentViewIndex - viewLimit >= 0) {
        currentViewIndex -= viewLimit;
        loadDonors();
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentViewIndex + viewLimit < donorData.length) {
        currentViewIndex += viewLimit;
        loadDonors();
    }
});

// Initial load of donor data
loadDonors();


function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

document.getElementById('sendNotificationButton').addEventListener('click', function() {
    const heading = document.getElementById('heading').value;
    const bloodGroup = document.getElementById('bloodGroupRequired').value;
    const message = document.getElementById('message').value;

    if (heading && bloodGroup && message) {
        document.getElementById('previewHeading').textContent = heading;
        document.getElementById('previewBloodGroup').textContent = bloodGroup;
        document.getElementById('previewMessage').textContent = message;
        
        document.getElementById('notificationForm').style.display = 'none';
        document.getElementById('notificationPreview').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('editNotification').addEventListener('click', function() {
    document.getElementById('notificationForm').style.display = 'block';
    document.getElementById('notificationPreview').style.display = 'none';
});

document.getElementById('confirmNotification').addEventListener('click', function() {
    alert('Notification sent successfully!');
    // Implement actual send logic here
    document.getElementById('notificationForm').reset();
    document.getElementById('notificationForm').style.display = 'block';
    document.getElementById('notificationPreview').style.display = 'none';
    showSection('dashboard'); // Go back to dashboard after sending
});