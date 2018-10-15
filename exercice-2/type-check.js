arg1 = "hello world";

function type_check_V1(arg1, arg2){
    typeArg1 = typeof arg1;
    if ( typeArg1 == arg2){
        return "le type de l'arg1 correspond à arg2";
    }

}

console.log(type_check_V1(arg1, 'string'));