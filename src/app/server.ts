import app from './app';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(process.env.DATABSE_URL as string);
    app.listen(process.env.PORT);
  } catch (error) {
    console.log(error);
  }
}

main();
