import './style.css'
import './components/navbar.css'
import Routing from './components/routing';

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = Routing();

