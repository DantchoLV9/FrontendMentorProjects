import styled from "styled-components";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";

const StatCard = ({
	borderColor,
	data,
	dataName,
	icon,
	linkText,
	changeCount,
	changePositive,
}) => {
	return (
		<StyledStatCard borderColor={borderColor} changePositive={changePositive}>
			<div className="top-border"></div>
			<div className="link">
				<img src={icon} alt="" />
				<a href="/" target="_blank" rel="noreferrer">
					{linkText}
				</a>
			</div>
			<div className="data">
				<span className="data-count">{data}</span>
				<span className="data-name">{dataName}</span>
			</div>
			<div className="change-data">
				<img src={changePositive ? iconUp : iconDown} alt="" />
				<span>{changeCount} Today</span>
			</div>
		</StyledStatCard>
	);
};

const StyledStatCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 2rem;
	width: 100%;
	background: ${(props) => props.theme.cardBg};
	padding: 2rem;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	.top-border {
		top: 0;
		left: 0;
		height: 5px;
		width: 100%;
		position: absolute;
		background: ${(props) => props.borderColor};
	}
	.link {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.6rem;
		img {
			width: 1.5rem;
		}
		a {
			text-decoration: none;
			color: ${(props) => props.theme.blueFg};
			font-weight: 700;
			font-size: 0.9rem;
			:hover {
				text-decoration: underline;
			}
		}
	}
	.data {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		text-align: center;
		.data-count {
			font-size: 4.5rem;
			font-weight: 700;
			color: ${(props) => props.theme.whiteFg};
		}
		.data-name {
			letter-spacing: 0.4rem;
			color: ${(props) => props.theme.blueFg};
		}
	}
	.change-data {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.5rem;
		width: 100%;
		img {
			width: 0.7rem;
		}
		span {
			font-weight: 700;
			color: ${(props) =>
				props.changePositive ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
		}
	}
`;

export default StatCard;
