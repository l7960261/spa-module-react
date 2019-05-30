import React from "react"
import { Link } from "@reach/router"

export default class Root extends React.Component {

  render() {
    return (<div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/app1">App1</Link> |{" "}
        <Link to="/app2">App2</Link>
      </nav>
    </div>)
  }
}