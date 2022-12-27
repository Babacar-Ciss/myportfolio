import styled from "styled-components";
import chat from "../assets/chat.png";

const LetsTalkButtonStyle = styled.button`
	width: 242px;
	height: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	font-weight: 700;
	font-size: 13px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 1.625px;
	text-transform: uppercase;

	color: #f4f7fa;
	border: none;
	background: #56b381;
	border-radius: 32.5px;

	filter: drop-shadow(0px 32px 54px rgba(3, 3, 3, 0.135927));

	@media (min-width: 375px) and (max-width: 767px) {
		width: 225px;
		height: 50px;
	}
`;

const ChatImage = styled.img`
	width: 23px;
	height: 21.23px;
	display: block;
	margin-right: 25px;
`;

const LetsTalkButton = () => {
	return (
		<LetsTalkButtonStyle>
			{" "}
			<ChatImage src={chat} alt="chat Image" /> Let's talk now
		</LetsTalkButtonStyle>
	);
};

export default LetsTalkButton;
