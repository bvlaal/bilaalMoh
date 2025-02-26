function fetchNeighbourhood() {
    let lat = document.getElementById("neighLat").value;
    let lng = document.getElementById("neighLng").value;

    $.ajax({
        url: "library/PHP/neighbourhood.php",
        type: "POST",
        data: { lat: lat, lng: lng },
        dataType: "json",
        success: function(response) {
            document.getElementById("response").innerText = JSON.stringify(response, null, 2);
        },
        error: function(xhr, status, error) {
            document.getElementById("response").innerText = "Error: " + error;
        }
    });
}

function fetchCountryInfo() {
    let countryCode = document.getElementById("countryCode").value;

    $.ajax({
        url: "library/PHP/countryInfo.php",
        type: "POST",
        data: { countryCode: countryCode },
        dataType: "json",
        success: function(response) {
            document.getElementById("response").innerText = JSON.stringify(response, null, 2);
        },
        error: function(xhr, status, error) {
            document.getElementById("response").innerText = "Error: " + error;
        }
    });
}

function fetchTimezone() {
    let lat = document.getElementById("tzLat").value;
    let lng = document.getElementById("tzLng").value;

    $.ajax({
        url: "library/PHP/timezone.php",
        type: "POST",
        data: { lat: lat, lng: lng },
        dataType: "json",
        success: function(response) {
            document.getElementById("response").innerText = JSON.stringify(response, null, 2);
        },
        error: function(xhr, status, error) {
            document.getElementById("response").innerText = "Error: " + error;
        }
    });
}
