var cl=require('cli-color')
var uc=require('upper-case')
console.log(cl.green.bgYellow.underline('hello world'));
console.log(cl.blue(uc.upperCase("hello good afternoon")));
