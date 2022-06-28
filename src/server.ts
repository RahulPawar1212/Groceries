import * as express from 'express';
const app = express();
const port  = 3000;

app.get('/',(req,res) => {

    res.json({hello:'world'})
})

export const server = async () => {
app.listen(port);
console.log('Server started at http://localhost:${port}}')
console.log('Press ctr+c to quit');
};
