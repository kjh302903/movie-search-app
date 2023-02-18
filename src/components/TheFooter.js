import { Component } from "../core/heropy"

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: "footer"
        })
    }
    render() {
        this.el.innerHTML = /* html */`
            <div>
                <a href="https://github.com/kjh302903/movie-search-app">
                    GitHub Repository
                </a>
            </div>
            <div>
                <a href = "https://github.com/kjh302903">
                    ${new Date().getFullYear()}
                    HEROPY
                </a>
            </div>
        `
    }
}