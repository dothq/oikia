import Oikia, { button, code, createRef, div, h1, input, render, small, span } from "../../src";

if(!localStorage.getItem("innerhtml")) {
    localStorage.setItem("innerhtml", "true");
}

Oikia.config({ 
    allowInnerHTML: localStorage.getItem("innerhtml") == "true" ? true : false
});

const titleRef = createRef<HTMLHeadingElement>();

const onInputChange = (e: any) => titleRef.current.innerHTML = e.target.value;

const App = (
    div({ style: "display: flex;flex-direction: column;" },
        h1(
            "XSS Demo: ",
            span({ ref: titleRef })
        ),
        input({ 
            placeholder: "Enter any input!", 
            onKeyUp: onInputChange
        }),
        small({ style: "display: flex;gap:0.3rem;align-items: center;" },
            "Try pasting something like",
            code(`<img src="" onerror="alert('XSS!')">`),
            " and check the console. Oikia by default prevents innerHTML from being modified so your app is protected from XSS."
        ),
        button(
            { 
                onClick: () => {
                    localStorage.setItem(
                        "innerhtml", 
                        localStorage.getItem("innerhtml") == "true" 
                            ? "false"
                            : "true"
                    );
                    window.location.reload();
                } 
            },
            `InnerHTML is ${localStorage.getItem("innerhtml") == "true" 
                ? "Enabled" 
                : "Disabled"}. Click to ${localStorage.getItem("innerhtml") == "true" 
                    ? "Disable" 
                    : "Enable"}!`
        ),
        small({ style: "display: flex;gap:0.3rem;align-items: center;" },
            "Since",
            code("allowInnerHTML"),
            "cannot be changed at runtime, we need to reinitialise the app by reloading."
        ),
    )
)

console.log(titleRef)

render(App, document.getElementById("app"));