import React from "react"
import { Link } from "@reach/router"

export default class Root extends React.Component {

  componentDidCatch(error, info) { }

  render() {
    return (<div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/ng1">AngularJs</Link> |{" "}
        <Link to="/mixin-ng1">AngularJs with legacy module</Link> |{" "}
        <Link to="/angular">Angular</Link>
      </nav>
    </div>)
  }
}