import React, { useRef, useEffect } from "react";
import {ladders} from "../../utils/ladders";
import './Canvas.css';
const Canvas = function({board, boardSizeConst}) {
    const canvas = useRef();
    let ctx = null;
 
    // initialize the canvas context
    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
 
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
    }, []);
    const drawLine = ({color,startPos,endPos}) => {
        ctx.beginPath();
        const sizeRatio = 1;
        ctx.moveTo(startPos.x + 25,startPos.y + 25);
        ctx.lineTo(endPos.x + 25,endPos.y + 25 );
      
        ctx.lineWidth = 15;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    useEffect(() => {
        ladders.forEach(ladder=>{
            //let start = 0;
            let startPos = {x:0,y:0};
            let endPos = {x:0,y:0};
            board.forEach(row=>{
              row.forEach(square=>{
                if (square.position === ladder.start) {
                  startPos.x = square.x * boardSizeConst;
                  startPos.y = square.y * boardSizeConst;
                }
                
                if (square.position === ladder.end) {
                  endPos.x = square.x * boardSizeConst;
                  endPos.y = square.y * boardSizeConst;
                }
              });
            });
            const isLadder = ladder.end > ladder.start;
            drawLine({color : isLadder ? "green" : "red",startPos,endPos});
        });
    }, [])
    return(
        <div className="canvas">
            <canvas ref={canvas} style={{width: boardSizeConst*board.length, height: boardSizeConst*board.length}}></canvas>
        </div>
    );
}

export default Canvas;