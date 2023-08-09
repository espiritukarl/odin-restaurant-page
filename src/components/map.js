import { mapsrc } from "./data";

export const buildMap = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'map-container');
    const display = document.createElement('div');
    display.setAttribute('class', 'map-display');
    const frame = document.createElement('iframe');
    frame.setAttribute('class', 'map-frame');
    frame.setAttribute('src', mapsrc);
  
    display.appendChild(frame);

    return display
};