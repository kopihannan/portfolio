import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/contact', element: <Contact></Contact>
            },
            {
                path: '/projects', element: <Projects></Projects>
            }
        ]
    }
])

export default router;