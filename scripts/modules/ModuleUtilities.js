define(function () {
    return {
        getUniqueName:function (aName) {
            return aName + '__' + new Date().getTime();
        }
    };
});