import React from 'react'
import './Kana.css'
import { Link } from 'react-router-dom'

function LettersPage() {
  return (
    <div>
      <div className='char'>
        <div className='Hiragana'>
          <Link to="/letters/Hiragana">Hiragana</Link>
        </div>

        <div className='Katakana'>
          <Link to="/letters/Katakana">Katakana</Link>
        </div>

        <div className='Kanji'>
          <Link to="/letters/Kanji">Kanji</Link>
        </div>
      </div>
    </div>
  )
}

export default LettersPage