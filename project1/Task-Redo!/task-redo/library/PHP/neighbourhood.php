<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lat = $_POST['lat'];
    $lng = $_POST['lng'];
    $username = "bvlaal"; 

    $url = "http://api.geonames.org/neighbourhoodJSON?lat=$lat&lng=$lng&username=$username";
    
    $response = file_get_contents($url);
    echo $response ? $response : json_encode(["error" => "No data found"]);
}
?>
