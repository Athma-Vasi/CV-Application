import styled from 'styled-components'

type PropsButton = {
	colour?: string
	backgroundColour?: string
}

const Button = styled.button<PropsButton>`
	background-color: transparent;
	color: ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	background-color: ${({ backgroundColour }) =>
		backgroundColour ? backgroundColour : 'white'};
	font-family: inherit;
	cursor: pointer;

	padding: 0.25em 0.75em;
	min-width: 10ch;
	min-height: 3em;
	line-height: 1.1;

	border: none;
	border-radius: 8px;

	box-shadow: 0px 3px 5px hsl(0, 0%, 0%, 0.18);

	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	align-self: start;

	transition: 246ms all ease-in-out;

	&:hover,
	&:active {
		color: ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
		background-color: ${({ backgroundColour }) =>
			backgroundColour ? backgroundColour : 'white'};
	}

	&:focus {
		outline-style: solid;
		outline-color: transparent;
		box-shadow: 0px 0px 0px 4px
			${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	}

	@media screen and (-ms-high-contrast: active) {
		border: 2px solid currentColor;
	}
`

export default Button
