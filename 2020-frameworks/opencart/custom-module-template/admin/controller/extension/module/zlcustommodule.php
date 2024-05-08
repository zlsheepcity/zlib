<?php
// zlcustommodule, v2024.5.8
// The controller name rule: Controller + directory path (CamelCase) + file name (CamelCase)
class ControllerExtensionModuleZlcustommodule extends Controller {

    private $error = array();


    public function index() {
        $this->load->language('extension/module/zlcustommodule');
        $this->document->setTitle($this->language->get('heading_title'));
        $this->document->addStyle('view/stylesheet/zlcustommodule.css');
        $this->document->addScript('view/javascript/zlcustommodule.js');
        $this->load->model('setting/setting');

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
            $this->model_setting_setting->editSetting('module_zlcustommodule', $this->request->post);
            $this->session->data['success'] = $this->language->get('text_success');
            $this->response->redirect($this->url->link(
                'extension/module/zlcustommodule',
                'type=module&user_token=' . $this->session->data['user_token'],
                TRUE));
        }

        $data['heading_title'] = $this->language->get('heading_title');
        $data['text_edit'] = $this->language->get('text_edit');
        $data['text_enabled'] = $this->language->get('text_enabled');
        $data['text_disabled'] = $this->language->get('text_disabled');
        $data['entry_status'] = $this->language->get('entry_status');
        $data['button_save'] = $this->language->get('button_save');
        $data['button_cancel'] = $this->language->get('button_cancel');

        $data['error_warning'] = isset($this->error['warning']) ? $this->error['warning'] : '';

        $data['action'] = $this->url->link(
            'extension/module/zlcustommodule',
            'type=module&user_token=' . $this->session->data['user_token'],
            TRUE);
        $data['cancel'] = $this->url->link(
            'marketplace/extension',
            'type=module&user_token=' . $this->session->data['user_token'],
            TRUE);

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link(
                'common/dashboard',
                'user_token=' . $this->session->data['user_token'],
                TRUE));
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_extension'),
            'href' => $this->url->link(
                'marketplace/extension',
                'type=module&user_token=' . $this->session->data['user_token'],
                TRUE));
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('heading_title'),
            'href' => $this->url->link(
                'extenison/module/zlcustommodule',
                'type=module&user_token=' . $this->session->data['user_token'],
                TRUE));

        $data['module_zlcustommodule_status'] = isset($this->request->post['module_zlcustommodule_status'])
            ? $this->request->post['module_zlcustommodule_status']
            : $this->config->get('module_zlcustommodule_status');

        $data['header'] = $this->load->controller('common/header');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['footer'] = $this->load->controller('common/footer');
        $data['user_token'] = $this->session->data['user_token'];

        /**
         * Using this function tpl file is called and all the data of controller is passed through '$data' array
         * This is for Opencart 2.2.0.0 version. There will be minor changes as per the version.
         */
        $this->response->setOutput($this->load->view('extension/module/zlcustommodule', $data));
    }


    protected function validate() {
        if (!$this->user->hasPermission('modify', 'extension/module/zlcustommodule')) {
            $this->error['warning'] = $this->language->get('error_permission');
        }
        return !$this->error;
    }


}
