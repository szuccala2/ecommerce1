import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import { prodotti } from './prodotti';

export default function ActionAreaCard() {
    const [toggle, setToggle] = useState("all");
    const [search, setSearch] = useState("");

    const prodFilter = (value) => {
        switch(toggle) {
            case "all":
                return value.name.toLowerCase().includes(search.toLowerCase());
            case "stock":
                return (value.availability.stock>0 && 
                    value.name.toLowerCase().includes(search.toLowerCase()));
            default:
                return (value.availability.stock<=0 && 
                    value.name.toLowerCase().includes(search.toLowerCase()));
        }
    }

    return (
        <div>
            <Header cerca={(text) => {setSearch(text)}} 
                toggle={(stock) => {toggle==stock ? setToggle("all") : setToggle(stock)}} /><br/>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {prodotti && prodotti.filter(prodFilter).map((prod,index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <Product prod={prod} det={false} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}