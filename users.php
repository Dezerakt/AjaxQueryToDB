<?php

$link = mysqli_connect('localhost', 'root','','usersdb');

if(mysqli_connect_errno()){
    echo 'Ошибка подключения к базе данных';
}

function get_users($link){
    $sql = 'SELECT u.user_name, u.login, r.role_name FROM users u JOIN roles r ON u.Id = r.user_Id';

    $result = mysqli_query($link, $sql);

    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);

  return $users;
}
$users = get_users($link);

echo json_encode($users);

// $sql = "SELECT * FROM users";

// $result = $this->connect()->query($sql);
// $numRows = $result->num_rows;
// if($numRows>0){
//   while($row = $result->fetch_assoc()){
//     $data[] = $row;
//   }
//   echo json_encode($data);
// }