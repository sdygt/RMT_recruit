$(document).ready(function(){      //这里用来向生日选项添加数字
    var i,j,k;
    var con1,con2,con3;
    for (i = 1990; i <= 2000; i++) {
        $("#b-y").append("<option value="+i+">"+i+"</option>");
    };
    for (j = 1; j < 13; j++) {
        $("#b-m").append("<option value="+j+" class=>"+j+"</option>");
    };
    for (k = 1; k < 32; k++) {
        $("#b-d").append("<option value="+k+">"+k+"</option>");
    };
  
});

function verify_and_submit(path) {    //验证表单并ajax提交
    var name       = $("[name='name']").val();
    var xh         = $("[name='xh']").val();
    var s_sex      = $("[name='s_sex']").is(":checked")?"男":"女";
    var birthday_y   = $("[name='birthday_y").val();
    var birthday_m   = $("[name='birthday_m").val();
    var birthday_d   = $("[name='birthday_d").val();
    var birthday
    if (birthday_y == "" || birthday_m == "" || birthday_d == "") {
        birthday = "";
    } else {
        birthday = birthday_y + '-' + birthday_m + '-' + birthday_d;
    }
    var tel        = $("[name='tel']").val();
    var qq         = $("[name='qq']").val();
    var email      = $("[name='email']").val();
    var dorm       = $("[name='dorm']").val();
    var college    = $("[name='college']").val();
    var spec       = $("[name='spec']").val();
    var city       = $("[name='city']").val();
    var department = $("[name='department']").val();
    var award      = $("[name='award']").val();
    var exp        = $("[name='exp']").val();
    var reason     = $("[name='reason']").val();
    
    errtxt = {  //具体的文案再说吧www
        name:{empty:"姓名不能空",error:"姓名格式错"},
        xh:{empty:"学号不能空",error:"学号格式错"},
        tel:{empty:"不能空",error:"格式错"},
        qq:{empty:"不能空",error:"格式错"},
        email:{empty:"不能空",error:"格式错"},
        dorm:{empty:"不能空",error:"格式错"},
        spec:{empty:"不能空",error:"格式错"},
        city:{empty:"不能空",error:"格式错"},
        award:{empty:"不能空",error:"格式错"},
        exp:{empty:"不能空",error:"格式错"},
        reason:{empty:"不能空",error:"格式错"}
    };

    valid = true;

    //判断各字段是否为空，若空则在placeholder输出提示。但是生日学院和部门要特别处理。
    for (item in errtxt)  
    {
        eval("if("+item+"==''){$('[name=\""+item+"\"]').attr('placeholder','"+errtxt[item]['empty']+"');valid=false}");
    }




    //下面开始ajax请求
    if (valid == true) {
        $.post(path,
        {
            "name":name,
            "xh":xh,
            "sex":s_sex,
            "birthday":birthday,
            "tel":tel,
            "qq":qq,
            "email":email,
            "dorm":dorm,
            "college":college,
            "spec":spec,
            "city":city,
            "department":department,
            "award":award,
            "exp":exp,
            "reason":reason
        },
        function(result){
            console.log(result);
        });
    };
    
}


