import React, { useContext, useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { StoreContext } from '../context'
import Collection from '../components/Collection/Collection'
import {Button } from '@material-ui/core'


const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        // background: 'grey'
    }
}))
const Work = ({ match }) => {
    const classes = useStyle()
    // const [collectionId] = useState(match.params.id)
    const context = useContext(StoreContext)
    const { getCollection,saveCollection } = context

    const collection = getCollection(match.params.id)
    console.log(match)
    return (
        <div className={classes.root}>
            {/* <Link className="App-link" to="/">Link to Home</Link> */}
            <Collection collection={collection} key={match.params.id} />
            <Button onClick={()=>saveCollection()}>Save File</Button>
        </div>
    )
}

export default Work