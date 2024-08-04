<?php
session_start();
include('connection.php'); // include your database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password for security
    $hashed_password = hash('sha256', $password);

    // Check if the user exists in the database
    $stmt = $conn->prepare("SELECT id, email FROM login WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $hashed_password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Login successful
        $_SESSION['email'] = $email;
        echo '<script>
                alert("Login successful!");
                window.location.href = "index.html"; // redirect to dashboard or homepage
              </script>';
    } else {
        // Login failed
        echo '<script>
                alert("Login failed! Invalid email or password.");
                window.location.href = "../phplogin/index.html"; // redirect back to login page
              </script>';
    }
    $stmt->close();
    $conn->close();
}
?>
