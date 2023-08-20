import React from "react";

export const svgSize = {x: 200, y: 200}
export const MoleculeNode = ({nodeDatum}) => (
    /* Display HTML within the node by leveraging the foreignObject tag.
    I found this example here which helped a lot:
    https://codesandbox.io/s/rd3t-v2-custom-with-foreignobject-0mfj8?file=/src/App.js
    */
    <g>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject width={svgSize.x + 2} height={svgSize.y + 50} x={-100}>
            <div style={{ border: "1px solid black", backgroundColor: "#dedede"}}>
                <div style={{ textAlign: "center", wordWrap: "break-word"}}>{nodeDatum.name}</div>
                <div dangerouslySetInnerHTML={{ __html: nodeDatum.attributes.svg }} />
            </div>
        </foreignObject>
    </g>
);
