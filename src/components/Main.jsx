import { useState } from 'react'
import Meme from './Meme'

function Main() {

  const [meme, setMeme] = useState({
    topText: 'one does not simply',
    bottomText: 'walk into mordor',
    imgUrl: 'http://i.imgflip.com/1bij.jpg'
  })

  return (
    <main className='main'>
      <form className='form'>
        <div className='left'>
          <label htmlFor="top">Top text</label>
          <input type="text" id="top" name='top-text' placeholder='Shut up' />
        </div>
        <div className='right'>
          <label htmlFor="bottom">Bottom text</label>
          <input type="text" id="bottom" name='bottom-text' placeholder='And take my money' />
        </div>
        <button className='submit'>Get a new meme image</button>

      </form>

      <Meme {...meme} />
    </main>
  )
}

export default Main