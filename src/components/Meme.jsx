import Draggable from "react-draggable"
import { ResizableBox } from "react-resizable";

function Meme({
  imgUrl,
  textBlocks = [],
  updateText,
  updatePosition
}) {
  return (
    <div className="meme">
      <img src={imgUrl} alt="meme" />

      {
        textBlocks.map(block => {



          return (
            <Draggable
              key={block.id}
              defaultPosition={block.postion}
              onStop={data => updatePosition(block.id, { x: data.x, y: data.y })}
            >
              <div className="textBox__container">
                <textarea className="textBox"
                  type="text"
                  placeholder="inset text"
                  value={block.text}
                  onChange={(e) => {
                    updateText(block.id, e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}

                />
              </div>

            </Draggable>
          );
        })}
    </div>
  )
}

export default Meme