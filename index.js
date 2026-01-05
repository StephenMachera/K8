import  express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.get('/' , (req, res) => {
    res.status(200).json({
        success: true,
        message:"Welcome to K8 where knowledge will be done!",
        timestamp: new Date().getDate()
    });
});

// to write a code to check for app readiness
app.get('/readyz', (req, res) => {
    res.status(200).json({
        success: true,
        message:"the api is ready for running!",
        timestamp: new Date().getDate()
    });
});

// Route to check for the app health
app.get('/healthyz', (req, res) => {
    res.status(200).json({
        success: true,
        message:"The api is healthy!",
        timestamp: new Date().getDate()
    })
})
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
})