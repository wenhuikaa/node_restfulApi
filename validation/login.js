const Validator=require("validator");
const isEmpty=require("./is-empty");

//验证data,也就是req.body
module.exports=function validateLoginInput(data){
    let errors={};

    //判断name是否为字符串，是，则返回该字符串，否则，返回空字符串
    //这里的isEmpty就是用的引入的isEmpty方法

    data.email=!isEmpty(data.email)?data.email:'';
    data.password=!isEmpty(data.password)?data.password:'';
    


    if(Validator.isEmpty(data.email)){
        errors.email="邮箱不能为空!";
    }

    if(!Validator.isEmail(data.email)){
        errors.email="邮箱不合法!";
    }

    if(Validator.isEmpty(data.password)){
        errors.password="密码不能为空!";
    }


    //isEmpty(errors):有errors就是false,没有errors就是true
    return{
        errors:errors,
        isValid:isEmpty(errors)
    };
}