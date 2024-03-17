// const input = document.querySelector("input");
// document.addEventListener("keyup", e=>{
//     if(e.ctrlKey && e.key ==="/"){
//         input.focus();
//     }
// })

function upper_case(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("string first character is uppercase");
    }
    else{
        console.log("string's first characer is not upper case");
    }
}
upper_case('Abcd');
upper_case('abcd');