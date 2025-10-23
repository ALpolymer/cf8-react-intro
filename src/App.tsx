import Layout from "./components/Layout.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";

function App() {

    return (
        <>
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title={"I am an arrow functional components with props"}/>*/}
            {/*<ArrowFunctionalComponentWithProps title={"I am 2nd arrow functional components with props"}/>*/}
            {/*<ArrowFunctionalComponentWithTwoProps*/}
            {/*    title={"I am an arrow functional components with  2 props"}*/}
            {/*    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vero?"}*/}
            {/*/>*/}
            
            {/*<Card title={"I am card with children and props"}>*/}
            {/*    <ArrowFunctionalComponentWithTwoProps*/}
            {/*        title={"I am an arrow functional components with  2 props"}*/}
            {/*        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vero?"}*/}
            {/*    />*/}
            {/*</Card>*/}
            <Layout>
                <Header />
                <Main/>
                <Footer />
            </Layout>
        </>

    )
}

export default App;