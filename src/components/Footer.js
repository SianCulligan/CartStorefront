import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Footer() {
    const styles = {
        footer: {
            bottom: 0,
            top: "auto",
        }
    }
    return(
        <AppBar style = {styles.footer} position="fixed" color="default">
            <Toolbar>
                <Typography variant="h5">
                    Mischief Managed
                </Typography>
            </Toolbar>
        </AppBar>
        );
}

export default Footer;