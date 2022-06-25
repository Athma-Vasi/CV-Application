import styled from 'styled-components'

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: max(8vh, 2rem);
	margin-bottom: max(8vh, 2rem);

	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
`

export default Container
