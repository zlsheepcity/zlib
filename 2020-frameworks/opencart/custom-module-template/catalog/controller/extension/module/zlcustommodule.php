<?php
/**
  * 2024.5.21
  * Here are reports from «Shopping cart»
  * route=checkout/checkout
  */
class ControllerExtensionModuleZlcustommodule extends Controller {
    private $moduleNamePlain = 'zlcustommodule';
    private $moduleNameCamel = 'Zlcustommodule';
    private $devmode =  TRUE;
    private $error = array();
    private $apiDemoUrl = '';
    private $apiDemoKey = '';

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> lifecycle

    public function eventReactionOperator(&$route, &$data, &$template = '') {
        $this->operatorSendMessagePing();
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> actions

    public function operatorSendMessagePing() {
       //
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> data

    private function getCheckoutID() { // OPENCART KEY
        $checkoutID = $this->session->data['order_id'];
        return $checkoutID;
    }
    private function getCheckoutEmail() {
        $checkoutOrderData = $this->request->post['order_data'];
        $checkoutEmail = $checkoutOrderData['email'];
        return $checkoutEmail;
    }

    /** Full required data profile */
    private function getCheckout() {
        $this->load->model('checkout/order');
        $cartID            = $this->getCartID();
        $checkoutID        = $this->getCheckoutID();
        $checkoutEmail     = $this->getCheckoutEmail();
        $checkoutOrderData = $this->request->post['order_data'];
        $checkoutOrderBase = $this->model_checkout_order->getOrder($checkoutID);
        $checkoutProducts  = $this->model_checkout_order->getOrderProducts($checkoutID);

     // CHECKOUT PROFILE SCHEME
        return [
            'checkoutID' => $checkoutID,
            'cartID'     => $cartID,
            'email'      => $checkoutEmail,
            'createdAt'  => '2024-05-20T14:11:12Z', // #TODO: $checkoutOrderBase['date_added']
            'cartSum'    => round($checkoutOrderBase['total'] * 100),
            'currency'   => 'EUR',
            'products'   => array_map(
                function ($index, $product) {
                    return [
                        // Product(Omnisend) => Product(Opencart)
                        'cartProductID' => $product['order_product_id'],
                        'productID'     => $product['product_id'],
                        'variantID'     => $product['product_id'],
                        'title'         => $product['name'],
                        'description'   => $product['model'],
                        'price'         => round($product['price'] * 100),
                        'quantity'      => round($product['quantity']),
                    ];
                },
                array_keys($checkoutProducts),
                array_values($checkoutProducts)
            ),
        ];
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> requests api

    public function requestSearchCartByID(
        $prop = ['cartID'=>'']
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/carts/'
            . $prop['cartID']
            ;
        $response = $this->requestRun('GET', $path);
        $document = isset($response['cartID'])
            ? $response
            : FALSE
            ;
        return $document;
    }

    public function requestSearchOrderByID(
        $prop = ['orderID'=>'']
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/orders/'
            . $prop['orderID']
            ;
        $response = $this->requestRun('GET', $path);
        $document = isset($response['orderID'])
            ? $response
            : FALSE
            ;
        return $document;
    }

    public function requestSearchCartByEmail(
        $prop = ['email'=>'']
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/carts/'
            . '?sort=updatedAt&offset=0&limit=99'
            . '&email='
            . urlencode($prop['email'])
            ;
        $response = $this->requestRun('GET', $path);
        $document = isset($response['carts'][0]['cartID'])
            ? $response['carts'][0]
            : FALSE
            ;
        return $document;
    }

    public function requestSearchOrderByEmail(
        $prop = ['email'=>'']
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/orders/'
            . '?sort=updatedAt&offset=0&limit=99'
            . '&email='
            . urlencode($prop['email'])
            ;
        $response = $this->requestRun('GET', $path);
        $document = isset($response['orders'][0]['orderID'])
            ? $response['orders'][0]
            : FALSE
            ;
        return $document;
    }

    public function requestCreateCart(
        $prop = [
            'email'    => '',
            'cartID'   => '',
            'cartSum'  => 0,
            'currency' => 'EUR',
        ]
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/carts'
            ;
        $body = [
            'email'    => $prop['email'],
            'cartID'   => $prop['cartID'],
            'currency' => $prop['currency'],
            'cartSum'  => $prop['cartSum'],
        ];
        $response = $this->requestRun('POST', $path, $body);
        $document = isset($response['cartID'])
            ? $response
            : FALSE
            ;
        return $document;
    }

    public function requestCreateOrder(
        $prop = [
            'email'     => '',
            'orderID'   => '',
            'orderSum'  => 0,
            'currency'  => 'EUR',
            'createdAt' => '',
        ]
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/orders'
            ;
        $body = [
            'email'     => $prop['email'],
            'orderID'   => $prop['orderID'],
            'orderSum'  => $prop['orderSum'],
            'currency'  => $prop['currency'],
            'createdAt' => $prop['createdAt'],
        ];
        $response = $this->requestRun('POST', $path, $body);
        $document = isset($response['orderID'])
            ? $response
            : FALSE
            ;
        return $document;
    }

    public function requestUpdateCart(
        $prop = [
            'cartID'   => '',
            'cartSum'  => 0,
            'currency' => 'EUR',
            'products' => [],
        ]
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/carts/'
            . $prop['cartID']
            ;
        $body = [
            'currency' => $prop['currency'],
            'cartSum'  => $prop['cartSum'],
            'products' => $prop['products'],
        ];
        $response = $this->requestRun('PUT', $path, $body);
        $document = isset($response['cartID'])
            ? $response
            : FALSE
            ;
        return $document;
    }

    public function requestUpdateOrder(
        $prop = [
            'email'     => '',
            'orderID'   => '',
            'orderSum'  => 0,
            'currency'  => 'EUR',
            'createdAt' => '',
        ]
    ) {
        $path = ''
            . $this->apiDemoUrl
            . '/orders/'
            . $prop['cartID']
            ;
        $body = [
            'orderSum'  => $prop['orderSum'],
            'currency'  => $prop['currency'],
            'createdAt' => $prop['createdAt'],
        ];
        $response = $this->requestRun('PUT', $path, $body);
        $document = isset($response['cartID'])
            ? $response
            : FALSE
            ;
        return $document;
    }


    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> requests lib

    public function requestRun(
        $type = 'POST',
        $path = '',
        $body = []
    ) {
        $curlPointer = curl_init();
        $curlXAPIKey = $this->apiDemoKey;
        $curlOptions = $type === 'GET' || $type ==='DELETE'
            ? [
                // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ WITHOUT BODY
                CURLOPT_URL            => $path,
                CURLOPT_CUSTOMREQUEST  => $type,
                CURLOPT_HTTPHEADER     => [
                    "X-API-KEY: " . $curlXAPIKey,
                    "accept:        application/json",
                ],
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING       => "",
                CURLOPT_MAXREDIRS      => 10,
                CURLOPT_TIMEOUT        => 30,
                CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~/WITHOUT BODY
              ]
            : [
                // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ WITH BODY
                CURLOPT_POSTFIELDS     => json_encode($body),
                CURLOPT_URL            => $path,
                CURLOPT_CUSTOMREQUEST  => $type,
                CURLOPT_HTTPHEADER     => [
                    "X-API-KEY: " . $curlXAPIKey,
                    "accept:        application/json",
                    "content-type:  application/json",
                ],
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING       => "",
                CURLOPT_MAXREDIRS      => 10,
                CURLOPT_TIMEOUT        => 30,
                CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~/WITH BODY
              ];

        // RUN
        curl_setopt_array($curlPointer, $curlOptions);
        $response      = curl_exec($curlPointer);
        $responseErorr = curl_error($curlPointer);
        curl_close($curlPointer);
        return $response ? json_decode($response, TRUE) : $responseErorr;
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> EOC
}
