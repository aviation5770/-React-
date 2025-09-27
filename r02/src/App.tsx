import {Component} from "react"

export default class App extends Component {
  render() {
    const isLoading = true
    const children = isLoading ? (
      <p>Loading ..</p>
    ) : (
      <ul>
        <li>
          <a href="https://www.google.com">
            <p> Go to Google</p>
          </a>
        </li>
      </ul>
    )
    return children
  }
}