import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'portfolio/',
                element: <PortfolioPage />
            },
            {
                path: 'contact/',
                element: <ContactPage />
            },
        ],
        errorElement: <ErrorPage />
    },
]);

export default router;