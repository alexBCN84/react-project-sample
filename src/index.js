import React from 'react'
import { render } from 'react-dom'
import myPage from './components/myPage'
import data from '../data/myData'

window.React = React

render(
    <myPage pageSections={data} />,
    document.getElementById("react-container")
)