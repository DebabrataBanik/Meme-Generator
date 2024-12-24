import trollface from '/troll-face.png'

function Header() {
  return (
    <header>
      <img src={trollface} />
      <h1>Meme Generator</h1>
    </header>
  )
}

export default Header