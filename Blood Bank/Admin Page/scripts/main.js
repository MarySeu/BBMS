document.addEventListener('DOMContentLoaded', function() {
    const appointmentDetails = JSON.parse(localStorage.getItem('appointmentDetails'));
    if (appointmentDetails) {
        const detailsDiv = document.getElementById('appointmentDetails');
        detailsDiv.innerHTML = `
            <p><strong>Donor Name:</strong> ${appointmentDetails.donorName}</p>
            <p><strong>Email:</strong> ${appointmentDetails.donorEmail}</p>
            <p><strong>Phone No:</strong> ${appointmentDetails.phoneNo}</p>
            <p><strong>Appointment Date:</strong> ${appointmentDetails.appointmentDate}</p>
            <p><strong>Appointment Time:</strong> ${appointmentDetails.appointmentTime}</p>
        `;
    } else {
        document.getElementById('appointmentDetails').innerHTML = '<p>No appointment details found.</p>';
    }
});