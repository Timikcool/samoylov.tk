import { composeBundles } from 'redux-bundler';
import crypto from './crypto';
import routes from './routes';
export default composeBundles(crypto, routes)