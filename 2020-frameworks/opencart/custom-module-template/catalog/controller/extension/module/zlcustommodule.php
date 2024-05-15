<?php
/**
  * 2024.5.15
  * Here are reports from «Shopping cart»
  * route=checkout/checkout
  */
class ControllerExtensionModuleZlcustommodule extends Controller {
    private $moduleNamePlain = 'zlcustommodule';
    private $moduleNameCamel = 'Zlcustommodule';
    private $devmode = true;
    private $error = array();
    private $apiDemoUrl = 'https://api.omnisend.com/v3';
    private $apiDemoKey = '64ae84b8091c7843509cfec3-zVl2WLQUqlyNRgq7fb5sj3xD1zs4aweXF53KB5LG0AZjIPrTsg';

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> actions

    public function eventReactionOperator(&$route, &$data, &$template = '') {
        $this->operatorSendMessage();
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> logic

    public function operatorSendMessage() {
        $checkoutID    = $this->getCheckoutID();
        $checkoutInfo  = $this->getCheckoutInfo($checkoutID);
        $checkoutItems = $this->getCheckoutItems($checkoutID);

        $response = $this->requestUpdateCart(
            $checkoutID,
            [
                'currency' => $checkoutInfo['currency'],
                'cartSum'  => $checkoutInfo['cartSum'],
                'products' => $checkoutItems
            ]
        );
    }

    public function requestUpdateCart(
        $cart = '',
        $body = []
    ) {
        $path = $this->apiDemoUrl.'/carts/'.$cart;
        $xkey = $this->apiDemoKey;
        $response = $this->requestRun('PUT', $path, $body, $xkey);
        return $response;
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> data

    private function getCheckoutID() {
        $checkoutID = $this->session->data['order_id'];
        return $checkoutID;
    }

    private function getCheckoutInfo() {
        $this->load->model('checkout/order');
        $checkoutID = $this->getCheckoutID();
        $checkoutOrderBase = $this->model_checkout_order->getOrder($checkoutID);
        $checkoutOrderData = $this->request->post['order_data'];
        return [
            'email'    => $checkoutOrderData['email'],
            'cartSum'  => round($checkoutOrderBase['total'] * 100),
          //'cartSum'  => round($checkoutOrderData['total'] * 100),
            'currency' => 'EUR'
        ];
    }

    public function getCheckoutItems($checkoutID) {
        $this->load->model('checkout/order');
        $checkoutShopItems = $this->model_checkout_order->getOrderProducts($checkoutID);
        $checkoutItems = array_map(
            function ($index, $product) {
                return [
                    'cartProductID' => $product['order_product_id'],
                    'productID'     => $product['product_id'],
                    'variantID'     => $product['product_id'],
                    'title'         => $product['name'],
                    'description'   => $product['model'],
                    'price'         => round($product['price'] * 100),
                    'quantity'      => round($product['quantity'])
                ];
            },
            array_keys($checkoutShopItems),
            array_values($checkoutShopItems)
        );
        return $checkoutItems;
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> workers

    public function requestRun(
        $type = 'POST',
        $path = '',
        $body = [],
        $xkey = ''
    ) {
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL            => $path,
            CURLOPT_CUSTOMREQUEST  => $type,
            CURLOPT_POSTFIELDS     => json_encode($body),
            CURLOPT_HTTPHEADER     => [
                "X-API-KEY: " . $xkey,
                "accept:        application/json",
                "content-type:  application/json"
            ],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
        ]);
        $response = curl_exec($curl);
        $responseErorr = curl_error($curl);
        curl_close($curl);
        return $response ? $response : $responseErorr;
    }

}
