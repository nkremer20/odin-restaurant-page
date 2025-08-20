export function about() {
    // Create content div
    const content_div = document.createElement('div');
    content_div.id = 'content';
    
    // Create photo container
    const photo_container = document.createElement('div');
    photo_container.id = 'photo-container';
    content_div.appendChild(photo_container);

    // Create about container
    const about_container = document.createElement('div');
    about_container.id = 'open-container';
    const about = document.createElement('h1');
    about.textContent = 'ABOUT US';
    about_container.appendChild(about);
    photo_container.appendChild(about_container);

    // Create about text section
    const about_text = document.createElement('p');
    about_text.id = 'about-text';
    about_text.textContent = "Whether it's a casual day hang with friends watching the game or a memorable night out, our guests can enjoy an effortless fun at our bar & beer garden. Take in beautiful riverfront views while relaxing on our outdoor picnic tables or enjoy down to earth conversation with our staff at the bar.";
    content_div.appendChild(about_text);

    // Add content div to the DOM
    document.body.appendChild(content_div);
}