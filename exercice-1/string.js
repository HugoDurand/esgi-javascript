var hw = 'hello world';
var cc = 'cOU COU';

function ucfirst(string){
    return string.charAt(0).toUpperCase()+ string.slice(1);;
}

function capitalize(string){

    string = string.split(' ');

    for(i=0; i<string.length; i++){
        string[i] = ucfirst(string[i]); 
    }

    string = string.join(' ');
    return string;
}

function camelCase(string){

    string = capitalize(string);
    string = string.replace(' ', '');

    return string;

}

function snake_case(string){

    string = capitalize(string);
    string = string.replace(' ', '_');

    return string;
}

function leet(string){

    string = string.split('');

    for(i=0; i<string.length; i++){
         
        if(string[i] == 'A'){
            string[i] = '4'
        }
        if(string[i] == 'E'){
            string[i] = '3'
        }
        if(string[i] == 'I'){
            string[i] = '1'
        }
        if(string[i] == 'O'){
            string[i] = 'o'
        }
        if(string[i] == 'U'){
            string[i] = '_'
        }
        if(string[i] == 'Y'){
            string[i] = '7'
        }

    }

    string = string.join('');

    return string;
}

function prop_access(string){

    return string;

}

function verlan(string){

    string = string.split(' ');
    for(i=0; i<string.length; i++){
        string[i] = string[i].split('');
        string[i] = string[i].reverse();
        string[i] = string[i].join('');
    }
    string = string.join(' ');

    return string;
}


function yoda(string){

    string = string.split(' ');
    string = string.reverse();
    string = string.join(' ');


    return string;
}

function vig(string){



    return string;
}
console.log(yoda(hw));