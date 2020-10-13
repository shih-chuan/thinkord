import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Tab.module.scss';

const Tab = (props) => (
    <NavLink to={props.linkTo} className={classes.Tab} activeClassName={classes.active}>
        <div className={classes.TabTitle}>
            <i className="fas fa-file" style={{fontSize: '14px'}}></i>
            <p>{props.title}</p> 
        </div>
        <div className={classes.TabClose}>
            <i className="fas fa-times" style={{fontSize: '14px'}}></i>
        </div>
    </NavLink>
)

export default Tab;