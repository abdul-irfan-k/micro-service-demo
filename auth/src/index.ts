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
      console.log('NATS connetion closed!');
      process.exit();
    });

    process.on('SIGINT', () => {
      console.log('sigint');
      if (natsWrapper.client != null) natsWrapper.client.close();
    });
    process.on('SIGTERM', () => {
      console.log('sigterm');
      if (natsWrapper.client != null) natsWrapper.client.close();
    });

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`listening port:${port}`);
    });
  } catch (error) {
    console.log('error ', error);
  }
};
start();
