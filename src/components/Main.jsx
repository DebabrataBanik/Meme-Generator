import { useState, useEffect } from 'react'
import Meme from './Meme'

function Main() {

  const [meme, setMeme] = useState({
    topText: 'top text',
    bottomText: 'bottom text',
    imgUrl: 'http://i.imgflip.com/1bij.jpg'
  })

  const [memeArr, setMemeArr] = useState([])

  const handleChange = e => {
    const { value, name } = e.currentTarget
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value // this js feature is called Computed property names
    }))
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemeArr(data.data.memes))
  }, [])

  const changeMemeImg = () => {
    const rdnIdx = Math.floor(Math.random() * memeArr.length)
    const newMemeImg = memeArr[rdnIdx].url
    console.log(newMemeImg)
    setMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: memeArr[rdnIdx].url
    }))
  }

  return (
    <main className='main'>
      <section className='form'>
        <div className='left'>
          <label htmlFor="top">Top text</label>

          <input
            type="text"
            id="top"
            name='topText'
            placeholder='Shut up'
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div className='right'>
          <label htmlFor="bottom">Bottom text</label>
          <input
            type="text"
            id="bottom"
            name='bottomText'
            placeholder='And take my money'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={changeMemeImg} className='submit'>Get a new meme image</button>

      </section>

      <Meme {...meme} />
    </main>
  )
}

export default Main