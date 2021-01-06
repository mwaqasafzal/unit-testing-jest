const genFuctions = require('./genFunctions');

//Test Suite for Genral Functions in genFunctions

//TEST CASE 01
test('Get Null Value',()=>{
    expect(genFuctions.getNull()).toBeNull();
});


//TEST CASE 02
test('Get Undefined Value',()=>{
    expect(genFuctions.getUndefined()).toBeUndefined();
});

//TEST CASE 03
test('Get Truthy Value',()=>{
    expect(genFuctions.getTruthy()).toBeTruthy();
});