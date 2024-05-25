import handleEvents from "./modules/DOM/eventHandlers";
import getUserLocation from "./modules/APIs/geolocation";
import "./modules/DOM/fahrenheit";
import "./css/style.css";
handleEvents();
getUserLocation()