<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$filePath = 'libs/JavaScript/countryBorders.geo.json';

if (!file_exists($filePath) || !is_readable($filePath)) {
    echo json_encode(["status" => ["code" => 500, "message" => "GeoJSON file not found or unreadable"]]);
    exit;
}

// Read and print the raw file content (for debugging)
$geojson = file_get_contents($filePath);
if (!$geojson) {
    echo json_encode(["status" => ["code" => 500, "message" => "Failed to read the file"]]);
    exit;
}

// Print raw JSON to check its validity
echo "Raw JSON Data: ";
echo $geojson;
exit;

// Decode the JSON
$data = json_decode($geojson, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(["status" => ["code" => 500, "message" => "JSON Decoding Error: " . json_last_error_msg()]]);
    exit;
}

$countries = [];
foreach ($data['features'] as $feature) {
    if (isset($feature['properties']['iso_a2'], $feature['properties']['name'])) {
        $countries[] = [
            'code' => $feature['properties']['iso_a2'],
            'name' => $feature['properties']['name']
        ];
    }
}

echo json_encode([
    "status" => ["code" => 200, "message" => "Success"],
    "data" => $countries
]);
?>
