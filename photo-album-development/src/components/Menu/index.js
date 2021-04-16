import { Grid, makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import React from 'react';

const createClasses = makeStyles((theme) => ({
    paper: {
        width: '100%'
    },
    tabIndicator: {
        backgroundColor: "green"
    }
}));

const Menu = ({ value, tabs, handleChange }) => {
    const classes = createClasses();

    return (
        <Grid container item xs={12}>
            <Paper className={classes.paper} style={{ backgroundColor: 'LavenderBlush' }}>
                <Tabs
                    value={value}
                    onChange={(_, value) => handleChange(value)}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    classes={{ indicator: classes.tabIndicator }}
                >
                    {
                        tabs.map((tab, index) => <Tab label={tab.title} key={index} />)
                    }
                </Tabs>
            </Paper>
        </Grid>
    )
}

export default Menu;