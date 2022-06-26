import styled from 'styled-components'

const Container = styled.div`
	padding-left: auto;
	padding-right: auto;
	padding-top: max(8vh, 2rem);
	padding-bottom: max(8vh, 2rem);

	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));

	transition: 246ms all ease-in-out;
`

export default Container
