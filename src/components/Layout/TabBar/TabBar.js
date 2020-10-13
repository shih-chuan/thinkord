import React from 'react';
import Tab from './Tab/Tab';
import { NavLink } from 'react-router-dom';
import classes from './TabBar.module.scss';

const TabBar = () => {
    return (
        <div className={classes.TabBar}>
            <NavLink to='/' exact className={classes.HomeBtn} activeClassName={classes.active}> 
                <i class="fas fa-home"></i>
            </NavLink>
            <Tab linkTo='/work/collection-1' title='to-do'/>
            <Tab linkTo='/work/collection-2' title='Hello World'/>
            <Tab linkTo='/work/collection-3' title='Hello world222222222222'/>
        </div>
    )
}

export default TabBar;