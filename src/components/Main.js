import React, {useState} from "react";
import {Routes} from "./Routes";
import {Row, Col, Container} from "react-bootstrap";
import {Header} from "./Header";
import {RouteD3Tree} from "./RouteD3Tree";
import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    tree: {
        width: '50em',
        height: '20em',
    },
    header: {
        textAlign:"center",
        background: "lightblue",
    },
    noSpace: {
        background: "1px solid black",
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0
    },
    fullSize: {
        width: "100vw",
        height: "100vh"
    },
    row1: {
        width: '100%',
        height: '13vh',
        margin: 0,
        padding: 0
    },
    row2: {
        width: '100%',
        height: '87vh',
        margin: 0,
        padding: 0
    },
    column: {
        height: '100%',
        overflow: 'auto',
        margin: 0,
        padding: 0
    },
    subColumn: {
        border: "1px solid black",
        width: '100%',
        height: '50%',
        overflow: 'auto',
        margin: 0,
        padding: 0
    },
    routes:{
        overflow: 'auto',
        background: "lightgray",
        width: '100%',
        height: '84vh',
        margin: 0,
        padding: 0
    },
    catalogTitle: {
        background: "lightgray",
        height: '3vh',
        width: "100%",
        marginLeft: "5px",
    },
    catalogsRows:{
        overflow: "auto",
        background: "lightgray",
        height: '10vh',
        width: "100%",
        marginLeft: "5px",
    },
    button: {
        width: '100%',
    },
    buttonDiv: {
        padding: "5px",
        margin: "m-1",
    }
});

export const Main = () => {
    const classes = useStyles()
    const [currentRoute, setCurrentRoute] = useState(null);

    return (
        <Container fluid>
            <Row className={classes.row1}><Header /></Row>
            <Row className={classes.row2}>
                <Col sm={4} className={classes.column}><Routes setCurrentRoute={setCurrentRoute}/></Col>
                <Col sm={8} className={classes.column}>
                    {currentRoute ? <RouteD3Tree route={currentRoute}/> : <div></div>}
                </Col>
            </Row>
        </Container>
    );
};
