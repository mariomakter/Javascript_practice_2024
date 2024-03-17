function valid_email(str){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(str)){
        console.log("valid email address");
    }
    else{
        console.log("not valid email");
    }
}
valid_email("14.@gmail.com");