/* Copyright (C) 2021 - Developers: ShinkuKira21, *Add your name to the list here. * - 
    Usage Terms: The individual can use this template in a open-source or freeware manor. 
    Feel free to tweak and make any comments to improve the template. */

import './style.css'
import './components/navbar.css'
import Routing from './components/routing';

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = Routing();

