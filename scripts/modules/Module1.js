define(['modules/ModuleUtilities'], function (utilities) {
    var moduleName = 'Module1',
        uniqueModuleName = utilities.getUniqueName(moduleName);

    console.log(uniqueModuleName + ' is being loaded');

    return {
        getUniqueModuleName:function () {
            return uniqueModuleName;
        }
    };
});