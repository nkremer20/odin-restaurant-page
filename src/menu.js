export function menu() {
    // Create content div
    const content_div = document.createElement('div');
    content_div.id = 'content';

    // Create menu container
    const menu_container = document.createElement('div');
    menu_container.id = 'menu-container';
    content_div.appendChild(menu_container);

    // Create snack card
    const snack_card = document.createElement('div');
    snack_card.id = 'snack-card';

    // Create snack card header
    const snack_card_header = document.createElement('div');
    snack_card_header.classList.add('card-header');

    const snack_card_title = document.createElement('h2');
    snack_card_title.textContent = 'Snacks';
    snack_card_header.appendChild(snack_card_title);
    snack_card.appendChild(snack_card_header);

    menu_container.appendChild(snack_card);

    // Create Burger card
    const burger_card = document.createElement('div');
    burger_card.id = 'burger-card';

    // Create burger card header
    const burger_card_header = document.createElement('div');
    burger_card_header.classList.add('card-header');

    const burger_card_title = document.createElement('h2');
    burger_card_title.textContent = 'Burgers';
    burger_card_header.appendChild(burger_card_title);
    burger_card.appendChild(burger_card_header);

    menu_container.appendChild(burger_card);

    // Array of objects for menu items
    const menu_items = [
        {
            'category': 'snack',
            'item_name': 'Onion Rings (1lb)',
            'price': '14',
            'description': 'Avocado green goddess'
        },
        {
            'category': 'snack',
            'item_name': 'Mezze Platter',
            'price': '12',
            'description': 'Hummus, house pickles, sweet peppers marinated olives & crudites'
        },
        {
            'category': 'snack',
            'item_name': 'WINGS 1LB / 2LB',
            'price': '22-34',
            'description': 'NAKED, HOT, 2 BIRDS BBQ, OR CAROLINA BBQ W/ CELERY, RANCH OR BLUE CHEESE'
        },
        {
            'category': 'snack',
            'item_name': 'Meat Platter',
            'price': '16',
            'description': 'Italian cured meats, bavarian pretzel beer mustard, pickles'
        },
        {
            'category': 'burger',
            'item_name': 'SMOKESTACK',
            'price': '25',
            'description': '8oz burger, brisket, onion rings, provolone, 2 birds BBQ'
        },
        {
            'category': 'burger',
            'item_name': '2 Birds Burger',
            'price': '25',
            'description': '8oz patty, lettuce, tomato, onion'
        },
    ];

    for (const item of menu_items) {
        let category = item.category;

        let menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        let item_name_ctr = document.createElement('div');
        item_name_ctr.classList.add('item');
        menu_item.appendChild(item_name_ctr);

        let item_name = document.createElement('h2');
        item_name.textContent = item.item_name;
        item_name_ctr.appendChild(item_name);

        let item_price = document.createElement('h2');
        item_price.textContent = item.price;
        item_name_ctr.appendChild(item_price);

        let item_desc_ctr = document.createElement('div');
        item_desc_ctr.classList.add('item-desc');
        menu_item.appendChild(item_desc_ctr);

        let item_desc = document.createElement('p');
        item_desc.textContent = item.description;
        item_desc_ctr.appendChild(item_desc);

        (category === 'snack') ? snack_card.appendChild(menu_item) : burger_card.appendChild(menu_item)
    }

    // Add the content div to the DOM
    document.body.appendChild(content_div);
};