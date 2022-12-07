import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Game from "./pages/game/Game.jsx";
import Result from "./pages/result/Result.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Game/>,
            },
            {
                path: "/result",
                element: <Result/>,
            },
        ],
        errorElement: <h1 className={'not-found-error'}>Woops! Route not found :(</h1>
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
