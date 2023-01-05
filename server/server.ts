import app from './index';

const port = 3002;
app.listen(port, () => {
    console.log(`Graphql server is running at port:${port}`);
});