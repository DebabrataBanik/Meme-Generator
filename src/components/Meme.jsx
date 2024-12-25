import Draggable from "react-draggable"

function Meme({
  topText,
  bottomText,
  imgUrl
}) {
  return (
    <div className="meme">
      <img src={imgUrl} alt="meme" />

      <Draggable>
        <h2 className="top">{topText}</h2>
      </Draggable>
      <Draggable>
        <h2 className="bottom">{bottomText}</h2>
      </Draggable>
    </div>
  )
}

export default Meme