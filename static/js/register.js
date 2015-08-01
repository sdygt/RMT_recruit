"use strict";
$(document).ready(function() { //这里用来向生日选项添加数字
    var i, j, k;
    var con1, con2, con3;
    for (i = 1990; i <= 2000; i++) {
        $("#b-y").append("<option value=" + i + ">" + i + "</option>");
    };
    for (j = 1; j < 13; j++) {
        $("#b-m").append("<option value=" + j + " class=>" + j + "</option>");
    };
    for (k = 1; k < 32; k++) {
        $("#b-d").append("<option value=" + k + ">" + k + "</option>");
    };

});

function verify_and_submit(path) { //验证表单并ajax提交
    { //取值
        var name = $("[name='name']").val();
        var xh = $("[name='xh']").val();
        var s_sex = $("[name='s_sex']").is(":checked") ? "男" : "女";
        var birthday_y = $("[name='birthday_y']").val();
        var birthday_m = $("[name='birthday_m']").val();
        var birthday_d = $("[name='birthday_d']").val();
        var birthday
        if (birthday_y == "" || birthday_m == "" || birthday_d == "") {
            birthday = "";
        } else {
            birthday = birthday_y + '-' + birthday_m + '-' + birthday_d;
        }
        var tel = $("[name='tel']").val();
        var qq = $("[name='qq']").val();
        var email = $("[name='email']").val();
        var dorm = $("[name='dorm']").val();
        var college = $("[name='college']").val();
        var spec = $("[name='spec']").val();
        var city = $("[name='city']").val();
        var department = $("[name='department']").val();
        var award = $("[name='award']").val();
        var exp = $("[name='exp']").val();
        var reason = $("[name='reason']").val();
    }
    var errtxt = { //具体的文案再说吧www
        name: {
            empty: "姓名不能空",
            error: "姓名格式错"
        },
        xh: {
            empty: "学号不能空",
            error: "学号格式错"
        },
        tel: {
            empty: "tel不能空",
            error: "tel格式错"
        },
        qq: {
            empty: "qq不能空",
            error: "qq格式错"
        },
        email: {
            empty: "email不能空",
            error: "email格式错"
        },
        dorm: {
            empty: "dorm不能空",
            error: "dorm格式错"
        },
        spec: {
            empty: "spec不能空",
            error: "spec格式错"
        },
        city: {
            empty: "city不能空",
            error: "city格式错"
        },
        award: {
            empty: "award不能空",
            error: "award格式错"
        },
        exp: {
            empty: "exp不能空",
            error: "exp格式错"
        },
        reason: {
            empty: "reason不能空",
            error: "reason格式错"
        },
        birthday: {
            empty: "birthday empty"
        },
        college: {
            empty: "college empty"
        },
        department: {
            empty: "dept empty"
        }
    };


    var valid = true;


    { // 判断各字段是否为空，若空则在placeholder输出提示。但是生日学院和部门因为是下拉框没有placeholder要特别处理。
        if (name == "") {
            $("[name='name']").attr('placeholder', errtxt.name.empty);
            valid = false;
        }
        if (xh == "") {
            $("[name='xh']").attr('placeholder', errtxt.xh.empty);
            valid = false;
        }
        if (tel == "") {
            $("[name='tel']").attr('placeholder', errtxt.tel.empty);
            valid = false;
        }
        if (qq == "") {
            $("[name='qq']").attr('placeholder', errtxt.qq.empty);
            valid = false;
        }
        if (email == "") {
            $("[name='email']").attr('placeholder', errtxt.email.empty);
            valid = false;
        }
        if (dorm == "") {
            $("[name='dorm']").attr('placeholder', errtxt.dorm.empty);
            valid = false;
        }
        if (spec == "") {
            $("[name='spec']").attr('placeholder', errtxt.spec.empty);
            valid = false;
        }
        if (city == "") {
            $("[name='city']").attr('placeholder', errtxt.city.empty);
            valid = false;
        }
        if (award == "") {
            $("[name='award']").attr('placeholder', errtxt.award.empty);
            valid = false;
        }
        if (exp == "") {
            $("[name='exp']").attr('placeholder', errtxt.exp.empty);
            valid = false;
        }
        if (reason == "") {
            $("[name='reason']").attr('placeholder', errtxt.reason.empty);
            valid = false;
        }
        if (birthday == "") {
            alert(errtxt.birthday.empty);
            return;
        }

        if (college == "") {
            alert(errtxt.college.empty);
            return;
        }

        if (department == "") {
            alert(errtxt.department.empty);
            return;
        };

        if (valid == false) {
            alert("有部分字段为空，请检查后重试");
            return;
        };
    }

    { //下面判断各字段格式是否正确
        //关于各月份天数和闰年的附加判断
        var year = parseInt(birthday_y);
        var month = parseInt(birthday_m);
        var day = parseInt(birthday_d);
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            var leap = true;
        } else {
            var leap = false;
        };

        if (($.inArray(month, [1, 3, 5, 7, 8, 10, 12] != -1) && day == 31)) { //月份不在大月列表又选了31号
            alert("你确定" + month + "月有31号？");
            return;
        };
        if (month == 2 && month == 30) {
            alert("你确定2月有30号？");
            return;
        };

        if (month == 2 && leap == false && day == 29) {
            alert("你确定" + year + "年2月有29号？");
            return;
        };
        if (!/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(name)) {
            alert(errtxt.name.error);
            return;
        };
        if (!/^[BHYQ][\d]{8}$/i.test(xh)) {
            alert(errtxt.xh.error);
            return;
        };
        if (!/^1[3|4|5|7|8]\d{9}$/.test(tel)) {
            alert(errtxt.tel.error);
            return;
        };
        if (!/^\d{5,11}$/.test(qq)) {
            alert(errtxt.qq.error);
            return;
        };
        if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)) {
            alert(errtxt.email.error);
            return;
        };
    }
    //下面开始ajax请求
    if (valid == true) {
        $.post(path, {
                "name": name,
                "xh": xh,
                "sex": s_sex,
                "birthday": birthday,
                "tel": tel,
                "qq": qq,
                "email": email,
                "dorm": dorm,
                "college": college,
                "spec": spec,
                "city": city,
                "department": department,
                "award": award,
                "exp": exp,
                "reason": reason
            },
            function(result) {
                console.log(result);
                switch (result.errno)
                {
                    case 0:
                        alert('提交成功！');
                        window.location.href="../../";
                        break;
                    case 1:
                        alert('此学号已提交过申请，若需修改请前往首页>登录修改信息');
                        break;
                    case -1:
                        alert('数据字段验证错误，请检查输入格式');
                        break;
                    default:
                        alert('未知错误，请稍后重试或联系我们。');
                        break;
                }
            });
    };

}
function verify_and_edit(path) { //验证表单并ajax提交
    { //取值
        var name = $("[name='name']").val();
        var xh = $("[name='xh']").val();
        var tel = $("[name='tel']").val();
        var qq = $("[name='qq']").val();
        var email = $("[name='email']").val();
        var department = $("[name='department']").val();

    }
    var errtxt = { //具体的文案再说吧www
        name: {
            empty: "姓名不能空",
            error: "姓名格式错"
        },
        xh: {
            empty: "学号不能空",
            error: "学号格式错"
        },
        tel: {
            empty: "tel不能空",
            error: "tel格式错"
        },
        qq: {
            empty: "qq不能空",
            error: "qq格式错"
        },
        email: {
            empty: "email不能空",
            error: "email格式错"
        },
        department: {
            empty: "部门选择不能为空"
        }
    };


    var valid = true;


    { // 判断各字段是否为空，若空则在placeholder输出提示。但是生日学院和部门因为是下拉框没有placeholder要特别处理。
        if (name == "") {
            $("[name='name']").attr('placeholder', errtxt.name.empty);
            valid = false;
        }
        if (xh == "") {
            $("[name='xh']").attr('placeholder', errtxt.xh.empty);
            valid = false;
        }
        if (tel == "") {
            $("[name='tel']").attr('placeholder', errtxt.tel.empty);
            valid = false;
        }
        if (qq == "") {
            $("[name='qq']").attr('placeholder', errtxt.qq.empty);
            valid = false;
        }
        if (email == "") {
            $("[name='email']").attr('placeholder', errtxt.email.empty);
            valid = false;
        }
        if (department == "") {
            alert(errtxt.department.empty);
            return;
        };

        if (valid == false) {
            alert("有部分字段为空，请检查后重试");
            return;
        };
    }
    { //下面判断各字段格式是否正确
        //关于各月份天数和闰年的附加判断
        
        if (!/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(name)) {
            alert(errtxt.name.error);
            return;
        };
        if (!/^[BHYQ][\d]{8}$/i.test(xh)) {
            alert(errtxt.xh.error);
            return;
        };
        if (!/^1[3|4|5|7|8]\d{9}$/.test(tel)) {
            alert(errtxt.tel.error);
            return;
        };
        if (!/^\d{5,11}$/.test(qq)) {
            alert(errtxt.qq.error);
            return;
        };
        if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)) {
            alert(errtxt.email.error);
            return;
        };
    }
    
    //下面开始ajax请求
    if (valid == true) {
        $.post(path, {
                "name": name,
                "xh": xh,
                "tel": tel,
                "qq": qq,
                "email": email,
                "department": department

            },
            function(result) {
                console.log(result);
                switch (result.errno)
                {
                    case 0:
                        alert('提交成功！');
                        window.location.href="../../";
                        break;
                    case 1:
                        alert('此学号不存在，请先注册！');
                        break;
                    case -1:
                        alert('数据字段验证错误，请检查输入格式');
                        break;
                    case 2:
                        alert('未进行任何修改！');
                        break;    
                    default:
                        alert('未知错误，请稍后重试或联系我们。');
                        break;
                }
            });
    };

}