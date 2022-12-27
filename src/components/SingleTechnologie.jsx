import styled from "styled-components";
import reactLogo from "../assets/react.png";
import cssLogo from "../assets/css.png";
import cypressLogo from "../assets/cypress.png";
import figmaLogo from "../assets/figma.png";
import framerLogo from "../assets/framer.png";
import gitLogo from "../assets/github.png";
import greensockLogo from "../assets/greensock.png";
import htmlLogo from "../assets/html.png";
import javascriptLogo from "../assets/javascript.png";
import jestLogo from "../assets/jest.png";
import materialLogo from "../assets/material.png";
import nextjsLogo from "../assets/nextjs.png";
import reactQueryLogo from "../assets/reactQuery.png";
import reduxLogo from "../assets/redux.png";
import sassLogo from "../assets/sass.png";
import storybookLogo from "../assets/storybook.png";
import styledComponentLogo from "../assets/styledComponent.png";
import typescriptLogo from "../assets/typescript.png";
import zustandLogo from "../assets/zustand.png";

const Image = {
	react: reactLogo,
	css: cssLogo,
	cypress: cypressLogo,
	figma: figmaLogo,
	framer: framerLogo,
	github: gitLogo,
	greensock: greensockLogo,
	html: htmlLogo,
	javascript: javascriptLogo,
	jest: jestLogo,
	material: materialLogo,
	nextjs: nextjsLogo,
	reactQuery: reactQueryLogo,
	redux: reduxLogo,
	sass: sassLogo,
	storybook: storybookLogo,
	styledComponent: styledComponentLogo,
	typescript: typescriptLogo,
	zustand: zustandLogo,
};

const SingleTechnologieStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	perspective: 100px;
`;

const SingleTechnologieImage = styled.img`
	width: 100px;
	height: 100px;
	margin-bottom: 10px;
	transition: transform 0.2s;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 75px;
		height: 75px;
		margin-bottom: 15px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		width: 50px;
		height: 50px;
		margin-bottom: 15px;
	}

	:hover {
		transform: translateZ(15px);
	}
`;

const SingleTechnologietitle = styled.p`
	font-weight: 500;
	color: ${({ theme }) => theme.color};
`;

const SingleTechnologie = ({ alternate, title }) => {
	return (
		<SingleTechnologieStyle>
			<SingleTechnologieImage src={Image[title]} alt={alternate} />
			<SingleTechnologietitle>
				{" "}
				{title[0].toUpperCase().concat(title.slice(1))}{" "}
			</SingleTechnologietitle>
		</SingleTechnologieStyle>
	);
};

export default SingleTechnologie;
