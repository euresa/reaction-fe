import React, {useEffect, useState} from "react";
import {Button, Row} from "react-bootstrap";
import {createUseStyles} from "react-jss";
import {SearchBar} from "./SearchBar";
import {CatalogPicker} from "./CatalogPicker";


const useRoutesStyles = createUseStyles({
  routes:{
    overflow: 'auto',
    background: "lightgray",
    width: '100%',
    height: '84vh',
    margin: 0,
    padding: 0
  },
  button: {
    textAlign: "left",
    width: '95%',
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
    margin: "m-1",
  }
});

export const Routes = ({setCurrentRoute}) => {
  const styles = useRoutesStyles();
  const [routes, setRoutes] = useState([]);
  const [search, setSearch] = useState("");
  const [catalogs, setCatalogs] = useState([]);

  const fetchRoutes = async (search, catalogs) => {
    const response = await fetch(
        `http://localhost:8000/routes?search=${search}&catalog_ids=${catalogs.join(',')}`
    );
    const newRoutes = await response.json();
    setRoutes(newRoutes);
  };

  useEffect(() => {
    fetchRoutes(search, catalogs);
  }, [search, catalogs]);

  return (
      <>
        <Row ><h4>Routes (n={routes.length})</h4></Row>
        <Row><CatalogPicker catalogs={catalogs} setCatalogs={setCatalogs}/></Row>
        <Row styles={{height: "5%"}}>
          <div>
            <SearchBar search={search} setSearch={setSearch}/>
          </div>
        </Row>
        <Row styles={{height: "80%"}}>
        <div className={styles.routes}>
          {routes.map((route) => (
              <div className={styles.buttonDiv}>
                <Button
                    id={route.id}
                    className={styles.button}
                    onClick={() => setCurrentRoute(route)}
                    variant='light'
                >
                  {route.name}
                </Button>
              </div>
          ))}
        </div>
      </Row>
      </>
  );
};
