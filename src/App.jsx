import React from "react";
import Loading from "./pages/Loading";
import "./App.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
    return (
        <React.Suspense fallback={<Loading />}>
            <HomePage />
        </React.Suspense>
    );
}

export default App;
