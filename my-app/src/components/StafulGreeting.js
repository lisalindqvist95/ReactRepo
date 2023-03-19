import React from "react";

class StatefulGreeting extends React.Component {
    remder() {
        return <h1>Hello from the stateful class component, {this.props.greeting}!</h1>
    }
}

export default StatefulGreeting;