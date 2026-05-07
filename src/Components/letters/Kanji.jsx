import React from 'react'
import { useState, useEffect } from 'react'
import './Hiragana.css'

function Kanji() {
  const kanji = [
    { kanji: '一', meaning: 'one' },
    { kanji: '二', meaning: 'two' },
    { kanji: '三', meaning: 'three' },
    { kanji: '四', meaning: 'four' },
    { kanji: '五', meaning: 'five' },
    { kanji: '六', meaning: 'six' },
    { kanji: '七', meaning: 'seven' },
    { kanji: '八', meaning: 'eight' },
    { kanji: '九', meaning: 'nine' },
    { kanji: '十', meaning: 'ten' },
    { kanji: '日', meaning: 'sun/day' },
    { kanji: '月', meaning: 'moon/month' },
    { kanji: '火', meaning: 'fire' },
    { kanji: '水', meaning: 'water' },
    { kanji: '木', meaning: 'tree/wood' },
    { kanji: '金', meaning: 'gold/money' },
    { kanji: '土', meaning: 'earth/soil' },
    { kanji: '山', meaning: 'mountain' },
    { kanji: '川', meaning: 'river' },
    { kanji: '田', meaning: 'rice field' },
    { kanji: '人', meaning: 'person' },
    { kanji: '口', meaning: 'mouth' },
    { kanji: '目', meaning: 'eye' },
    { kanji: '耳', meaning: 'ear' },
    { kanji: '手', meaning: 'hand' },
    { kanji: '女', meaning: 'woman' },
    { kanji: '男', meaning: 'man' },
    { kanji: '子', meaning: 'child' },
    { kanji: '学', meaning: 'study' },
    { kanji: '校', meaning: 'school' },
    { kanji: '上', meaning: 'up' },
    { kanji: '下', meaning: 'down' },
    { kanji: '中', meaning: 'middle' },
    { kanji: '大', meaning: 'big' },
    { kanji: '小', meaning: 'small' },
    { kanji: '左', meaning: 'left' },
    { kanji: '右', meaning: 'right' },
    { kanji: '東', meaning: 'east' },
    { kanji: '西', meaning: 'west' },
    { kanji: '南', meaning: 'south' },
    { kanji: '北', meaning: 'north' },
    { kanji: '白', meaning: 'white' },
    { kanji: '黒', meaning: 'black' },
    { kanji: '赤', meaning: 'red' },
    { kanji: '青', meaning: 'blue' },
    { kanji: '天', meaning: 'sky/heaven' },
    { kanji: '雨', meaning: 'rain' },
    { kanji: '雪', meaning: 'snow' },
    { kanji: '風', meaning: 'wind' },
    { kanji: '花', meaning: 'flower' },
    { kanji: '草', meaning: 'grass' },
    { kanji: '犬', meaning: 'dog' },
    { kanji: '猫', meaning: 'cat' },
    { kanji: '上', meaning: 'up' },
    { kanji: '下', meaning: 'down' },
    { kanji: '中', meaning: 'inside/middle' },
    { kanji: '外', meaning: 'outside' },
    { kanji: '左', meaning: 'left' },
    { kanji: '右', meaning: 'right' },
    { kanji: '前', meaning: 'front/before' },
    { kanji: '後', meaning: 'back/after' },
    { kanji: '東', meaning: 'east' },
    { kanji: '西', meaning: 'west' },
    { kanji: '南', meaning: 'south' },
    { kanji: '北', meaning: 'north' },
    { kanji: '入', meaning: 'enter' },
    { kanji: '出', meaning: 'exit' },
    { kanji: '立', meaning: 'stand' },
    { kanji: '休', meaning: 'rest' },
    { kanji: '見', meaning: 'see' },
    { kanji: '聞', meaning: 'hear/ask' },
    { kanji: '話', meaning: 'speak/talk' },
    { kanji: '読', meaning: 'read' },
    { kanji: '書', meaning: 'write' },
    { kanji: '行', meaning: 'go' },
    { kanji: '来', meaning: 'come' },
    { kanji: '帰', meaning: 'return' },
    { kanji: '食', meaning: 'eat/food' },
    { kanji: '飲', meaning: 'drink' },
    { kanji: '買', meaning: 'buy' },
    { kanji: '売', meaning: 'sell' },
    { kanji: '会', meaning: 'meet' },
    { kanji: '作', meaning: 'make' },
    { kanji: '使', meaning: 'use' },
    { kanji: '持', meaning: 'hold' },
    { kanji: '待', meaning: 'wait' },
    { kanji: '開', meaning: 'open' },
    { kanji: '閉', meaning: 'close' },
    { kanji: '始', meaning: 'begin' },
    { kanji: '終', meaning: 'end' },
    { kanji: '高', meaning: 'high/expensive' },
    { kanji: '安', meaning: 'cheap/peaceful' },
    { kanji: '大', meaning: 'big' }
  ]

  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const [error, setError] = useState(false)

  const setRandomKanji = () => {
    const randomIndex = Math.floor(Math.random() * kanji.length)
    setCurrent(randomIndex)
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (input.toLowerCase() === kanji[current].meaning.toLowerCase()) {
      const newStreak = streak + 1
      const newMaxStreak = newStreak > maxStreak ? newStreak : maxStreak

      setStreak(newStreak)
      setMaxStreak(newMaxStreak)
      setError(false)

      localStorage.setItem('kanjiStreak', newStreak)
      localStorage.setItem('kanjiMaxStreak', newMaxStreak)
    } else {
      const k = kanji[current].kanji
      const m = kanji[current].meaning

      setError(`Wrong! The correct answer for ${k} is ${m}`)
      setStreak(0)

      localStorage.setItem('kanjiStreak', 0)
    }

    setInput('')
    setRandomKanji()
  }

  useEffect(() => {
    setRandomKanji()
    setStreak(Number(localStorage.getItem('kanjiStreak')) || 0)
    setMaxStreak(Number(localStorage.getItem('kanjiMaxStreak')) || 0)
  }, [])

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1 className="quiz-title">Kanji Quiz</h1>

        <div>
          <p>{streak} / {maxStreak}</p>
        </div>
      </header>

      <div className="hiragana-letter">
        <p>{kanji[current].kanji}</p>
      </div>

      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
            className="quiz-input"
            placeholder="meaning"
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

export default Kanji