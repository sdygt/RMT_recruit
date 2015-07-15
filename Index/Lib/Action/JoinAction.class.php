<?php
@header("content-Type: text/html; charset=utf-8"); //这个文件不要了，以后会删掉，先留作参考
class JoinAction extends Action {
    public function add() {
        $stulist = M('User');
        if (1) {
            $data['xh'] = htmlspecialchars($_POST['xh'], ENT_QUOTES);
            $data['name'] =htmlspecialchars($_POST['name'], ENT_QUOTES,'UTF-8'); 
            $data['mail'] = htmlspecialchars($_POST['mail'], ENT_QUOTES);
            $data['sex'] = htmlspecialchars($_POST['sex'], ENT_QUOTES,'UTF-8');
            $data['birthday'] = (int)$_POST['birthday-y'].'-'.(int)$_POST['birthday-m'].'-'.(int)$_POST['birthday-d'];
            $data['department1'] = htmlspecialchars($_POST['department1'], ENT_QUOTES,'UTF-8');
            $data['qq'] = (int)$_POST['qq'];
            $data['phone'] = htmlspecialchars($_POST['phone'], ENT_QUOTES);
            $data['dorm'] = mysql_real_escape_string($_POST['dorm']);
            $data['college'] = mysql_real_escape_string($_POST['college']);
            $data['major'] = mysql_real_escape_string($_POST['major']);
            $data['understanding'] = mysql_real_escape_string($_POST['understanding']);
            $data['specialty'] = mysql_real_escape_string($_POST['specialty']);
            $data['expectation'] = mysql_real_escape_string($_POST['expectation']);
            $data['accepted'] = 0;
            //验证数据合法
            if (! preg_match('/^[BHYQ][\d]+/i', $data['xh'])) {
                echo 'xh_not_rhight';
                return ;
            }
            if (! preg_match('/^[\x{4e00}-\x{9fa5}]+$/u', $data['name'])) {
                echo 'no_foreigner';
                return ;
            }
            if (! preg_match('/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/', $data['mail'])) {
                echo "mail_not_right";
                return ;
            }
            if (! ($data['dorm'])) {
                echo 'dorm_not_right';
                return ;
            }            
            if (! ($data['college'])) {
                echo 'college_not_right';
                return ;
            }       
            if (! ($data['major'])) {
                echo 'major_not_right';
                return ;
            }
            if (! ($data['specialty']) && trim($data['specialty'])!='') { 
                echo 'specialty_not_right';
                return ;
            }
            if (! ($data['expectation']) && trim($data['expectation'])!='') { 
                echo 'expectation_not_right';
                return ;
            }
            if ((! ($data['understanding'])) && trim($data['understanding'])!='') {
                echo 'understanding_not_right';
            }
            //验证是否已注册
            //var_dump($data);
            $condition['xh'] = $data['xh'];
            $result = $stulist->where($condition)->select();
            if ($result) {
                echo "alreadyHaveTheAccount";
                return ;
            }
            $stulist->add($data);
            echo "successful";
        } else {
          echo 'WTF R U DOING!';
          echo date('d');
        }    
  }

}

?>