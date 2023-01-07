import styled from "styled-components";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { ThemeProvider } from "styled-components";
import { LightTheme, Darktheme } from "./styles/theme";
import Presentation from "./components/Presentation";
import TechnologieContainer from "./components/TechnologieContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import Footer from "./components/Footer";
import Store from "./store";

const AppStyle = styled.div`
	background-color: ${({ theme }) =>
		theme.color === "#FFF" ? "#161c2d" : "#FFF"};
	transition: all 0.5s;
	position: relative;
`;

const Container = styled.div`
	padding-inline: 165px;
	padding-top: 23px;
	max-width: 1440px;
	margin: 0 auto;

	@media (min-width: 768px) and (max-width: 1439px) {
		max-width: 768px;
		padding-inline: 32px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		max-width: 375px;
		padding-inline: 32px;
	}
`;

const App = () => {
	const isSwitchChecked = Store((state) => state.isSwitchChecked);
	const isAboutModalDisplay = Store((state) => state.isAboutModalDisplay);
	const isContactModalDisplay = Store((state) => state.isContactModalDisplay);

	return (
		<ThemeProvider theme={isSwitchChecked ? Darktheme : LightTheme}>
			<AppStyle>
				<Container>
					<Navbar />
					<Presentation />
					<TechnologieContainer />
					<ProjectsContainer />
					<Footer />
				</Container>
				{isAboutModalDisplay ? <AboutMe /> : null}
				{isContactModalDisplay ? <Contact /> : null}
			</AppStyle>
		</ThemeProvider>
	);
};

export default App;
