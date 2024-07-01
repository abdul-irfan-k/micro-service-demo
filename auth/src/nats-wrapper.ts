import nats, { Stan } from 'node-nats-streaming';
import detEnv from 'dotenv';

class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      console.log('env ', process.env.NODE_ENV);
      if (this.isTestEnvironment()) return null;
      throw new Error('Cannot access NATS Client before connecting!');
    }
    return this._client;
  }

  connectToNats(clusterId: string, clientId: string, url: string) {
    if (this.isTestEnvironment()) return;
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      if (this.client == null) return resolve();
      this.client.on('connect', () => {
        console.log(`DUNK SERVICE IS CONNECTED TO NATS STREAMING SERVER`);
        resolve();
      });
      this.client.on('error', err => {
        reject(err);
      });
    });
  }
  isTestEnvironment() {
    return process.env.NODE_ENV == 'TEST';
  }
  isTestMode() {
    return this._client == null;
  }
}

export const natsWrapper = new NatsWrapper();
