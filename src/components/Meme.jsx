function Meme({
  topText,
  bottomText,
  imgUrl
}) {
  return (
    <div className="meme">
      <img src={imgUrl} />
      <span className="top">{topText}</span>
      <span className="bottom">{bottomText}</span>
    </div>
  )
}

export default Meme