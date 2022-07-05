<?php
	$type = $_POST['type'];
	$amount = $_POST['amount'];
	$price = $_POST['price'];
	$phoneNumber = $_POST['phoneNumber'];

	$conn = new mysqli('localhost', 'root', '', 'test xbarat');
	if ($conn->connect_error) {
		die('Connection Failed : '.$conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into users(type, amount, price, phoneNumber)
			values(?, ?, ?, ?)");
		$stmt->bind_param("siiii", $type, $amount, $price, $phoneNumber);
		$stmt->execute();
		echo "Request submited...";
		$stmt->close();
		$conn->close();
	}
?>