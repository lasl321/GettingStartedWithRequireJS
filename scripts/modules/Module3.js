define(['modules/ModuleUtilities'], function (utilities) {
    var moduleName = 'Module3',
        uniqueModuleName = utilities.getUniqueName(moduleName);

    console.log(uniqueModuleName + ' is being loaded');

    var student = {
        getName:function () {
            return this.name;
        }
    };

    return {
        getUniqueModuleName:function () {
            return uniqueModuleName;
        },

        createStudent:function (name) {
            return Object.create(student, { name:{
                value:name,
                enumerable:false
            }});
        },

        createStudent2:function (name) {
            var F = function () {
                this.name = name;
            };

            F.prototype = student;

            return new F();
        },

        createStudent3:function (name) {
            var newStudent = Object.create(student);
            newStudent.name = name;
            return newStudent;
        }
    };
});