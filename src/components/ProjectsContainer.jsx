import styled from "styled-components";
import LoadMoreBtn from "./LoadMoreBtn";
import Project from "./Project";
import Store from "../store";

const ProjectDatas = [
	{
		name: "Coffeeroasters subscription site",
		path: "coffee_roaster",
		image_alt: "Coffeeroasters subscription site image",
		technologies: ["NextJs", "Styled-Components", "Zustand", "Framer Motion"],
		live: "https://coffee-roaster-website.vercel.app/",
		github: "https://github.com/Babacar-Ciss/coffee-roaster-website.git",
	},

	{
		name: "Planets Facts",
		path: "planet_fact",
		image_alt: "Planets Fact image",
		technologies: ["NextJs", "Styled-Components"],
		live: "https://cosmic-hummingbird-af102d.netlify.app/planets/earth",
		github: "https://github.com/Babacar-Ciss/planet-fact.git",
	},
	{
		name: "E-commerce product page",
		path: "ecommerce",
		image_alt: "E-commerce product page image",
		technologies: ["NextJs", "Styled-Components", "Zustand", "Framer Motion"],
		live: "https://ecommerce-product-page-24ke.vercel.app/",
		github: "https://github.com/Babacar-Ciss/ecommerce-product-page.git",
	},
	{
		name: "Password generator app",
		path: "password_generator",
		image_alt: "Password generator app",
		technologies: ["ReactJs", "Styled-Components"],
		live: "https://passwordgeneratorbabacarciss.netlify.app/",
		github: "https://github.com/Babacar-Ciss/password-generator.git",
	},
	{
		name: "Officeline coming soon site",
		path: "officine",
		image_alt: "Officeline coming soon site",
		technologies: [
			"ReactJs",
			"React Router",
			"Styled-Components",
			"React Hook Form",
		],
		live: "https://6313bb93d407755bf3f93a17--officiline.netlify.app/",
		github: "https://github.com/Babacar-Ciss/officiline.git",
	},
	{
		name: "Crowdfunding product page",
		path: "crowdfunding",
		image_alt: "Crowdfunding product page",
		technologies: ["ReactJs", "Styled-Components", "Gsap"],
		live: "https://crowdfoundingproductpage.netlify.app/",
		github: "https://github.com/Babacar-Ciss/crowdfunding-product-page.git",
	},
	{
		name: "Interactive pricing component",
		path: "interactive_pricing_component",
		image_alt: "Interactive pricing component",
		technologies: ["ReactJs", "Sass"],
		live: "https://melodic-nougat-301df8.netlify.app/",
		github: "https://github.com/Babacar-Ciss/interactive-pricing-component.git",
	},
	{
		name: "GitHub user search app",
		path: "gitHub_user_search",
		image_alt: "GitHub user search app",
		technologies: ["ReactJs", "Styled-Component", "Framer-Motion"],
		live: "https://githubresearcheruser.netlify.app/",
		github: "https://github.com/Babacar-Ciss/github-research-user.git",
	},
	{
		name: "Single-page design portfolio",
		path: "single_page_design_portfolio",
		image_alt: "Single-page design portfolio",
		technologies: ["Html", "Sass", "SwipeJs"],
		live: "https://clinquant-profiterole-38ead8.netlify.app/",
		github: "https://github.com/Babacar-Ciss/single-page-design-portfolio.git",
	},
	{
		name: "Tip Calculator app",
		path: "tip_calculator",
		image_alt: "Tip calculator",
		technologies: ["React", "Sass"],
		live: "https://babacar-ciss.github.io/Tips-Calculator/",
		github: "https://github.com/Babacar-Ciss/Tips-Calculator.git",
	},

	{
		name: "Sunnyside agency landing page",
		path: "sunnyside_agency_landing_page",
		image_alt: "Sunnyside agency landing page",
		technologies: ["React", "Sass"],
		live: "https://babacar-ciss.github.io/sunnyside-landing-page/",
		github: "https://github.com/Babacar-Ciss/sunnyside-landing-page.git",
	},
	{
		name: "Time tracking dashboard",
		path: "time_tracking",
		image_alt: "Time tracking dashboard",
		technologies: ["React", "Sass", "Framer-Motion"],
		live: "https://babacar-ciss-makes-great-sites.netlify.app/",
		github: "https://github.com/Babacar-Ciss/time-tracking-dashboard.git",
	},
	{
		name: "Expenses chart component",
		path: "expenses_chart_component",
		image_alt: "Expenses chart component",
		technologies: ["React", "Styled-Component"],
		live: "https://netlify-thinks-babacar-ciss-is-great.netlify.app/",
		github: "https://github.com/Babacar-Ciss/expenses-charts-V2.git",
	},
	{
		name: "FAQ accordion card",
		path: "faq_accordion_card",
		image_alt: "FAQ accordion card",
		technologies: ["React", "Styled-Component"],
		live: "https://accordeon-babacar-ciss.netlify.app/",
		github: "https://github.com/Babacar-Ciss/accordeon-react.git",
	},
	{
		name: "Pod request access landing page",
		path: "pod_request_access",
		image_alt: "Pod request access landing page",
		technologies: ["Html", "Sass"],
		live: "https://babacar-ciss.github.io/Pod-request-Landing-page/",
		github: "https://github.com/Babacar-Ciss/Pod-request-Landing-page.git",
	},
	{
		name: "Skilled e-learning landing page",
		path: "skilled_e_learning",
		image_alt: "Skilled e-learning landing page",
		technologies: ["React", "Styled-Component"],
		live: "https://the-great-babacar-ciss-site.netlify.app/",
		github: "https://github.com/Babacar-Ciss/eskilled.git",
	},
];

const ProjectConatinerStyle = styled.div`
	color: ${({ theme }) => theme.color};
	font-weight: 700;
	font-size: 55px;
	line-height: 88px;
	letter-spacing: -2.5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 180px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 100px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		margin-bottom: 100px;
	}
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 60px;
	line-height: 88px;
	letter-spacing: -2.5px;
	margin-bottom: 70px;

	@media (min-width: 768px) and (max-width: 1439px) {
		font-size: 45px;
		margin-bottom: 40px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 45px;
		margin-bottom: 20px;
	}
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 540px);
	grid-auto-rows: auto;
	column-gap: 2%;
	row-gap: 30px;
	margin-bottom: 80px;

	@media (min-width: 768px) and (max-width: 1439px) {
		grid-template-columns: repeat(2, auto);
		column-gap: 22px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		grid-template-columns: 343px;
		margin-bottom: 50px;
	}
`;

const ProjectsContainer = () => {
	const amountOfProjectsVisible = Store(
		(state) => state.amountOfProjectsVisible
	);

	return (
		<ProjectConatinerStyle>
			<Title>Projects</Title>
			<Container>
				{ProjectDatas.slice(0, amountOfProjectsVisible).map(
					(project, index) => (
						<Project key={index} {...project} />
					)
				)}
			</Container>
			<LoadMoreBtn />
		</ProjectConatinerStyle>
	);
};

export default ProjectsContainer;
