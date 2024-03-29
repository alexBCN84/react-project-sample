import React from 'react'
import { render } from 'react-dom'
import MyPage from './components/MyPage'
import data from './data/myData'

window.React = React

render(
    <MyPage pageSections={data} />,
    document.getElementById("react-container")
)