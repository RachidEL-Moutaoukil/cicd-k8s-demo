const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const version = process.env.VERSION || '1.0.0';
app.get('/', (req, res) => {
    res.send(`Hello Kubernetes  CI/CD! Version: ${version}`);
});
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

