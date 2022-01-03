import { br, button, createRef, h1, render, span, _ } from "oikia";
import anime from "animejs";

const App = () => {
    const titleRef = createRef<HTMLHeadingElement>();
    const hexRef = createRef<HTMLSpanElement>();

    const hex = () => "#" + [...Array(6)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");

    const changeColour = () => {
        anime({
            targets: titleRef.current,
            duration: 200,
            easing: "easeOutQuad",
            color: hex(),
            update: (a) => hexRef.current.textContent = `Colour: ${a.animations[0].currentValue}`
        })
    }

    window.addEventListener(
        "DOMContentLoaded", 
        () => changeColour()
    );

    return (
        _( /* You can also use fragment (_ is the shorthand) */
            h1(
                { 
                    ref: titleRef,
                    style: {
                        color: "#000000"
                    }
                }, 
                "Hello World"
            ),
            span({ ref: hexRef }),
            br,
            button({ onClick: changeColour },
                "✨ Random Colour ✨"
            )
        )
    )
}

render(
    App, 
    document.getElementById("app")
);

