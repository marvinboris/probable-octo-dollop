import { ScrollToTop } from "./components";
import "./index.css";
import { LayoutApp } from "./layouts";
import AppRoutes from "./routes";
import "./services/i18n";
import store from "./store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("app") || document.body).render(
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <LayoutApp>
                <BrowserRouter>
                    <React.StrictMode>
                        <ScrollToTop />
                        <AppRoutes />
                    </React.StrictMode>
                </BrowserRouter>
            </LayoutApp>
        </Provider>
    </QueryClientProvider>
);
