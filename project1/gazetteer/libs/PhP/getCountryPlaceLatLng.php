<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

// Initialize a timer to measure the execution time of the script
$executionStartTime = microtime(true);

// Check if 'country' parameter is set in the request
$country = isset($_REQUEST['country']) ? $_REQUEST['country'] : '';

// Ensure we have a country code to proceed
if (empty($country)) {
    $output = [
        'status' => [
            'code' => "400",
            'name' => "bad request",
            'description' => "Missing country parameter",
            'returnedIn' => intval((microtime(true) - $executionStartTime) * 1000) . " ms"
        ]
    ];
    echo json_encode($output);
    exit;
}

// API URL from GeoNames API
$api = 'http://api.geonames.org/searchJSON?q=' . urlencode($country) . '&maxRows=10&username=bvlaal';

// Initialize a CURL session and set options to make the HTTP request
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  // Ignore the SSL certificate return a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $api);

// Execute the CURL session and store the result in the $result variable
$result = curl_exec($ch);

// Check if the request was successful
if (curl_errno($ch)) {
    $output = [
        'status' => [
            'code' => "500",
            'name' => "internal server error",
            'description' => curl_error($ch),
            'returnedIn' => intval((microtime(true) - $executionStartTime) * 1000) . " ms"
        ]
    ];
    curl_close($ch);
    echo json_encode($output);
    exit;
}

// Closing the CURL session
curl_close($ch);

// Decode the JSON response into an associative array
$decode = json_decode($result, true);

// Check if we received a valid response from the GeoNames API
if ($decode && isset($decode['geonames'])) {
    // Construct an output array with status information and the GeoNames data
    $output = [
        'status' => [
            'code' => "200",
            'name' => "ok",
            'description' => "success",
            'returnedIn' => intval((microtime(true) - $executionStartTime) * 1000) . " ms"
        ],
        'data' => $decode['geonames']
    ];
} else {
    // Handle case where the API response is invalid or empty
    $output = [
        'status' => [
            'code' => "404",
            'name' => "not found",
            'description' => "No data found for the given country",
            'returnedIn' => intval((microtime(true) - $executionStartTime) * 1000) . " ms"
        ]
    ];
}

// Set the response header to indicate that the response is in JSON format
header('Content-Type: application/json; charset=UTF-8');

// Finally, encode the output array as JSON and echo it as the script's response
echo json_encode($output);
?>
