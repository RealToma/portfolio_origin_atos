import Layout from "components/layout";
import PageHome from "pages/home";
import PageResume from "pages/resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<PageHome />} />
        <Route
          path={"intro"}
          element={
            <Layout>
              <PageResume />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
