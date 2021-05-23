import { getVersion, lazyLoad } from './main';

const version = getVersion();
console.log(version);

document.querySelector('#btn').onclick = lazyLoad;


