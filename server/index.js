const path = require('path');

const Koa = require('koa');
const KoaStatic = require('koa-static');

const app = new Koa();

const assertDir = path.join(process.cwd(), '/public');

console.log(assertDir);

/*app.use(async (ctx, next) => {
	const { request, response } = ctx;
	if (request.url === '/') {
		request.url = '/public';
	}
	next();
})*/

app.use(KoaStatic(assertDir))

app.listen(7000, err => {
	if (err) throw new Error(err);
	console.log('application listenning at localhost:7000');
});