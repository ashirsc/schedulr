import App from "./App";
import { AppWrapper } from "./App.wrapper";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppWrapper>
            <App />
        </AppWrapper>
    </React.StrictMode>
);
