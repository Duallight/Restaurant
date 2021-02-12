const pageRender = (() => {
    const contentContainer = document.getElementById("content");

    const header = document.createElement("div");
    header.innerHTML = `
    <h1 class = "resName">Low-Cal-Calzone-Zone</h1>
    <ul class = "tabs">
        <li data-tab-target="#home" class="active tab">Home</li>
        <li data-tab-target="#about">About</li>
        <li data-tab-target="#menu">Menu</li>
        <li data-tab-target="#location">Contact Us</li>
        
    </ul>
    <div class="tab-content" id="tabContentContainer">
    </div>`;
    contentContainer.appendChild(header);
})();
export {pageRender};