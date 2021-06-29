import { styled } from '@linaria/react'
import * as React from 'react'
import { render } from 'react-dom'

let Color: any

(function (Color) {
	Color = {}
	Color['black'] = '#000'
})(Color)

const H1 = styled.h1`
	color: ${Color.black};
`

function Home () {
	return <H1>A mighty title</H1>
}

render(
	React.createElement(Home, {}),
	window.document.getElementById('whatever'),
)
