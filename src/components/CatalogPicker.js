import React, {useEffect, useState} from "react";
import {InputGroup, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useStyles} from "./Main";


export const CatalogPicker = ({catalogs, setCatalogs}) => {
    const styles = useStyles();
    const [allCatalogs, setAllCatalogs] = useState([])

    const fetchCatalogs = async (search, catalogs, reverse) => {
        const response = await fetch(
            `http://localhost:8000/catalogs`
        );
        const allCatalogs = await response.json();
        setAllCatalogs(allCatalogs);
    };

    useEffect(()=>{
        fetchCatalogs()
    }, []);

    const toggleCatalog = (catalog) => {
        if (catalogs.includes(catalog.id)){
            setCatalogs(catalogs.filter(id => id !== catalog.id));
        } else {
            setCatalogs([...catalogs, catalog.id]);
        }
    };

    return (
        <div>
            <div className={styles.catalogTitle}>Catalogs</div>
            <div className={styles.catalogsRows}>
                <Form>
                    {allCatalogs.map((catalogData)=>(
                        <div key="default-checkbox">
                            <Form.Check
                                type={"checkbox"}
                                id={catalogData.id}
                                label={catalogData.name}
                                onClick={() => toggleCatalog(catalogData)}
                            />
                        </div>
                    ))}
                </Form>
            </div>
        </div>
    );
};