import DecksPage from "./Pages/DecksPage";
import FlashcardPage from "./Pages/FlashcardsPage";
import LettersPage from "./Pages/LettersPage";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

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
      </Routes>
    </>
  );
}

export default App;
