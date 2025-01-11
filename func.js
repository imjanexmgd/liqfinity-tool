import axios from 'axios';
import delay from 'delay';

export const registerFunc = async (email, password, reffCode) => {
  let retries = 3;
  let lastError = null;

  while (retries > 0) {
    try {
      const { data } = await axios.post(
        'https://api.testnet.liqfinity.com/v1/auth/register',
        {
          password: password,
          email: email,
          referrerCode: reffCode ? reffCode : 'U6889',
        },
        {
          headers: {
            'accept-language': 'en-US,en;q=0.9',
            origin: 'https://app.testnet.liqfinity.com',
            priority: 'u=1, i',
            referer: 'https://app.testnet.liqfinity.com/',
            'sec-ch-ua':
              '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      );
      return data;
    } catch (error) {
      lastError = error;
      retries--;
      if (retries > 0) {
        console.log(`Retrying... ${retries} attempts left`);
        await delay(1000);
      }
    }
  }

  // Jika semua percobaan gagal, lempar error terakhir
  throw lastError;
};
export async function loginFunc(email, password) {
  try {
    const { data } = await axios.post(
      'https://api.testnet.liqfinity.com/v1/auth/login',
      {
        email: 'akunhok018@gmail.com',
        password: 'Yupi#123',
      },
      {
        headers: {
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://app.testnet.liqfinity.com',
          priority: 'u=1, i',
          referer: 'https://app.testnet.liqfinity.com/',
          'sec-ch-ua':
            '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}
