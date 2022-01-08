import Oikia, { button, code, createRef, div, h1, h4, html, input, RefObject, render, small, span, _ } from "../../src";

const Title = ({ ref, text }: { ref: RefObject<HTMLHeadingElement>, text: string }) => {
    return (
        h1({ ref }, `${text} 👋`)
    )
}

class Subtitle extends Oikia.Component {
    public constructor(props: { ref: RefObject<HTMLHeadingElement>, text: string }) {
        super(props);
    }

    public render() {
        return (
            h4({ ref: this.props.ref }, `${this.props.text} 👋`)
        )
    }
}

const App = () => {
    const titleRef = createRef<HTMLHeadingElement>();
    const subtitleRef = createRef<HTMLHeadingElement>();

    const onInputChange = (e: any) => {
        titleRef.current.textContent = `${e.target.value} 👋`;
        subtitleRef.current.textContent = `${e.target.value} 👋`;
    }

    return (
        _(
            input({ onChange: onInputChange }),
            Title({ text: "Hello world", ref: titleRef }),
            html(Subtitle, { text: "Hello subtitle", ref: subtitleRef })
        )
    )
}

render(
    App,
    document.getElementById("app")
)