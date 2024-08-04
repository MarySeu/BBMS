document.addEventListener('DOMContentLoaded', function() {
    // Array of cities/popular locations in Osun State
    const cities = [
        "Osogbo", "Ilesa", "Ile-Ife", "Ikirun", "Ede", "Iwo", 
        "Ejigbo", "Ipetumodu", "Iragbiji", "Gbongan", "Modakeke",
        "Okuku", "Ikire", "Oke Ila Orangun", "Ila Orangun"
    ];

    // Get the select element for cities
    const citySelect = document.getElementById('city');

    // Populate the city select element with options
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
});



document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const bloodGroup = document.getElementById('blood_group').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    const details = `
        <strong>Name:</strong> ${name}<br>
        <strong>Phone Number:</strong> ${phone}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Blood Group:</strong> ${bloodGroup}<br>
        <strong>City:</strong> ${city}<br>
        <strong>State:</strong> ${state}<br>
    `;

    document.getElementById('details').innerHTML = details;
    document.getElementById('editButton').style.display = 'block';
});

document.getElementById('editButton').addEventListener('click', function() {
    const detailsContainer = document.getElementById('details');
    const name = detailsContainer.querySelector('strong:nth-child(1)').nextSibling.nodeValue.trim();
    const phone = detailsContainer.querySelector('strong:nth-child(3)').nextSibling.nodeValue.trim();
    const email = detailsContainer.querySelector('strong:nth-child(5)').nextSibling.nodeValue.trim();
    const gender = detailsContainer.querySelector('strong:nth-child(7)').nextSibling.nodeValue.trim();
    const bloodGroup = detailsContainer.querySelector('strong:nth-child(9)').nextSibling.nodeValue.trim();
    const city = detailsContainer.querySelector('strong:nth-child(11)').nextSibling.nodeValue.trim();
    const state = detailsContainer.querySelector('strong:nth-child(13)').nextSibling.nodeValue.trim();

    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    document.getElementById('email').value = email;
    document.getElementById('gender').value = gender;
    document.getElementById('blood_group').value = bloodGroup;
    document.getElementById('city').value = city;
    document.getElementById('state').value = state;
});