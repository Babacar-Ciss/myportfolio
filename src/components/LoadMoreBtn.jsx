import styled from "styled-components";
import Store from "../store";

const LoadMoreBtnStyle = styled.button`
	width: 200px;
	height: 50px;

	font-weight: 700;
	font-size: 13px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 1.625px;
	text-transform: uppercase;
	cursor: pointer;

	color: #f4f7fa;
	border: none;
	background: #495fef;
	border-radius: 32.5px;

	filter: drop-shadow(0px 32px 54px rgba(3, 3, 3, 0.135927));
`;

const LoadMoreBtn = () => {
	const LoadMoreProjectsHandler = Store(
		(state) => state.LoadMoreProjectsHandler
	);

	return (
		<LoadMoreBtnStyle onClick={() => LoadMoreProjectsHandler()}>
			Load More works{" "}
		</LoadMoreBtnStyle>
	);
};

export default LoadMoreBtn;
