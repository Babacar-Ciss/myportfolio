import styled from "styled-components";
import CustomizedSwitches from "./SwitchThemeButton";

const NavbarStyle = styled.nav`
	color: ${({ theme }) => theme.color};
	margin-bottom: 80px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 50px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		margin-bottom: 40px;
	}
`;

const UL = styled.ul`
	display: flex;
	align-items: center;
	padding: 0;

	@media (min-width: 768px) and (max-width: 1439px) {
		justify-content: space-between;
	}
`;

const LI = styled.li`
	list-style: none;
	font-weight: 700;
	font-size: 15px;
	line-height: 26px;
	text-align: right;
	letter-spacing: -0.1px;
	cursor: pointer;

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 12px;
		line-height: 26px;
	}

	&:first-of-type {
		font-size: 24px;
		line-height: 29px;
		font-weight: 800;
		flex-grow: 1;
		letter-spacing: -0.5px;
		text-align: left;

		@media (min-width: 375px) and (max-width: 767px) {
			font-size: 16px;
		}
	}

	&:nth-of-type(3) {
		margin-right: 35px;

		@media (min-width: 375px) and (max-width: 767px) {
			margin-right: 10px;
		}
	}

	&:nth-of-type(2) {
		flex-grow: 1;

		@media (min-width: 375px) and (max-width: 767px) {
			display: flex;
			justify-content: center;
		}
	}
`;

export default function Navbar() {
	return (
		<NavbarStyle>
			<UL>
				<LI> babacar.dev </LI>
				<LI>
					<CustomizedSwitches />
				</LI>
				<LI> about me. </LI>
				<LI> contact. </LI>
			</UL>
		</NavbarStyle>
	);
}
