<?php
$host = 'localhost';
$dbName = 'blood_bank';
$user = 'root';
$password = ''; 

// Create a connection to the database
$conn = new mysqli($host, $user, $password, $dbName);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted form data
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $preferred_date = $_POST['preferred_date'];
    $preferred_time = $_POST['preferred_time'];

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO appointments (full_name, email, phone_number, preferred_date, preferred_time) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $full_name, $email, $phone_number, $preferred_date, $preferred_time);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Appointment scheduled successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
