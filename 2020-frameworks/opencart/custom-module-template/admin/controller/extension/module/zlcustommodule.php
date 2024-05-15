<?php
/**
  * 2024.5.15
  * Here are extension module base
  */
class ControllerExtensionModuleZlcustommodule extends Controller {
    private $moduleNamePlain = 'zlcustommodule';
    private $moduleNameCamel = 'Zlcustommodule';
    private $devmode = true;
    private $error = array();


    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Component logic

    public function index() {
        $this->indexInitModule();
        $this->renderAdminPage();
    }

    public function install() {
        $this->createEvents();

    }

    public function uninstall() {
        $this->deleteEvents();
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Events

    protected function createEvents() {
        $moduleName = $this->moduleNamePlain; // '.$moduleName.'
        $this->load->model('setting/event');

        $this->model_setting_event->addEvent(
            ''.$moduleName.'-ev11',
            'admin/model/catalog/product/addProduct/before',
            'extension/module/'.$moduleName.'/eventReactionOperator'
        );

        $this->model_setting_event->addEvent(
            ''.$moduleName.'-ev12',
            'catalog/model/journal3/checkout/update/after',
            'extension/module/'.$moduleName.'/eventReactionOperator'
        );
    }

    protected function deleteEvents() {
        $moduleName = $this->moduleNamePlain; // '.$moduleName.'
        $this->load->model('setting/event');
        $this->model_setting_event->deleteEventByCode(''.$moduleName.'-ev11');
        $this->model_setting_event->deleteEventByCode(''.$moduleName.'-ev12');
        $this->operatorNotifySend();
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Init module

    protected function indexInitModule() {
        $moduleName = $this->moduleNamePlain; // '.$moduleName.'
        $this->load->language('extension/module/'.$moduleName.'');
        $this->document->setTitle($this->language->get('heading_title'));
        $this->document->addStyle('view/stylesheet/'.$moduleName.'.css');
        $this->document->addScript('view/javascript/'.$moduleName.'.js');
    }

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Render page

    protected function renderAdminPage() {
        $moduleName = $this->moduleNamePlain; // '.$moduleName.'
        $modulePathToken = 'user_token=' . $this->session->data['user_token']; // '.$modulePathToken.'
        $this->load->model('setting/setting');

        // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Actions

        if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
            $this->model_setting_setting->editSetting('module_'.$moduleName.'', $this->request->post);
            $this->session->data['success'] = $this->language->get('text_success');
            $this->response->redirect($this->url->link(
                'extension/module/'.$moduleName.'',
                'type=module&'.$modulePathToken.'',
                TRUE));
        }

        // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Setings

        $data['error_warning'] = isset($this->error['warning']) ? $this->error['warning'] : '';

        // Props

        $moduleNameStatus = 'module_'.$moduleName.'_status';
        $data[$moduleNameStatus] = isset($this->request->post[$moduleNameStatus])
            ? $this->request->post[$moduleNameStatus]
            : $this->config->get($moduleNameStatus);

        // Links

        $data['action'] = $this->url->link(
            'extension/module/'.$moduleName.'',
            'type=module&'.$modulePathToken.'',
            TRUE);
        $data['cancel'] = $this->url->link(
            'marketplace/extension',
            'type=module'.$modulePathToken.'',
            TRUE);

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link(
                'common/dashboard',
                ''.$modulePathToken.'',
                TRUE));
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_extension'),
            'href' => $this->url->link(
                'marketplace/extension',
                'type=module&'.$modulePathToken.'',
                TRUE));
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('heading_title'),
            'href' => $this->url->link(
                'extenison/module/'.$moduleName.'',
                'type=module'.$modulePathToken.'',
                TRUE));

        // Texts

        $data['heading_title'] = $this->language->get('heading_title');
        $data['text_edit'] = $this->language->get('text_edit');
        $data['text_enabled'] = $this->language->get('text_enabled');
        $data['text_disabled'] = $this->language->get('text_disabled');
        $data['entry_status'] = $this->language->get('entry_status');
        $data['button_save'] = $this->language->get('button_save');
        $data['button_cancel'] = $this->language->get('button_cancel');

        // Output sections

        $data['header']       = $this->load->controller('common/header');
        $data['column_left']  = $this->load->controller('common/column_left');
        $data['footer']       = $this->load->controller('common/footer');
        $data['user_token']   = $this->session->data['user_token'];

        // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~>> Output

        $this->response->setOutput($this->load->view('extension/module/'.$moduleName.'', $data));

    }

    protected function validate() {
        $moduleName = $this->moduleNamePlain; // '.$moduleName.'
        if (!$this->user->hasPermission('modify', 'extension/module/'.$moduleName.'')) {
            $this->error['warning'] = $this->language->get('error_permission');
        }
        return !$this->error;
    }


}
