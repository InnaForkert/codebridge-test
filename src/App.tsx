import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./pages/Home"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
