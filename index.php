<?php 

if($password == $password && $email == $email)  
{
$_SESSION["userid1"] = $id1;
header("Location: admin.html"); // redirects
}

?>