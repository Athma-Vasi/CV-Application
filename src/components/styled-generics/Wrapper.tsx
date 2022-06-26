import styled from 'styled-components'

type WrapperProps = {
	colour?: string
	backgroundColour?: string
}

const Wrapper = styled.div<WrapperProps>`
	margin-left: auto;
	margin-right: auto;

	color: ${({ colour }) => (colour ? colour : 'hsl(180, 100%, 25%)')};
	background-color: ${({ backgroundColour }) =>
		backgroundColour ? backgroundColour : 'white'};

	width: clamp(16rem, 90vw, 70rem);

	padding: 1.5rem clamp(1rem, 5%, 3rem);

	transition: 246ms all ease-in-out;
`

export default Wrapper
