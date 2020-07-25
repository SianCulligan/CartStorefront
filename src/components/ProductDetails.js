import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/storeAction';

function Details (props) {
    useEffect( () => {
        props.getOneProduct(props.match.params.id)
    }, [props]);

    return (
        <div>{props.product.name}</div>
    )
}

const mapStateToProps = (state) => { 
    return {
        product: state.products.activeProduct
    }
}

const mapDispatchToProps = (dispatch, getState) => ({
    getOneProduct: (id) => dispatch(actions.getOneProduct(id)),
})

export default connect (mapStateToProps, mapDispatchToProps)(Details);