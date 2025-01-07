import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { MyHeader } from './components/MyHeader';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.appendChild(MyHeader('<h1>Witamy w roku 2025</h1>', "myHeader"));
}
