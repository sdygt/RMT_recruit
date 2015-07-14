<?php

class LoginVerifyAction extends Action { 
	public function loginverify(){
		$username =I('username');
		$pwd =I('password');
		$pwd = md5($pwd);
		$user =M('login')->where(array('username'=>$username))->find();
		if(!$user||$user['password']!=$pwd){
		
			$this->redirect('Index/index');
			return;
		}else{
		$_SESSION['check']='1';
		}
		$this->redirect('Index/index');
	}

	public function urlzx(){
		$Form = D('Topic');dump($_POST['name']);
		$data['name']=$_POST['name'];
		$Form->add($data);

	}
}
?>