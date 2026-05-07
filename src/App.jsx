import { useEffect, useState } from "react";
import DecksPage from "./Pages/DecksPage";
import FlashcardPage from "./Pages/FlashcardsPage";
import LettersPage from "./Pages/LettersPage";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Hiragana from "./Components/letters/Hiragana";
import Katakana from "./Components/letters/Katakana";
import Kanji from "./Components/letters/Kanji";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<DecksPage  />}
        />
        <Route
          path="/deck/:char"
          element={<FlashcardPage />}
        />
        <Route
          path="/letters"
          element={<LettersPage />}
        />
        <Route path="/letters/Hiragana" 
          element={<Hiragana />} 
        />
        <Route path="/letters/Katakana" 
          element={<Katakana />} 
        />
        <Route path="/letters/Kanji" 
          element={<Kanji />} 
        />
      </Routes>
    </>
  );
}

export default App;
