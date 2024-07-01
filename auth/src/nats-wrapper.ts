import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
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
