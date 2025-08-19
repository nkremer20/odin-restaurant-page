export function home() {
    // Create content div
    const content_div = document.createElement('div');
    content_div.id = 'content';
    
    // Create photo container
    const photo_container = document.createElement('div');
    photo_container.id = 'photo-container';
    content_div.appendChild(photo_container);

    // Create open container
    const open_container = document.createElement('div');
    open_container.id = 'open-container';
    const now_open = document.createElement('h1');
    now_open.textContent = 'NOW OPEN!';
    open_container.appendChild(now_open);
    const open_sub_text = document.createElement('p');
    open_sub_text.textContent = 'Come for the beer stay for the bites!';
    open_container.appendChild(open_sub_text);
    photo_container.appendChild(open_container);

    // Add content div to the DOM
    document.body.appendChild(content_div);
}