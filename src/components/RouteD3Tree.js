import React, {useEffect, useState, useRef} from "react";
import Tree from 'react-d3-tree';
import {useStyles} from "./Main";
import {MoleculeNode, svgSize} from "./MoleculeNode";
import {ReactionNode} from "./ReactionNode";


const renderRectSvgNode = ({ nodeDatum }) => (
    nodeDatum.attributes.is_reaction ? (
        <ReactionNode nodeDatum={nodeDatum}/>
    ): <MoleculeNode nodeDatum={nodeDatum} />
);


export const RouteD3Tree = ({route}) => {
    const styles = useStyles();

    const [rootData, setRootData] = useState(null);
    const [translate, setTranslate] = useState({ x: svgSize.x*2, y: svgSize.y/2});

    const treeContainerRef = useRef();

    useEffect(() => {
        if (route) {
            const fetchRootData = async () => {
                const response = await fetch(`http://localhost:8000/routes/${route.id}`);
                const data = await response.json();
                setRootData(data);
            };
            fetchRootData();
        }
    }, [route]);

    useEffect(()=>{
        if (treeContainerRef.current){
            const dimensions = treeContainerRef.current.getBoundingClientRect();
            setTranslate({
                x: dimensions.width * 0.5,
                y: dimensions.height * 0.05,
            });
        }
    }, [treeContainerRef.current]);

    return (
        rootData ? (
            <div
                id="treeWrapper"
                className={styles.noSpace}
                ref={treeContainerRef}
            >
                <Tree
                    id={route.id}
                    data={rootData}
                    nodeSize={svgSize}
                    translate={translate}
                    orientation="verticle"
                    renderCustomNodeElement={renderRectSvgNode}
                    dimentions={{width: svgSize.x, height: svgSize.y}}
                    separation={{ siblings: 2, nonSiblings: 2 }}
                    depthFactor={300}
                />
            </div>
        ) : null
    );
};
