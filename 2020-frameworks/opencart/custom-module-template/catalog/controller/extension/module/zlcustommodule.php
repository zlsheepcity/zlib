<?php
/**
  * Reports from route=checkout/checkout «Shop cart»
  */

class ControllerExtensionModuleZlcustommodule extends Controller {
    private $devmode = true;
    private $apiDemoUrl = 'https://api.omnisend.com/v3';
    private $apiDemoKey = '64ae84b8091c7843509cfec3-zVl2WLQUqlyNRgq7fb5sj3xD1zs4aweXF53KB5LG0AZjIPrTsg';

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> actions

    public function eventReactionOperator(&$route, &$data, &$template = '') {
        $this->operatorSendMessage();
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> logic

    public function operatorSendMessage() {
        $response = $this->requestReplaceCart(
            '/carts/PostmanTestCheckout1002',
            [
                'currency' => 'EUR',
                'intTotal' =>  100
            ]
        );
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> requests

    public function requestReplaceCart(
        $endpoint = '/',
        $body = []
    ) {
        // PUT BY CURL
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => "" . $this->apiDemoUrl . $endpoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => "PUT",
            CURLOPT_POSTFIELDS     => json_encode($body),
            CURLOPT_HTTPHEADER     => [
                "X-API-KEY: " . $this->apiDemoKey,
                "accept:        application/json",
                "content-type:  application/json"
            ],
        ]);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }


}
