<?php
$email = filter_input(INPUT_POST, 'useremail');
$name = filter_input(INPUT_POST, 'username');
$message = filter_input(INPUT_POST, 'usermessage');
if (!empty($email)){
if (!empty($name)){
if (!empty($message)){
$host = "sql207.epizy.com";
$dbusername = "epiz_28881624";
$dbpassword = "JpXDLLpOhP5cjr";
$dbname = "epiz_28881624_test1";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);


if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO contact (email,name,message)
values ('$email','$name','$message')";
if ($conn->query($sql)){
// echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Password should not be empty";
die();
}
}
}
else{
echo "Username should not be empty";
die();
}
?>