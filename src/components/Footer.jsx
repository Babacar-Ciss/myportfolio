import styled from "styled-components";
import LetsTalkButton from "./LetsTalkButton";

const FooterStyle = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.color};
	margin-bottom: 47px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 100px;
	}
`;

const AvailableStatus = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 43px;

	@media (min-width: 375px) and (max-width: 767px) {
		flex-direction: column;
	}

	span {
		display: block;
		margin-right: 16px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #56b381;

		@media (min-width: 375px) and (max-width: 767px) {
			margin-bottom: 15px;
		}
	}

	p {
		font-weight: 700;
		font-size: 13px;
		line-height: 16px;

		text-align: center;
		letter-spacing: 1.625px;
		text-transform: uppercase;

		@media (min-width: 375px) and (max-width: 767px) {
			padding-inline: 10%;
			line-height: 25px;
		}
	}
`;

const Title = styled.h2`
	font-weight: 700;
	font-size: 60px;
	line-height: 72px;
	letter-spacing: -2px;
	padding-inline: 15%;
	text-align: center;
	margin-bottom: 50px;

	@media (min-width: 768px) and (max-width: 1439px) {
		padding-inline: 5%;
		margin-bottom: 30px;
		font-size: 48px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		padding-inline: 0;
		font-size: 34px;
		line-height: 40px;
		margin-bottom: 30px;
	}
`;

const AllRightReserved = styled.p`
	font-weight: 700;
	font-size: 13px;
	line-height: 16px;

	text-align: center;
	letter-spacing: 1.625px;
	text-transform: uppercase;
	margin-top: 190px;
	margin-bottom: 30px;

	@media (min-width: 375px) and (max-width: 767px) {
		margin-top: 100px;
	}
`;

const Footer = () => {
	return (
		<FooterStyle>
			<AvailableStatus>
				<span></span>
				<p>AVAILABLE FOR FREELANCE PROJECTS</p>
			</AvailableStatus>
			<Title>Do you have illustration project? Let's talk.</Title>
			<LetsTalkButton />
			<AllRightReserved>&#169; 2022 All RIght reseved</AllRightReserved>
		</FooterStyle>
	);
};

export default Footer;
