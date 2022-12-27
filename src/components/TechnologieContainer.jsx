import styled from "styled-components";
import Technologies from "./Technologies";

const TechnologieContainerStyle = styled.div`
	width: 90%;
	overflow: hidden;
	margin-inline: auto;
	margin-bottom: 90px;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 95%;
		margin-bottom: 75px;
	}
`;

const TechnologieContainer = () => {
	return (
		<TechnologieContainerStyle>
			<Technologies />
		</TechnologieContainerStyle>
	);
};

export default TechnologieContainer;
