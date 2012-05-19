requirejs.config({
    paths:{
        'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    }
});

require(["modules/Module1", 'modules/Module2', 'jquery'], function (module1, module2, $) {
    console.log(module1.getUniqueModuleName());
    console.log(module2.getUniqueModuleName());
    console.log($)
});