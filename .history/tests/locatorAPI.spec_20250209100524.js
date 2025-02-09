const {test, expect, request} = require('@playwright/test');



test('contoh get', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.page).toBe(2);
    expect(responJSON.total).toBe(12);

});

test('contoh post', async ({ page }) => {
    const apiContext = await request.newContext();
    const postData = {
            "name": "morpheus",
            "job": "leader"
    }
    const res = await apiContext.post('https://reqres.in/api/users', {
        data : postData
    });
    
    expect(res.status()).toBe(201);
    const responJSON = await res.json();
    expect(responJSON.name).toBe('morpheus');
    expect(responJSON.job).toBe('leader');

});