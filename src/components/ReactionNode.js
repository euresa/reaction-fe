import React from "react";
import {svgSize} from "./MoleculeNode";

export const ReactionNode = ({nodeDatum}) => (
    <g>
        <foreignObject width={svgSize.x} height={svgSize.y} x={-100}>
            <div style={
                {border: "1px solid black",
                    backgroundColor: "lightcoral",
                    textAlign: "center",
                    wordWrap: "break-word"
                }
            }>
                REACTION: <br/>
                {nodeDatum.name}<br/>
            </div>
        </foreignObject>
    </g>
);
