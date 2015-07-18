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
            die();
        }
        $_POST = I('post.'); //过滤输入
        $data = M('freshman');
        $data->add($_POST);
        $this->ajaxReturn(array("sql"=>$data->getLastSql()));  //调试用，输出实际执行的SQL
    }
}

?>