import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithTwoProps from "./components/ArrowFunctionalComponentWithTwoProps.tsx";
import Card from "./components/Card.tsx";

function App() {

    return (
        <>
            <ClassComponent/>
            <FunctionalComponent/>
            <ArrowFunctionalComponent/>
            <ArrowFunctionalComponentWithProps title={"I am an arrow functional components with props"}/>
            <ArrowFunctionalComponentWithProps title={"I am 2nd arrow functional components with props"}/>
            <ArrowFunctionalComponentWithTwoProps
                title={"I am an arrow functional components with  2 props"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vero?"}
            />
            
            <Card title={"I am card with children and props"}>
                <ArrowFunctionalComponentWithTwoProps
                    title={"I am an arrow functional components with  2 props"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vero?"}
                />
            </Card>
        </>

    )
}

export default App;