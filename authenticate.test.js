const authenticate = require('./authenticate');

test('Logging in user waqas who is the actually user of the system',()=>{
    expect(authenticate.login('waqas','testpassword')).toBeTruthy();
});

test.skip('Logging in user umer who is not the the system',()=>{
    expect(authenticate.login('waqas','testpassword')).toBeFalsy();
});
