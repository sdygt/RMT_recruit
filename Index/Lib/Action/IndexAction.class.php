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
        $db = M('freshman');

        //验证数据合法
        if (!($_POST['name'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_name'));
            return ;
        }

        if (!preg_match('/^[BHYQ][\d]{8}$/i', $_POST['xh'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_xh'));
            return ;
        }

        if($_POST['sex']!='男' && $_POST['sex']!='女'){
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_sex','sex'=>$_POST['sex']));
            return ;
        }

        if (! preg_match('/[\d]{4}[-][\d]{1,2}[-][\d]{1,2}+/i', $_POST['birthday'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_birthday'));
            return ;
        }
        if (! preg_match('/^[1][3578][\d]{9}+/i', $_POST['tel'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_tel'));
            return ;
        }
        if (! preg_match('/^[\d]{6,11}/i', $_POST['qq'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_qq'));
            return ;
        }
        if (! preg_match('/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/', $_POST['email'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_email'));
            return ;
        }
        if (! ($_POST['dorm'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_dorm'));
            return ;
        }            
        if (! ($_POST['college'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_college'));
            return ;
        }       

        if (! ($_POST['spec']) && trim($_POST['spec'])!='') { 
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_spec'));
            return ;
        }
        if (! ($_POST['city'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_city'));
            return ;
        }
        if (! ($_POST['department'])) {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_department'));
            return ;
        }
        if (! ($_POST['award']) && trim($_POST['award'])!='') { 
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_award'));
            return ;
        }
        if (! ($_POST['exp']) && trim($_POST['exp'])!='') { 
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_exp'));
            return ;
        }
        if ((! ($_POST['reason'])) && trim($_POST['reason'])!='') {
            $this->ajaxReturn(array('errno'=>-1,'errmsg'=>'bad_reason'));
        }


        $cond['xh'] = $_POST['xh'];
        $result = $db->where($cond)->select();
        if ($result) {
            $this->ajaxReturn(array('errno'=>1,'errmsg'=>'xh_exist'));
            return ;
        }
        $db->add($_POST);
        $this->ajaxReturn(array('errno'=>0,'errmsg'=>'success','sql'=>$db->getLastSql()));  //调试用，输出实际执行的SQL
    }
    public function loginV(){

        if (!IS_AJAX) {
            $this->error('非法操作！',U('Index/login'));
        }

        $user = M('freshman')->where('name="'.I('POST.name').'"')->find();
        
        if (!I('POST.name')||$user['tel']!=I('POST.tel')||$user['xh']!=I('POST.xh'))//若密码错误或者未能获取有效密码
        {
            $this->ajaxReturn(array('status' => 1));//bad name or password
        }
        else
        {
            session('loggeduser',I('POST.xh'));
            $this->ajaxReturn(array('status' => 0));//success
        }
    }
    public function edit()
    {
        if ($_SESSION['loggeduser']!=$_GET['xh']) 
        {
            $this->error('请先登录！',U('Index/login'));
        }
        $members = M('freshman'); 
        $xh = $_GET['xh'];
        $map['xh'] = $xh;
        $member = $members->where($map)->find();
        $xh = $members->xh;$this->assign('xh',$xh);
        $name = $members->name;$this->assign('name',$name);

        $tel = $members->tel;$this->assign('tel',$tel);
        $qq = $members->qq;$this->assign('qq',$qq);
        $email = $members->email;$this->assign('email',$email);

        $department = $members->department;$this->assign('department',$department);

        $this->show();

    }
}

?>