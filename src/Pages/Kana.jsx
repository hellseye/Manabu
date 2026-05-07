import React from 'react'
import Kanji from '../Components/letters/Kanji'
import Katakana from '../Components/letters/Katakana'
import Hiragana from '../Components/letters/Hiragana'
import './Kana.css'

function Kana() {
  return (
    <div>
      <div className='char'>
        <div className='Hiragana'>Hiranga</div>
        <div className='Katakana'>Katakana</div>
        <div className='Kanji'>Kanji</div>
      </div>
    </div>
  )
}

export default Kana