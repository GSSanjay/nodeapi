import Router from 'express';

export const router = Router();
const PORT = 5000;

router.get('/', (req, res) => {
    res.send('Helllo Home');
});

router.get('/about', (req, res) => {
    res.send('Helllo About');
});

router.listen(PORT, () => {
    console.log('Listening..');
});
