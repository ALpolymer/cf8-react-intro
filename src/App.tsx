import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";

function App() {

    return (
        <>
            <ClassComponent/>
            <FunctionalComponent/>
            <ArrowFunctionalComponent/>
            <ArrowFunctionalComponentWithProps title={"I am an arrow functional components with props"}/>
            <ArrowFunctionalComponentWithProps title={"I am 2nd arrow functional components with props"}/>
        </>

    )
}

export default App;