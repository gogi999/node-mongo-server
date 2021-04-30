import mongoose from 'mongoose';
import app from './app';
import config from './config';

mongoose.connect(config.mongo,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connection successfully...'))
    .catch(() => console.log('Error connecting to MongoDB!!!'));

app.listen(config.port, (error) => {
    if (error) return console.log(error);
    console.log(`Server is listening on port ${config.port}...`);
});
