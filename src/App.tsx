import Layout from "./components/Layout.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";

function App() {

    return (
        <>
            <Layout>
                <Header />
                <Main/>
                <Footer />
            </Layout>
        </>

    )
}

export default App;