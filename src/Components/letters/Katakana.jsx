import React from 'react'
import { useState, useEffect } from 'react'
import './Hiragana.css'

function Katakana() {
  const katakana = [
    { romanji: 'a', katakana: 'ア' },
    { romanji: 'i', katakana: 'イ' },
    { romanji: 'u', katakana: 'ウ' },
    { romanji: 'e', katakana: 'エ' },
    { romanji: 'o', katakana: 'オ' },
    { romanji: 'ka', katakana: 'カ' },
    { romanji: 'ki', katakana: 'キ' },
    { romanji: 'ku', katakana: 'ク' },
    { romanji: 'ke', katakana: 'ケ' },
    { romanji: 'ko', katakana: 'コ' },
    { romanji: 'sa', katakana: 'サ' },
    { romanji: 'shi', katakana: 'シ' },
    { romanji: 'su', katakana: 'ス' },
    { romanji: 'se', katakana: 'セ' },
    { romanji: 'so', katakana: 'ソ' },
    { romanji: 'ta', katakana: 'タ' },
    { romanji: 'chi', katakana: 'チ' },
    { romanji: 'tsu', katakana: 'ツ' },
    { romanji: 'te', katakana: 'テ' },
    { romanji: 'to', katakana: 'ト' },
    { romanji: 'na', katakana: 'ナ' },
    { romanji: 'ni', katakana: 'ニ' },
    { romanji: 'nu', katakana: 'ヌ' },
    { romanji: 'ne', katakana: 'ネ' },
    { romanji: 'no', katakana: 'ノ' },
    { romanji: 'ha', katakana: 'ハ' },
    { romanji: 'hi', katakana: 'ヒ' },
    { romanji: 'fu', katakana: 'フ' },
    { romanji: 'he', katakana: 'ヘ' },
    { romanji: 'ho', katakana: 'ホ' },
    { romanji: 'ma', katakana: 'マ' },
    { romanji: 'mi', katakana: 'ミ' },
    { romanji: 'mu', katakana: 'ム' },
    { romanji: 'me', katakana: 'メ' },
    { romanji: 'mo', katakana: 'モ' },
    { romanji: 'ya', katakana: 'ヤ' },
    { romanji: 'yu', katakana: 'ユ' },
    { romanji: 'yo', katakana: 'ヨ' },
    { romanji: 'ra', katakana: 'ラ' },
    { romanji: 'ri', katakana: 'リ' },
    { romanji: 'ru', katakana: 'ル' },
    { romanji: 're', katakana: 'レ' },
    { romanji: 'ro', katakana: 'ロ' },
    { romanji: 'wa', katakana: 'ワ' },
    { romanji: 'wo', katakana: 'ヲ' },
    { romanji: 'n', katakana: 'ン' }
  ]

  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const [error, setError] = useState(false)

  const setRandomKatakana = () => {
    const randomIndex = Math.floor(Math.random() * katakana.length)
    setCurrent(randomIndex)
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (input.toLowerCase() === katakana[current].romanji) {
      const newStreak = streak + 1
      const newMaxStreak = newStreak > maxStreak ? newStreak : maxStreak

      setStreak(newStreak)
      setMaxStreak(newMaxStreak)
      setError(false)

      localStorage.setItem('katakanaStreak', newStreak)
      localStorage.setItem('katakanaMaxStreak', newMaxStreak)
    } else {
      const k = katakana[current].katakana
      const r = katakana[current].romanji

      setError(`Wrong! The correct answer for ${k} is ${r}`)
      setStreak(0)

      localStorage.setItem('katakanaStreak', 0)
    }

    setInput('')
    setRandomKatakana()
  }

  useEffect(() => {
    setRandomKatakana()
    setStreak(Number(localStorage.getItem('katakanaStreak')) || 0)
    setMaxStreak(Number(localStorage.getItem('katakanaMaxStreak')) || 0)
  }, [])

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1 className="quiz-title">Katakana Quiz</h1>

        <div>
          <p>{streak} / {maxStreak}</p>
        </div>
      </header>

      <div className="hiragana-letter">
        <p>{katakana[current].katakana}</p>
      </div>

      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            className="quiz-input"
          />
        </form>
      </div>

      {error && (
        <div className="error-box">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default Katakana