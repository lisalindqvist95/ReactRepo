import React from "react";

//L: standard function below:
//function FunctionalGreetingWithProps() {
//    return <h1>Hello from React!</h1>
//}:

//L: arrow function below:
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Helloo React! {props.greeting}</h1>;
}
export default FunctionalGreetingWithProps;