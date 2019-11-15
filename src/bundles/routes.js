import { createRouteBundle } from 'redux-bundler';
import Home from '../components/home';
import Resume from '../components/resume';
import Trophies from '../components/trophies';
import Crypto from '../components/crypto';

export default createRouteBundle({
  '/': Home,
  '/resume': Resume,
  '/trophies': Trophies,
  '/crypto': Crypto
});
