import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CommonPage from "./components/CommonPage";
import StarterKit from "./components/StarterKit";
import Resources from "./components/Resources";
import ResourcesDetails from "./components/ResourcesDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route exact path="/:slugs" element={
            <>
              <Header showLogo={true} />
              <CommonPage />
            </>
          } />
          <Route exact path="/starterkit" element={
            <>
              <Header showLogo={true} />
              <StarterKit />
            </>
          } />
          <Route exact path="/resources" element={
            <>
              <Header showLogo={true} />
              <Resources />
            </>
          } />
          <Route exact path="/resources-details/:slugs" element={
            <>
              <Header showLogo={true} />
              <ResourcesDetails />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
