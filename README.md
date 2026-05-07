# Manabu 学ぶ

A simple kanji flashcard app for learning Japanese. Built with React.

## What it does

- Browse JLPT N5 kanji decks
- Click a kanji to see its words and readings
- Login / logout flow with a protected dashboard

## Tech

- React + Vite
- React Router
- [kanjiapi.dev](https://kanjiapi.dev) for kanji data
- Vanilla CSS

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

## Demo login

```
Email:    student@manabu.com
Password: kanji123
```

## Project structure

```
src/
├── context/        # Auth state (AuthContext)
├── Components/     # Header, Folder, Flashcard, ProtectedRoute
├── Pages/          # DecksPage, FlashcardsPage, LoginPage
└── services/       # API calls to kanjiapi.dev
```
