const {test, expect, request} = require('@playwright/test');



test('contoh get List users', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.page).toBe(2);
    expect(responJSON.total).toBe(12);

});

test('contoh get list resource', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/unknown');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.page).toBe(1);
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

test('contoh put', async ({ page }) => {
    const apiContext = await request.newContext();
    const postData = {
        "name": "morpheus",
        "job": "zion resident"
    }
    const res = await apiContext.post('https://reqres.in/api/users/2', {
        data : postData
    });
    
    expect(res.status()).toBe(201);
    const responJSON = await res.json();
    expect(responJSON.name).toBe('morpheus');
    expect(responJSON.job).toBe('zion resident');

});

test('contoh delete', async ({ page }) => {
    const apiContext = await request.newContext();
    const res = await apiContext.delete('https://reqres.in/api/users/2');
    expect(res.status()).toBe(204);

});


