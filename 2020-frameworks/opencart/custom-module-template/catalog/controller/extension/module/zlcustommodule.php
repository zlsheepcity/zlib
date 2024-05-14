<?php
/**
  * Reports from route=checkout/checkout «Shop cart»
  */

class ControllerExtensionModuleZlcustommodule extends Controller {
    private $devmode = true;

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> actions

    public function eventReactionOperator(&$route, &$data, &$template = '') {
        $this->operatorSendMessage();
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> logic

    public function operatorSendMessage() {

    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> requests

    public function requestReplace(
        $path = '/',
        $body = [],
    ) {
        $endpointApiUrlCheckout = 'https://api.omnisend.com/v3/carts/';
        $endpointApiKey = '64ae84b8091c7843509cfec3-zVl2WLQUqlyNRgq7fb5sj3xD1zs4aweXF53KB5LG0AZjIPrTsg';
        $endpointTargetID = 'PostmanTestCheckout1002';
        $body = [
            'currency' => $data['currency'],
            'cartSum'  => $data['cartSum'],
            'products' => $data['products']
        ];
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => $endpointApiUrlCheckout . $endpointTargetID,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "PUT",
            CURLOPT_POSTFIELDS => json_encode($body),
            CURLOPT_HTTPHEADER => [
                "X-API-KEY: " . $endpointApiKey,
                "accept: application/json",
                "content-type: application/json"
            ],
        ]);
        $response = curl_exec($curl);
        curl_close($curl);
    }


}
