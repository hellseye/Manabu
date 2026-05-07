import { useEffect, useState } from "react";
import DecksPage from "./Pages/DecksPage";
import FlashcardPage from "./Pages/FlashcardsPage";
import Kana from "./Pages/Kana";
import Header from "./Components/Header";
import {createBrowserRouter , RouterProvider} from "react-router-dom"

function App() {
  const [view, setView] = useState("deck");
  const [selectedChar, setSelectedChar] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {view === "deck" ? (
            <DecksPage setView={setView} setSelectedChar={setSelectedChar} />
          ) : (
            <FlashcardPage setView={setView} selectedChar={selectedChar} />
          )}
        </>
      )
    },
    {
      path: "/pages/kana",
      element: (
        <>
          <Header />
          <Kana />
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
