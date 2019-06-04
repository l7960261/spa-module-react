import React from "react"
import { Link } from "@reach/router"

export default class Root extends React.Component {

  componentDidCatch(error, info) { }

  render() {
    return (<div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/ng1">AngularJs</Link> |{" "}
        <Link to="/ng1-mixin">AngularJs with legacy module</Link> |{" "}
        <Link to="/angular7">Angular7</Link>
      </nav>
    </div>)
  }
}