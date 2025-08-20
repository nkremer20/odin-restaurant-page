import './styles.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

function createHeader() {
    // Create header div
    const header = document.createElement('header');

    // Create location div
    const location_div = document.createElement('div');
    location_div.id = 'location';
    header.appendChild(location_div);

    // Create the location link
    const location_link = document.createElement('a');
    location_link.id = 'location-link';
    location_link.href = 'https://www.google.com/maps/place/Two+Birds+One+Stone/@39.1180102,-94.571578,17z/data=!3m1!4b1!4m6!3m5!1s0x87c0f1854ea2940f:0xe9376466a23e2826!8m2!3d39.1180102!4d-94.571578!16s%2Fg%2F11m5s9vnbx?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D';
    location_link.textContent = '1000 East Riverfront Drive, Kansas City, MO 64120';
    location_div.appendChild(location_link);

    // Create logo container
    const logo_container = document.createElement('div');
    logo_container.id = 'logo-container';
    header.appendChild(logo_container);

    // Create logo
    const logo = document.createElement('h1');
    logo.textContent = 'Kremer Cafe';
    logo_container.appendChild(logo);

    // Create nav bar
    const nav = document.createElement('nav');
    const home_button = document.createElement('button');
    home_button.textContent = 'Home';
    nav.appendChild(home_button);
    const menu_button = document.createElement('button');
    menu_button.textContent = 'Menu';
    nav.appendChild(menu_button);
    const about_button = document.createElement('button');
    about_button.textContent = 'About';
    nav.appendChild(about_button);
    header.appendChild(nav);

    // Add header to the page
    document.body.appendChild(header);
}

function clearContent() {
    const content = document.querySelector('#content');
    if (content) {
        content.remove();
    }
}

createHeader();

home();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case 'Home':
                clearContent();
                home();
                break;
            case 'Menu':
                clearContent();
                menu()
                break;
            case 'About':
                clearContent();
                about()
                break;
        }
    });
});