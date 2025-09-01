import { test, expect } from '@playwright/test';
import { url } from '../../URL/url';

test.describe('User API Testing', () => {
  test('Signup Users', async ({ request }) => {
    const randomNum = Math.floor(Math.random() * 1000);
    const payload = {
      first_name: `Test${randomNum}`,
      last_name: "ahmad",
      email: `testuser${randomNum}@gmail.com`,
      phone: `+9230012345${randomNum}`,
      user_type: "client", 
      password: "test1234",
      device_token: "device_token"
    }
    if (payload.email === "") {
      console.log("Email is required");

    }
    const response = await request.post(`${url}/accounts/signup`, {
      data: payload,
      headers: {
        'Content-Type': 'application/json'
      }

    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Login API Response:", responseBody);
  })
  test('Login Users', async ({ request }) => {
    const payload = { 
      email: "testuser13@gmail.com",
      password: "test1234"
    }
    const response = await request.post(`${url}/accounts/login`, {
      data: payload,
      headers: {
        'Content-Type': 'application/json' 
      }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("📌 Login API Response:", responseBody);

  })
})