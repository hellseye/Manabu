import DecksPage from "./Pages/DecksPage";
import FlashcardPage from "./Pages/FlashcardsPage";
import LettersPage from "./Pages/LettersPage";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Hiragana from "./Components/letters/Hiragana";
import Katakana from "./Components/letters/Katakana";
import Kanji from "./Components/letters/Kanji";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user && <Header />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DecksPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deck/:char"
          element={
            <ProtectedRoute>
              <FlashcardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/letters"
          element={
            <ProtectedRoute>
              <LettersPage />
            </ProtectedRoute>
          }
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
