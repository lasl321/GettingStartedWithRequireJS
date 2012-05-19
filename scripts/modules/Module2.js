define(['modules/ModuleUtilities', 'modules/Module1'], function (utilities, module1) {
    var moduleName = 'Module2',
        uniqueModuleName = utilities.getUniqueName(moduleName);

    console.log(uniqueModuleName + ' is being loaded');

    console.log(module1.getUniqueModuleName() + ' was passed in');

    return {
        getUniqueModuleName:function () {
            return uniqueModuleName;
        }
    };
});