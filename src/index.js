import "./style.css";
import "./img/image.jpg";
import 'tw-elements';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

document.addEventListener('DOMContentLoaded', (event) => {
    Alpine.start();
});