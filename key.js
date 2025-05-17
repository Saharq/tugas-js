import { dog } from "./dog.js";

export const checkDogKeyDown = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'x') {
            dog.sleep();
        } else if (e.key === 'm') {
            dog.default();
        } else if (e.key === 'ArrowRight') {
            dog.moveRight();
        } else if (e.key === 'ArrowLeft') {
            dog.moveLeft();
        } else if (e.key === 'ArrowDown') {
            dog.moveDown();
        } else if (e.key === 'ArrowUp') {
            dog.moveUp();
        }
    });
};