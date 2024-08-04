<?php
// Database configuration
$host = 'localhost';
$dbName = 'blood_bank'; // Your database name
$user = 'root'; // Your MySQL username
$password = ''; // Your MySQL password

// Create a connection to the database
$conn = new mysqli($host, $user, $password, $dbName);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $blood_group = $_POST['blood_group'];
    $city = $_POST['city'];
    $state = $_POST['state'];

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO donors (name, phone, email, gender, blood_group, city, state) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $name, $phone, $email, $gender, $blood_group, $city, $state);

    // Execute the statement
    if ($stmt->execute()) {
        echo "New donor added successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
