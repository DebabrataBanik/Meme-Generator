import Draggable from "react-draggable"
import { ResizableBox } from "react-resizable";

function Meme({
  imgUrl,
  textBlocks = [],
  updateText,
  updatePosition,
  deleteTextBlock,
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
                  placeholder="insert text"
                  value={block.text}
                  onChange={(e) => {
                    updateText(block.id, e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
                <button
                  className="delete"
                  onClick={() => deleteTextBlock(block.id)}
                >
                  &#x2715;
                </button>

              </div>

            </Draggable>
          );
        })}
    </div>
  )
}

export default Meme