import app from './app.js'
import { mongooseConnection } from './database/index.js'

const PORT = process.env.PORT || 5000;
mongooseConnection()
    .then(() => {
        console.log('succesfully conntected to Database');
    }).catch((error) => {
        console.log('Connection Fail');
    })

app.listen(PORT,() => {
    try {
        console.log(`listening to port ${PORT}`);
    }catch (error) {
        console.log(error);
    }
})