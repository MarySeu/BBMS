// document.getElementById('appointmentForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Capture form data
//     const formData = new FormData(this);

//     // Send the form data to the server using fetch API
//     fetch('submit_appointment.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Appointment booked successfully!');
//             this.reset(); // Reset form fields
//         } else {
//             alert('Error booking appointment. Please try again.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Error booking appointment. Please try again.');
//     });
// });