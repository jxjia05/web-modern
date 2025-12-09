import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
    return (
        <>
        <header>My Application</header>
            <Nav />
            <main>
                <Outlet />
            </main>
        <footer>© 2025 My Application</footer>      
        </>
    )
}
export default Layout;