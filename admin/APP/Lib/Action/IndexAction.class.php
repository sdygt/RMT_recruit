<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
    	 if($_SESSION['check']=='1'){
		$this->redirect('Topic/index');}else{$this->redirect('LoginVerify/index');}
    	
       

	}
	public function loginout(){
		session(null);
		redirect("Index/index");

	}

}
?>

