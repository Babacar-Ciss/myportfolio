import styled from "styled-components";
import close_cross from "../assets/simple-remove.png";
import myPicture from "../assets/mypicture.jpg";
import Store from "../store";

const AboutMeStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: #495fef;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 49px;
	padding-top: 33px;
	margin-bottom: 150px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 75px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		margin-bottom: 40px;
		padding-inline: 20px;
		padding-top: 20px;
	}

	p {
		color: #ffffff;
		font-weight: 800;
		font-size: 24px;
		line-height: 29px;
		letter-spacing: -0.5px;

		@media (min-width: 375px) and (max-width: 767px) {
			font-size: 20px;
			line-height: 24px;
		}
	}

	img {
		cursor: pointer;
	}
`;

const Container = styled.div`
	max-width: 1081px;
	margin-inline: auto;
	display: flex;
	align-items: center;

	@media (min-width: 768px) and (max-width: 1439px) {
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
	}
`;

const MyPersonnalPicture = styled.img`
	width: 425px;
	height: 500px;
	margin-right: 124px;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 320px;
		height: 370px;
		margin-right: 0;
		margin-bottom: 50px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		width: 174px;
		height: 200px;
		margin-right: 0;
		margin-bottom: 40px;
	}
`;

const MyAboutInformationsContainer = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 768px) and (max-width: 1439px) {
		align-items: center;
		text-align: center;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		align-items: center;
		text-align: center;
	}
`;

const Name = styled.h3`
	font-weight: 700;
	font-size: 48px;
	line-height: 60px;
	letter-spacing: -1.8px;
	margin-bottom: 42px;

	@media (min-width: 768px) and (max-width: 1439px) {
		font-size: 34px;
		line-height: 36px;
		margin-bottom: 25px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 28px;
		line-height: 22px;
		margin-bottom: 20px;
	}
`;

const Description = styled.p`
	font-size: 19px;
	line-height: 32px;
	letter-spacing: -0.2px;
	margin-bottom: 34px;

	@media (min-width: 768px) and (max-width: 1439px) {
		font-size: 17px;
		line-height: 26px;
		padding-inline: 100px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 15px;
		line-height: 30px;
		padding-inline: 55px;
	}
`;

const ContactContainer = styled.div`
	margin-bottom: 62px;

	p {
		font-size: 19px;
		line-height: 32px;
		letter-spacing: -0.2px;

		@media (min-width: 375px) and (max-width: 767px) {
			font-size: 17px;
			line-height: 26px;
		}
	}
`;

const LinksContainer = styled.div`
	display: flex;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 60%;
		justify-content: space-between;
		margin-bottom: 15px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		width: 65%;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
		color: #f4f7fa;
		font-size: 13px;
		font-weight: 700;
		line-height: 16px;
		letter-spacing: 1.625px;
		text-transform: uppercase;
		margin-right: 8ch;

		@media (min-width: 768px) and (max-width: 1439px) {
			margin-right: 0;
		}
		@media (min-width: 375px) and (max-width: 767px) {
			margin-right: 0;
		}
	}
`;

const AboutMe = () => {
	const setIsAboutModalDisplay = Store((state) => state.setIsAboutModalDisplay);

	return (
		<AboutMeStyle>
			<Header>
				<p>babacar.dev</p>
				<img
					src={close_cross}
					alt="close cross"
					onClick={() => setIsAboutModalDisplay()}
				/>
			</Header>
			<Container>
				<MyPersonnalPicture src={myPicture} alt="My picture" />
				<MyAboutInformationsContainer>
					<Name>Babacar Ciss</Name>
					<Description>
						UX Designer based in New York, USA. I am designing with a minimal
						and beautiful design in mind.
						<br />
						<br />I strive for a minimal and beautiful design.
					</Description>
					<ContactContainer>
						<p>Contact</p>
						<h3>babacardev@gmail.com</h3>
					</ContactContainer>
					<LinksContainer>
						<a href="https://linkedin.com/in/babacar-ciss-365954254">
							LINKEDIN
						</a>
						<a href="https://twitter.com/BabsReactDev">TWITTER</a>
						<a href="https://github.com/Babacar-Ciss/">GITHUB</a>
					</LinksContainer>
				</MyAboutInformationsContainer>
			</Container>
		</AboutMeStyle>
	);
};

export default AboutMe;
