import Footer from "./common/footer"
import Header from "./common/header"
function Layout({children}) {
    return (
        <>

            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
