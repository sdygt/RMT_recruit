<?php

class TopicAction extends Action { 
		public function index(){
		$Form   =   M('user');
	    // 读取数据
	    $data =   $Form->order('id desc')->select();
	    $this->data =  $data;// 模板变量赋值
		if($_SESSION['check']=='1'){
		$this->display();}else{$this->redirect('LoginVerify/index');}
	}

}

?>

