<?php
$data = array("Adam" => "Abc,123", "Bob" => "Bac#213", "Charlie" => "Cba?321");

if (isset($_POST['username']) && $_POST['username'] && isset($_POST['password']) && $_POST['password']) {
    // do user authentication as per your requirements
    if (array_key_exists($_POST['username'], $data)) {
        if ($data[$_POST['username']] == $_POST['password']) {
            echo json_encode(array('success' => 1));
        } else {
            echo json_encode(array('success' => 0));
        }
    } else {
        echo json_encode(array('success' => 0));
    }
    // based on successful authentication
} else {
    echo json_encode(array('success' => 0));
}
?>
