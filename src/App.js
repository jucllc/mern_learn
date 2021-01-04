import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import logo from './images/EBO Logo Black.png'
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={logo} alt="Mr. Ebo" height="60" />
                <Typography className={classes.heading} variant="h3" align="center">From Sea to Table</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};

export default App;
