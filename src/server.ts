import config from './app/config';
import app from './app';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://editor:OtYj9tLwclDFcoPP@cluster0.kt6fwyn.mongodb.net/first-project?retryWrites=true&w=majority',
    );
    server = app.listen(process.env.PORT, () => {
      console.log('server is running on port', config.port);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
