import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    console.log('Connecting to MongoDB at:', config.database_url);

    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

main();