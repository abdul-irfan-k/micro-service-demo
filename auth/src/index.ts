import { app } from './app';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { natsWrapper } from './nats-wrapper';
import {
  NATS_CLIENT_ID,
  NATS_CLUSTER_ID,
  NATS_URL,
} from '@lib/constant/constant';
dotenv.config();

const start = async () => {
  try {
    await connectDB();
    await natsWrapper.connectToNats(NATS_CLUSTER_ID, NATS_CLIENT_ID, NATS_URL);

    if (natsWrapper.client == null) throw new Error('not connected');
    natsWrapper.client.on('close', () => {
      // eslint-disable-next-line no-console
      console.log('NATS connetion closed!');
      process.exit();
    });

    process.on('SIGINT', () => {
      if (natsWrapper.client != null) natsWrapper.client.close();
    });
    process.on('SIGTERM', () => {
      if (natsWrapper.client != null) natsWrapper.client.close();
    });

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`listening port:${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error ', error);
  }
};
start();
