import styled from "styled-components";
import myPicture from "../assets/mypicture.jpg";

const PresentationStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.color};
`;

const MyPictureStyle = styled.img`
	width: 287px;
	border-radius: 50%;
	margin-bottom: 55px;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 230px;
		margin-bottom: 35px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		width: 180px;
		margin-bottom: 25px;
	}
`;

const GreetingParagraph = styled.p`
	font-weight: 700;
	font-size: 13px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 1.625px;
	text-transform: uppercase;
	margin-bottom: 47px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 25px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		margin-bottom: 25px;
		font-size: 11px;
	}
`;

const Profession = styled.h1`
	font-weight: 700;
	font-size: 60px;
	line-height: 72px;
	text-align: center;
	letter-spacing: -2px;
	padding-inline: 50px;

	@media (min-width: 768px) and (max-width: 1439px) {
		font-size: 40px;
		line-height: 64px;
		padding-inline: 30px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 32px;
		line-height: 48px;
		padding-inline: 0;
	}
`;

const Presentation = () => {
	return (
		<PresentationStyle>
			<MyPictureStyle src={myPicture} alt="my picture" />
			<GreetingParagraph> hi, i am babacar ciss </GreetingParagraph>
			<Profession>FrontEnd Developper React Enthousiast</Profession>
		</PresentationStyle>
	);
};

export default Presentation;
