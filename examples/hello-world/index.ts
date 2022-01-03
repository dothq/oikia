import { createRef, div, h1, render } from "../../src";

const titleRef = createRef<HTMLHeadingElement>();

const App = () => {
    return (
        div(
            h1({ ref: titleRef }, "Hello World")
        )
    )
}

render(
    App, 
    document.getElementById("app")
);

