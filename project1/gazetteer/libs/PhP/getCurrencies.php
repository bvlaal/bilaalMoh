<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

// Initialize a timer to measure the execution time of the script:
$executionStartTime = microtime(true);

// API URL from geoname website, replace 'YOUR_USERNAME' with your actual username
// $countryCode = $_REQUEST['countryCode'];
    
// $api = 'http://api.geonames.org/neighboursJSON?formatted=true&country=' . $_REQUEST['country'] . '&username=alexraju&style=full';
$api = 'https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=c6da400494414c0bae2c1789440f57d8'
// Initialize a CURL session and set options to make the HTTP request
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  // Ignore the SSL certification return a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $api);

// Execute the CURL session and store the result in the $result variable
$result = curl_exec($ch);

// Closing the CURL session
curl_close($ch);

// Decode the JSON response into an associative array
$decode = json_decode($result, true);

// Construct an output array with status information and the GeoNames data:
$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "success";
$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
$output['data'] = $decode;

// Set the response header to indicate that the response is in JSON format
header('Content-Type: application/json; charset=UTF-8');

// Finally, encode the output array as JSON and echo it as the script's response
echo json_encode($output);
?>

