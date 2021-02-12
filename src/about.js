const aboutLoad = (() => {
    const contentContainer = document.getElementById("tabContentContainer");

    const aboutPage = document.createElement("div");
    aboutPage.setAttribute("data-tab-content", "");
    aboutPage.id="about";
    aboutPage.classList.add("about");
    aboutPage.innerHTML = `
        <h2>Our Story</h2>
        <p>Here at the Low-Cal-Calzone-Zone, our motto is "Pizza? Never heard of it." because once you take your first bite of our handmade, made to order, wood fired
        calzones, you'll forget what pizza even is. We're a fast-casual dining experience like no other!</p>
        <p>Our ingredients come from local farms and ranches so we always have the freshest ingredients, and are always low fat. Up to 30% fewer calories than a full fat calzone!</p>
        <h3>The Calzone Master Himself:<h3>
        <img src="/src/images/benWyatt.gif" alt="Ben Wyatt">
        <p>***This is a fake restaurant for the purposes of broadening my web development skills. This site is inspired by an episode of Parks and Recreation.</p>`;
    
    contentContainer.append(aboutPage);
})();
export {aboutLoad};