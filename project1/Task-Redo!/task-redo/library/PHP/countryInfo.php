<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $countryCode = $_POST['countryCode'];
    $username = "bvlaal"; 

    $url = "http://api.geonames.org/countryInfoJSON?country=$countryCode&username=$username";

    $response = file_get_contents($url);
    echo $response ? $response : json_encode(["error" => "No data found"]);
}
?>
