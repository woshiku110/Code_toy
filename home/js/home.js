/**
 * Created by zhangchunyu on 2017/4/19.
 */




function save() {
    var user = $('#content .margin .user');
    var password =   $('#content .margin .password');
    loadDataFromWeb(user.val(),password.val(),1,"entry");

}


function loadDataFromWeb(user,password,zone,method) {
    var dict =  {
        data: {
            user:user,
            password:password,
            zone:zone
        }
    };


    $.ajax({
        url: IP,
        type: 'get',
        dataType:'json',
        async:true,
        data:{
            param: JSON.stringify(dict),
            method:method
        },
        success: function(res) {
            if(res["success"]){
                alert(res["msg"]);
            }
            else {
                alert(res["msg"]);
            }
        },
        error:function(res){
            alert("请求失败");
        }
    });

}