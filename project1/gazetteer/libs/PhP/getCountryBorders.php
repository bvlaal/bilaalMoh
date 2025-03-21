
<?php
$codes_json = file_get_contents("libs/JavaScript/countryBorders.geo.json");
$decoded = json_decode($codes_json);
$features = $decoded->features;
$geojson = ['type' => 'FeatureCollection', 'features' => []];

foreach ($features as $feature) {
    $geojson['features'][] = $feature; // Add the entire feature to the output
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($geojson);
?>


