import styled from "styled-components";
import close_cross from "../assets/simple-remove.png";
import arrow_right from "../assets/tail-right.png";
import Store from "../store";
import warning_icon from "../assets/warning.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { send } from "emailjs-com";

const REGEX_VALIDATION =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ConatctStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #56b381;
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
	display: flex;
	align-items: center;
	max-width: 1010px;
	justify-content: space-between;
	margin-left: 250px;
	/* margin-right: 340px; */
	margin-inline: auto;

	@media (min-width: 768px) and (max-width: 1439px) {
		flex-direction: column;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		flex-direction: column;
		max-width: 343px;
	}
`;

const ContactInformationsContainer = styled.div`
	width: 393px;
	padding: 33px 55px 32px 43px;
	align-self: center;

	background-color: #ffffff;
	box-shadow: 0px 32px 54px rgba(3, 3, 3, 0.135927);
	border-radius: 10px;

	font-size: 19px;
	line-height: 32px;
	letter-spacing: -0.2px;

	@media (min-width: 768px) and (max-width: 1439px) {
		width: 340px;
		padding: 25px 45px 25px 37px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		width: 260px;
		padding: 20px 40px 20px 32px;
		font-size: 16px;
		line-height: 28px;
	}

	p {
		color: #161c2d;
	}

	h3 {
		color: #495fef;

		:first-of-type {
			margin-bottom: 52px;

			@media (min-width: 768px) and (max-width: 1439px) {
				margin-bottom: 30px;
			}
			@media (min-width: 375px) and (max-width: 767px) {
				margin-bottom: 20px;
			}
		}
	}
`;

const ContactFormContainer = styled.div`
	max-width: 471px;
	color: #fff;
	margin-right: 147px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-right: 0;
		text-align: center;
		margin-bottom: 70px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		margin-right: 0;
		text-align: center;
		margin-bottom: 70px;
	}
`;

const Title = styled.h2`
	font-weight: 700;
	font-size: 60px;
	line-height: 72px;
	letter-spacing: -2px;
	margin-bottom: 27px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 15px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 40px;
		line-height: 40px;
		margin-bottom: 20px;
	}
`;

const SomeText = styled.p`
	font-weight: 400;
	font-size: 19px;
	line-height: 32px;
	letter-spacing: -0.2px;
	margin-bottom: 71px;

	@media (min-width: 768px) and (max-width: 1439px) {
		margin-bottom: 40px;
	}

	@media (min-width: 375px) and (max-width: 767px) {
		font-size: 16px;
		line-height: 26px;
		margin-bottom: 40px;
	}
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;

	@media (min-width: 375px) and (max-width: 767px) {
		width: 90%;
		margin-inline: auto;
	}

	input {
		color: #fff;
		background-color: transparent;
		padding-bottom: 17px;
		border: none;
		border-bottom: 1px solid #7ecda3;
		font-size: 15px;
		line-height: 26px;
		letter-spacing: -0.1px;
		margin-bottom: 37px;

		@media (min-width: 768px) and (max-width: 1439px) {
			margin-bottom: 30px;
		}

		:focus {
			outline: 0;
		}

		::placeholder {
			opacity: 1;
		}
	}

	input[type="email"] {
		color: "#FFF";
		border-bottom: 1px solid
			${({ isEmailCorrect, emailWatchValue }) =>
				isEmailCorrect || emailWatchValue === "" ? "#7ecda3" : "#ff1e00"};
		margin-bottom: ${({ isEmailCorrect }) =>
			!isEmailCorrect ? "37px" : "0px"};

		+ label {
			margin-top: 5px;
			margin-bottom: 37px;
			text-align: right;
			font-size: 13px;
			/* color: ${({ isEmailCorrect, emailValue }) =>
				isEmailCorrect || emailValue === "" ? "#7ecda3" : "#ff1e00"}; */
			color: #ff1e00;
		}
	}

	textarea {
		color: #fff;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #7ecda3;
		resize: none;
		width: 100%;
		height: 145px;
		margin-bottom: 51px;

		@media (min-width: 768px) and (max-width: 1439px) {
			margin-bottom: 30px;
			height: 100px;
		}

		:focus {
			outline: 0;
		}

		::placeholder {
			opacity: 1;
		}
	}
`;

const SubmitBtn = styled.button`
	width: 186px;
	height: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	background-color: #495fef;
	box-shadow: 0px 32px 54px rgba(3, 3, 3, 0.135927);
	border-radius: 32.5px;
	font-weight: 700;
	font-size: 13px;
	line-height: 16px;
	border: none;

	text-align: center;
	letter-spacing: 1.625px;
	text-transform: uppercase;

	color: #f4f7fa;

	@media (min-width: 375px) and (max-width: 767px) {
		width: 156px;
		height: 55px;
		font-size: 12px;
	}

	p {
		margin-right: 48px;
	}
`;

const Contact = () => {
	const { register, handleSubmit, getValues, watch } = useForm();

	const setIsContactModalDisplay = Store(
		(state) => state.setIsContactModalDisplay
	);
	const [emailValue, setEmailValue] = useState("");

	const emailWatchValue = watch("email");

	const onSubmit = (data) => {
		send(
			"service_w0p6mwb",
			// "template_aaxdvlg",
			{ ...data },
			"o7SCCC_U4CA0f6Ulj"
		)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	return (
		<ConatctStyle>
			<Header>
				<p>babacar.dev</p>
				<img
					src={close_cross}
					alt="close cross"
					onClick={() => setIsContactModalDisplay()}
				/>
			</Header>

			<Container>
				<ContactFormContainer>
					<Title>Contact now</Title>
					<SomeText>
						Have a project or question? Send me a message. I will reply within
						48 hours.
					</SomeText>
					<ContactForm
						onSubmit={handleSubmit(onSubmit)}
						isEmailCorrect={REGEX_VALIDATION.test(emailValue)}
						emailWatchValue={emailWatchValue}
					>
						<input
							type="text"
							name="from_name"
							{...register("from_name", { required: true })}
							placeholder="Your name"
						/>
						<input
							type="email"
							name="email"
							{...register("email")}
							placeholder="Email Address"
						/>
						{!REGEX_VALIDATION.test(emailValue) && emailWatchValue !== "" ? (
							<label htmlFor="email">Sorry, invalid format here </label>
						) : null}

						<input
							type="text"
							name="subject"
							{...register("subject", { required: true })}
							placeholder="Subject"
						/>
						<textarea
							name="message"
							{...register("message", { required: true })}
							placeholder="Write your message"
						/>
						<SubmitBtn
							type="submit"
							onClick={() => setEmailValue(getValues("email"))}
						>
							<p>SEND</p>
							<img src={arrow_right} alt="arrow to the right" />
						</SubmitBtn>
					</ContactForm>
				</ContactFormContainer>

				<ContactInformationsContainer>
					<p>Email me at</p>
					<h3>babacardev@gmail.com</h3>
					<p>Call me at</p>
					<h3>+221772779253</h3>
				</ContactInformationsContainer>
			</Container>
		</ConatctStyle>
	);
};

export default Contact;
