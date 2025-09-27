import {Component} from "react"

export default class App extends Component {
  render() {
    const isLoading = true

    if(isLoading) return <p>Loading ..</p>
    return (
      <ul>
        <li>
          <a href="https://www.google.com">
            <p> Go to Google</p>
          </a>
        </li>
      </ul>
    )
  }
}