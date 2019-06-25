import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.scss";
class App extends React.Component {
    render() {
        return <h1 className={styles.heading}>Hello Kitty !!! </h1>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
