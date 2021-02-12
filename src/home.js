const homeLoad = (() => {
    const contentContainer = document.getElementById("tabContentContainer");

    const homePage = document.createElement("div");
    homePage.setAttribute("data-tab-content", "");
    homePage.id="home";
    homePage.classList.add("active");
    homePage.classList.add("home");
    homePage.innerHTML = `
        <h1>The Ultimate Calzone Experience!</h1>
        <h2>Come in and bring the whole Family!</h2>
        `;
    
    contentContainer.append(homePage);
})();
export {homeLoad};