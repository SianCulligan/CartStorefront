import React from 'react'; 
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

import {Typography, Card, CardContent} from "@material-ui/core";
import * as actions from '../store/storeAction.js';

function Header(props) {
    let cartItems = [];

    const styles ={
        cart: {
            width: "12vw",
            height: "100vh",
            postition: "fixed",
            top: 0,
            right: 0,
        },

         cartItems: {
             fontSIze: ".75rem",
             listStyleType: "none",
             margin: "0",
             padding: "0"
         },
          item: {
            display: "flex",
          }
    }

if(props.cartContents) {
    props.cartContents.forEach((item, idx) => {
        cartItems.push(
            <li style={styles.item} key={idx}>
                {item.name}
                <Button
                size="small"
                color="primary"
                onCLick={(e) => {props.removeFromCart(idx)}}
                >
                   X
                </Button>
            </li>
        )
    })
}
    

return (
    <Card style = {styles.cart}>
        <CardContent>
            <Typography 
            gutterBottom variant="h5" 
            component="h2">
            Cart  
            </Typography> 
            <ul style={styles.cartItems}>
                {cartItems}
            </ul>
        </CardContent>
    </Card>
);
}

const mapStateToProps = (state) => {
    return {
        cartContents: state.cart.cartContents,
        cartCount: state.cart.cartCount,
    }
};

const mapDispatchToProps = (dispatch, getState) => ({
    removeFromCart: (idx) => dispatch( actions.removeFromCart(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);