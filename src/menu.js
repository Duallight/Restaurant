const menuLoad = (() => {
    const contentContainer = document.getElementById("tabContentContainer");

    const menuPage = document.createElement("div");
    menuPage.setAttribute("data-tab-content", "");
    menuPage.classList.add("menu");
    menuPage.id="menu";
    menuPage.innerHTML = `
        <div class = "section">
        <h1>Breakfast - Served daily from 7 - 10 am.</h1>
        <dl>
            <dt>French Press Coffee</dt>
            <dd>Fresh ground coffee made using a french press. Served with sides of cream and sugar</dd>
            <dt>Breakfast Calzone</dt>
            <dd>A wood fired calzone filled with eggs, sausage, bacon, bell peppers, and your choice of cheese. Served with your choice of fruit</dd>
        </dl>
        </div>
        <div class = "section">
        <h1>Lunch Combo's - Available from 11 am - 3pm</h1>
        <h3>Served with a drink and your choice of side dish</h3>
        <dl>
            <dt>Create Your Own</dt>
            <dd>Create your own calzone with up to 5 ingredients</dd>
            <dt>Sausage and Mushroom Calzone</dt>
            <dd>Three types of fresh ground sausage, mozzarella and ricotta cheese with fresh shiitake mushrooms</dd>
            <dt>Lunch for 2</dt>
            <dd>Two create your own calzones, served with a pitcher of your drink choice, and two sides</dd>
            
        </dl>
        </div>
        <div class = "section">
        <h1>Dinner - Available from 3pm to close</h1>
        <dl>
            <dt>Carnivore Calzone</dt>
            <dd>Our Signature coal fired calzone, filled with 5 meats, and your choice of cheese</dd>
            <dt>Herbivore Calzone</dt>
            <dd>Coal fired calzone, filled with fresh, organic vegetables and your choice of cheese</dd>
            <dt>Supreme Calzone</dt>
            <dd>Coal Fired Calzone, filled with Sausage, Bacon, Pepporoni, Mushrooms, Olives, Mozzarella, and Ricotta cheese</dd>
            <dt>The Swanson</dt>
            <dd>Our Carnivore Calzone, wrapped in thick-cut, hickory-smoked bacon, then battered and deep fried. <br> *Not Low Cal. Must sign health waiver prior to ordering</dt>
        </dl>
        </div>
        <div class="section">
            <h1>Kids Menu</h1>
            <h3>Served with apple slices and juice</h3>
            <dl>
                <dt>Ham & Cheese Calzone</dt>
                <dd>Simple Ham & Cheese Calzone in a kids size.</dd>
                <dt>Just Cheese</dt>
                <dd>kids size calzone filled with cheddar cheese.</dd>
                <dt>"I'm Not Hungry"</dt>
                <dd>Three Mozzarella sticks and dipping sauce.</dd>
            </dl>
        </div>
        <div class ="section">
        <h1>Drinks</h1>
        <ul class="drinksList">
            <li>Coke</li>
            <li>Dr. Pepper</li>
            <li>Iced Tea</li>
            <li>Domestic Beer</li>
            <li>White Wine</li>
            <li>Red Wine</li>
            <li>Signature Cocktail</li>
        </ul>
        </div>
        `
            ;
    
    contentContainer.append(menuPage);
})();
export {menuLoad};