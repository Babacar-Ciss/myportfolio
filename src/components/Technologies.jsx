import styled, { keyframes } from "styled-components";
import SingleTechnologie from "./SingleTechnologie";

const TechnologieFirstLineData = [
	{ title: "react", alternate: "react logo" },
	{ title: "sass", alternate: "sass logo" },
	{ title: "figma", alternate: "figma logo" },
	{ title: "framer", alternate: "framer logo" },
	{ title: "styledComponent", alternate: "styled component logo" },
	{ title: "greensock", alternate: "greensock logo" },
	{ title: "redux", alternate: "redux logo" },
	{ title: "javascript", alternate: "javascript logo" },
	{ title: "nextjs", alternate: "nextjs logo" },
	{ title: "material", alternate: "material logo" },
];

const TechnologieSecondLineData = [
	{ title: "jest", alternate: "jest logo" },
	{ title: "reactQuery", alternate: "reactQuery logo" },
	{ title: "html", alternate: "html logo" },
	{ title: "css", alternate: "css logo" },
	{ title: "storybook", alternate: "storybook logo" },
	{ title: "github", alternate: "git logo" },
	{ title: "typescript", alternate: "typescript logo" },
	{ title: "zustand", alternate: "zustand logo" },
	{ title: "cypress", alternate: "cypress logo" },
	{ title: "material", alternate: "material logo" },
];

const InfiniteScrool = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-100px * 10 ));
    }
`;

const TechnologiesStyle = styled.div`
	width: calc(100px * 14);
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(20, 100px);
	column-gap: 6%;
	animation: ${InfiniteScrool} 30s linear
		${({ isReverse }) => (isReverse ? "alternate-reverse" : "alternate")}
		infinite;

	@media (min-width: 375px) and (max-width: 767px) {
		column-gap: 2%;
	}
	:hover {
		animation-play-state: paused;
	}
`;

const Technologies = () => {
	return (
		<>
			<TechnologiesStyle isReverse>
				{TechnologieFirstLineData.map((data, index) => (
					<SingleTechnologie
						key={index}
						alternate={data.alternate}
						title={data.title}
					/>
				))}
				{TechnologieFirstLineData.map((data, index) => (
					<SingleTechnologie
						key={index}
						alternate={data.alternate}
						title={data.title}
					/>
				))}
			</TechnologiesStyle>
			<TechnologiesStyle>
				{TechnologieSecondLineData.map((data, index) => (
					<SingleTechnologie
						key={index}
						alternate={data.alternate}
						title={data.title}
					/>
				))}
				{TechnologieSecondLineData.map((data, index) => (
					<SingleTechnologie
						key={index}
						alternate={data.alternate}
						title={data.title}
					/>
				))}
			</TechnologiesStyle>
		</>
	);
};

export default Technologies;
