import React from 'react';
import { Toolbar, Typography} from '@material-ui/core';
import { connect } from 'react-redux';

// const styles = (theme) => ({
//     myBadge: {
//         backgroundColor: 'transparent',
//     },
// });

function Header(props) {
    return (
    <header> 
        <Toolbar>
            <Typography className='header' variant='h3'>Welcome to Diagon Alley</Typography>
        </Toolbar>
        <span>
            Cart: {props.cartCount}
        </span>
    </header>


        // <>
        //     <AppBar position='static'>
        //         
        //     </AppBar>

        //     <div>
        //         <Badge
        //             badgeContent={0}
        //             color='red'
        //             className={props.classes.myBadge}
        //         >
        //             <ShoppingCartSharp />
        //         </Badge>
        //     </div>
        // </>
    );
}

const mapStateToProps = (state) => {
    return {
        cartContents: state.cart.cartContents,
        cartCount: state.cart.cartCount,
    }
}



export default connect(mapStateToProps)(Header);