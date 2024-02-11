import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error("Cannot access NATS client before connecting");
    }
    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });
    //@ts-ignore
    this._client.on("close", () => {
      console.log("NATS listener closed");
     //@ts-ignore
      process.exit();
    });
    //@ts-ignore
    process.on("SIGINT", () => this.client.close());
    //@ts-ignore
    process.on("SIGTERM", () => this.client.close());
    return new Promise((resolve, reject) => {
      //@ts-ignore
      this._client!.on("connect", () => {
        console.log("Connected to NATS!");
        resolve({});
      });
      //@ts-ignore
      this._client!.on("error", (err) => {
        reject(err);
      });
    });
  }
}


export const natsWrapper = new NatsWrapper();