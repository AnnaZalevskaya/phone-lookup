<?php
$jsonData = file_get_contents('https://cdn.jsdelivr.net/gh/andr-04/inputmask-multi@master/data/phone-codes.json');
$phoneCodes = json_decode($jsonData, true);

function getCountryByPhoneNumber($phoneNumber, $phoneCodes) {
    foreach ($phoneCodes as $codeData) {
        $codeMask = $codeData['mask'];

        if (preg_match('/^' . str_replace('#', 'd', preg_quote($codeMask, '/')) . '/', $phoneNumber)) {
            $countryCode = $codeData['cc'];
            $country = $codeData['name_en'];

            return $country . ' (' . $countryCode . ')';
        }
    }

    return 'is unknown';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $phoneNumber = $_POST['phone'];

    if (!empty($phoneNumber)) {
        $country = getCountryByPhoneNumber($phoneNumber, $phoneCodes);
        echo "Phone number $phoneNumber refers to the country: $country";
    } else {
        echo "Enter the phone number";
    }
}
?>