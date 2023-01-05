import Koa from 'koa';
import graph from './graph/graph';

const app = new Koa();

graph(app);

export default app;