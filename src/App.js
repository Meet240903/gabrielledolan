import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import StorytellingWorkshop from "./components/StorytellingWorkshop";

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
          <Route exact path="storytelling-workshops" element={
            <>
              <Header showLogo={true} />
              <StorytellingWorkshop />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
