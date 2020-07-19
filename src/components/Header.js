import React from 'react';
import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core';
import { ShoppingCartSharp } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    myBadge: {
        backgroundColor: 'transparent',
    },
});

function Header(props) {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography className='header' variant='h3'>Welcome to Diagon Alley</Typography>
                </Toolbar>
            </AppBar>

            <div>
                <Badge
                    badgeContent={0}
                    color='red'
                    className={props.classes.myBadge}
                >
                    <ShoppingCartSharp />
                </Badge>
            </div>
        </>
    );
}



export default withStyles(styles)(Header);