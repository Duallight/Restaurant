import {pageRender} from "./renderPage";
import { homeLoad } from "./home";
import {menuLoad} from "./menu";
import {locationLoad} from "./location";
import {aboutLoad} from "./about";


const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach(tab => {
    tab.classList.add("tab");
    tab.addEventListener("click", () => {
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        const target = document.querySelector(tab.dataset.tabTarget);
        target.classList.add("active");
        tab.classList.add("active");
    })
})
