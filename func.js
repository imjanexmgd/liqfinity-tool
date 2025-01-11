import axios from 'axios';
import delay from 'delay';
import logger from './logger.js';

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
          turnstileToken:
            '0.uM1b-pgRdOEed4MIpS8E49aqs80SnE9NhMiAbw45Sq2G3uGRAwEy1M_-LeBQr8STqeUeuFOqopotsMH0Zd4cDuQroZLMEQsIP226qylYqklz79W3DiBV3ErKYTVoL_CvG7aaTG75ZXlopHxjCdazRh_wdqVqnn8sHQ0nUWZDO4HbeezDtGscXK5TGEwOK_gKE8jOuG0KQDQjCw8qrbnxy3S2yOGq8BNRpyUKKgNkGGPogJs4lJ3z27zyPKhliEIwRrofBw3pOHjxM1CyZIkTwn53d0BDCaAT38enFx-3qDifWXmC3CTaWDaG5LzwC7MJIqD1CizZn6pponpbhofsiAab5M16laR0cWatoprc0v_S0XDFipEm4nYTxYT9eLU3sDbylKpGNutVmxUMaoMb61GZ3LsRo55-NB0WtcSN0auG077HOn5fHwAStMwXUWzbnW9M9Lf8MjU-rA_XO9TRS9ETRfG_CcNDG5l3uTFTnMSFs6f7wlDfDG1XcQtngLatxG5Tm2kB19moyBjpw_8NDtHWz850gI6a7m0TrkFaJsr-h87-wwxzxHAR_fsEJo4WgP4ouCEEzBb2GT1JJwqXfavnDpeBVjy5_k-UCUYkZPnCw6n0BLUKO4Km137_oSyzluSF06B3ky1r0rsYWEUNt9hh5mUCF0Iv71YfPSyK-AAvD3PQthIZMDW5Y2-1_o9rDfteLEpKqKO70lF6xWu7eJ2BQ0l8Toxx8sFq6lrkVz9OTHGmDIPyEQD82y-7pMhbSbQ8flH_A-iTVA27H7kl2McAFYmitmKnlHmMKDLn8WQ.NW0q2BjEAcngxJdXKFDIdA.ef40b0cf16c64e2c87d1785071adf754af032608468ece7ea4bddb1ea03bf7f1',
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
        logger.info(`Retrying... ${retries} attempts left`);
        await delay(1000);
      }
    }
  }

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
