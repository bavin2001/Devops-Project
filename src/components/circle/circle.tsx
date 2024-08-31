import { useEffect } from "react";

import "./style.scss";

export default function Circle() {
    useEffect(() => {
        let mousePosX = 0,
            mousePosY = 0,
            mouseCircle = document.getElementById('mouse-circle')!;
        document.onmousemove = (e) => {
            mousePosX = e.pageX;
            mousePosY = e.pageY;
        }

        let delay = 6,
            revisedMousePosX = 0,
            revisedMousePosY = 0;
        function delayMouseFollow() {
            requestAnimationFrame(delayMouseFollow);
            revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
            revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
            mouseCircle.style.top = revisedMousePosY + 'px';
            mouseCircle.style.left = revisedMousePosX + 'px';
        }
        delayMouseFollow();
      }, []);
      return(
        <div id="mouse-circle"></div>
      );
}

// let circle = document.getElementById("mouse-circle")!;

// document.body.addEventListener("mousemove", function (e) {
//   circle.style.left = e.pageX + "px",
//     circle.style.top = e.pageY + "px";
// });