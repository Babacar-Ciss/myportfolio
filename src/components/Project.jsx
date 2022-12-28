import styled from "styled-components";
import { useState } from "react";
import coffee_roaster_image from "../assets/projects/coffee_roaster.jpg";
import ecommerce_image from "../assets/projects/ecommerce.jpg";
import planet_fact_image from "../assets/projects/planet_fact.jpg";
import password_generator_image from "../assets/projects/password_generator.jpg";
import officine_image from "../assets/projects/officine.jpg";
import crowdfunding_image from "../assets/projects/crowfunding.jpg";
import interactive_pricing_component_image from "../assets/projects/interactive_pricing_component.jpg";
import github_user_search_image from "../assets/projects/github_user_search.jpg";
import single_page_design_portfolio_image from "../assets/projects/single_page_design_portfolio.jpg";
import tip_calculator_image from "../assets/projects/tip_calculator.jpg";
import sunnyside_agency_landing_page_image from "../assets/projects/sunnyside_agency.jpg";
import time_tracking_image from "../assets/projects/time_tracking.jpg";
import expenses_chart_component_image from "../assets/projects/expense_chart_component.jpg";
import faq_accordion_card_image from "../assets/projects/faq_accordion_card.jpg";
import pod_request_access_image from "../assets/projects/pod_request_access.jpg";
import skilled_e_learning_image from "../assets/projects/skilled_e_learning.jpg";

const Images = {
	coffee_roaster: coffee_roaster_image,
	ecommerce: ecommerce_image,
	planet_fact: planet_fact_image,
	password_generator: password_generator_image,
	officine: officine_image,
	crowdfunding: crowdfunding_image,
	interactive_pricing_component: interactive_pricing_component_image,
	github_user_search: github_user_search_image,
	single_page_design_portfolio: single_page_design_portfolio_image,
	tip_calculator: tip_calculator_image,
	sunnyside_agency_landing_page: sunnyside_agency_landing_page_image,
	time_tracking: time_tracking_image,
	expenses_chart_component: expenses_chart_component_image,
	faq_accordion_card: faq_accordion_card_image,
	pod_request_access: pod_request_access_image,
	skilled_e_learning: skilled_e_learning_image,
};

const ProjectStyle = styled.div`
	margin-bottom: 15px;
	color: ${({ theme }) => theme.color};
`;

const ProjectImageContainer = styled.div`
	position: relative;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 95%;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	a {
		text-decoration: none;
		border-bottom: 2px solid #56b381;
		color: #ffffff;
		font-weight: 700;
		font-size: 16px;
		line-height: 26px;
		letter-spacing: 2.28571px;
		text-transform: uppercase;
		padding-bottom: 10px;
		transition: all 0.3s;

		:hover {
			color: #56b381;
		}

		:first-child {
			margin-bottom: 48px;
		}
	}
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 400px;
	border-radius: 5px;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 342px;
		height: 253px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		width: 342px;
		height: 253px;
	}
`;

const ProjectTitle = styled.h3`
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	margin-bottom: 5px;
	letter-spacing: 0.2px;

	@media (min-width: 768px) and (max-width: 1439px) {
		font-size: 20px;
		line-height: 24px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 20px;
		line-height: 24px;
	}
`;

const TechnologiesIUsedContainer = styled.div`
	display: flex;
`;

const TechnologiesIUsed = styled.p`
	font-weight: 500;
	font-size: 13px;
	line-height: 28px;
	color: #cfcfcf;
	margin-right: 10px;
	letter-spacing: 0.01px;

	@media (min-width: 768px) and (max-width: 1439px) {
		font-size: 12px;
		line-height: 20px;
		margin-bottom: 16px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 12px;
		line-height: 20px;
		margin-bottom: 10px;
	}
`;

const LinkContainer = styled.div`
	display: none;

	@media (min-width: 768px) and (max-width: 1439px) {
		display: flex;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		display: flex;
	}

	a {
		text-decoration: none;
		border-bottom: 2px solid #56b381;
		color: ${({ theme }) => theme.color};
		font-weight: 700;
		font-size: 13px;
		line-height: 26px;
		letter-spacing: 2.28571px;
		text-transform: uppercase;
		padding-bottom: 7px;

		:first-child {
			margin-right: 32px;
		}

		@media (min-width: 768px) and (max-width: 1439px) {
			display: flex;
		}
	}
`;

const Project = ({ name, path, image_alt, technologies, live, github }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<ProjectStyle>
			<ProjectImageContainer
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{isHover ? (
					<Overlay>
						<a href={live} target="_blank">
							view project
						</a>
						<a href={github} target="_blank">
							view code
						</a>
					</Overlay>
				) : null}

				<ProjectImage src={Images[path]} alt={image_alt} />
			</ProjectImageContainer>
			<ProjectTitle> {name} </ProjectTitle>
			<TechnologiesIUsedContainer>
				{technologies.map((technologie, index) => (
					<TechnologiesIUsed key={index}> {technologie} </TechnologiesIUsed>
				))}
			</TechnologiesIUsedContainer>

			<LinkContainer>
				<a href={live} target="_blank">
					view project
				</a>
				<a href={github} target="_blank">
					view code
				</a>
			</LinkContainer>
		</ProjectStyle>
	);
};

export default Project;
