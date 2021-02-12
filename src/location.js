const locationLoad = (() => {
    const contentContainer = document.getElementById("tabContentContainer");

    const locationPage = document.createElement("div");
    locationPage.setAttribute("data-tab-content", "");
    locationPage.id="location";
    locationPage.classList.add("location");
    locationPage.innerHTML = `
        <div id="contactInfo">
        
            <h2 id="phoneNumber">Phone Number</h2>
            <h3>(XXX)-XXX-XXXX</h3>
            <h2 id="address">Address</h2>
            <h3>1234 Example St</h3>
            <h3>Pawnee, Indiana</h3>
            <h3>46204</h3>
            <h2 id="hours">Hours</h2>
            <div id="monSat">
            <h2>Mon-Sat</h2>
            <h4>7am-10pm</h4>
            </div>
            <div id="sun">
            <h2>Sunday</h2>
            <h4>9am - 8pm</h4>
            </div>


        </div>
        <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467042.20326808677!2d-86.36897033159967!3d39.73436573778994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57362a983649%3A0xe7996142636f2bcd!2sCity%20of%20Indianapolis!5e0!3m2!1sen!2sus!4v1611878424516!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>`;
    
    contentContainer.append(locationPage);
})();
export {locationLoad};