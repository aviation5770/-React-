import {Component} from "react"

export default class App extends Component {
  render() {
    const isLoading = true
    const children = (
      <ul>
        <li>
          <a href="https://www.google.com">
            <p> Go to Google</p>
          </a>
        </li>
      </ul>
    )
    return (
      <div>
        {isLoading && <p>Loading ..</p>}
        {!isLoading && children}
      </div>
    )
  }
}