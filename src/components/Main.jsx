import { useState, useEffect } from 'react'
import Meme from './Meme'

function Main() {

  const [memeArr, setMemeArr] = useState([])

  const [meme, setMeme] = useState({
    imgUrl: 'http://i.imgflip.com/1bij.jpg',
    textBlocks: [
      {
        id: 1,
        text: 'text',
        postion: { x: 50, y: 10 }
      },
      {
        id: 2,
        text: 'text',
        postion: { x: 50, y: 50 }
      }
    ]
  })

  const addTextBlock = () => {
    if (meme.textBlocks.length < 5) {
      setMeme(prevMeme => (
        {
          ...prevMeme,
          textBlocks: [
            ...prevMeme.textBlocks,
            {
              id: Date.now(),
              text: 'text',
              postion: { x: 50, y: 0 }
            }
          ]
        }
      ))
    } else {
      alert('You can only add upto 5 text blocks!')
    }
  }

  const updateText = (id, newText) => {
    setMeme(prevMeme => ({
      ...prevMeme,
      textBlocks: prevMeme.textBlocks.map(block => block.id === id ? {
        ...block,
        text: newText
      } : block)
    }))
  }

  const updatePosition = (id, newPosi) => {
    setMeme(prevMeme => ({
      ...prevMeme,
      textBlocks: prevMeme.textBlocks.map(block => block.id === id ? {
        ...block,
        position: newPosi
      } : block)
    }))
  }

  const deleteTextBlock = id => {
    setMeme(prevMeme => ({
      ...prevMeme,
      textBlocks: prevMeme.textBlocks.filter(block => block.id !== id)
    }))
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemeArr(data.data.memes))
  }, [])

  const changeMemeImg = () => {
    const rdnIdx = Math.floor(Math.random() * memeArr.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: memeArr[rdnIdx].url
    }))
  }

  return (
    <main className='main'>
      <section className='form'>

        <button onClick={changeMemeImg} className='submit'>Get a new meme image</button>

      </section>


      <Meme
        imgUrl={meme.imgUrl}
        textBlocks={meme.textBlocks}
        updateText={updateText}
        updatePosition={updatePosition}
        deleteTextBlock={deleteTextBlock}
      />
      <button onClick={addTextBlock} className='add'>Add Text Block</button>
    </main>
  )
}

export default Main