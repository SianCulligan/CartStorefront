import React from "react";
import {useEffect } from 'react'
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import * as actions from '../store/storeAction';
function Categories(props) {
    const { getCategories } = props;
  
  useEffect( () => {
    getCategories();
  }, [getCategories])
  
    let categoriesHTML = [];
  
    for (let i = 0; i < props.categoriesList.length; i++)
      categoriesHTML.push(
        <Button 
          color="default"
          key={i}
          onClick={(e) => {
          props.changeCategory(props.categoriesList[i].name)
          }}
        >
          {props.categoriesList[i].name || props.categoriesList[i].name}
        </Button>
      );
  
    return (
      <>
        <h1 style={{color: "default"}}>Our Categories</h1>
        {categoriesHTML }
      </>
    );
  }
  
  const mapStateToProps = state => ({
      categoriesList: state.categories.categoriesList,
    });
  
  const mapDispatchToProps = (dispatch, getState) => ({
    getCategories: (data) => dispatch( actions.getCategories(data) ),
    changeCategory: (payload) => dispatch( actions.changeCategory(payload) ),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);