import React from "react";
import {useStyles} from "./Main";

export const Header = () => {
    const styles = useStyles();

    return (
    <header className={styles.header}>
      <h1>Reaction Route Exploration</h1>
    </header>
    );
};
