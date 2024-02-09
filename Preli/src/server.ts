/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import app from './app';
import config from './config';
// import { logger, ErrorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

// process.on('SIGTERM', () => {
//   console.log('SIGTERM  is received')
//   if (server) {
//     server.close()
//   }
// })

async function main() {
  let server: Server;
  try {
    await mongoose.connect(config.database_url as string);
    console.log('DB Connection Done');

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }

  process.on('unhandledRejection', error => {
    console.log(
      'UnhandedRejection is detected, we are closing our server.....'
    );
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();
