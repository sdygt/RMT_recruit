<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
		$this -> show();
    }

    public function addEntry() //handle ajax.post request
    {
    	if (!IS_AJAX) {
    		echo "非法操作";
    	}

    	$this->ajaxReturn($_POST);
    }
}