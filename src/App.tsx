import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./pages/Home"));
const Article = lazy(() => import("./pages/Article"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atricles/:articleId" element={<Article />} />
      </Routes>
    </Suspense>
  );
}

export default App;
