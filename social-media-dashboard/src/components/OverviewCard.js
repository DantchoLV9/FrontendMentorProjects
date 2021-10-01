import styled from "styled-components";
import iconDown from "../images/icon-down.svg";
import iconUp from "../images/icon-up.svg";

const OverviewCard = ({
	icon,
	data,
	dataName,
	changeCount,
	changePositive,
}) => {
	return (
		<StyledOverviewCard changePositive={changePositive}>
			<div className="header">
				<span>{dataName}</span>
				<img src={icon} alt="" />
			</div>
			<div className="body">
				<span className="data">{data}</span>
				<div className="change">
					<img src={changePositive ? iconUp : iconDown} alt="" />
					<span>{changeCount}%</span>
				</div>
			</div>
		</StyledOverviewCard>
	);
};

const StyledOverviewCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 20%;
	row-gap: 2rem;
	padding: 2rem;
	background: ${(props) => props.theme.cardBg};
	border-radius: 5px;
	&:hover {
		background: ${(props) => props.theme.cardBgHover};
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		column-gap: 1rem;
		span {
			font-weight: 700;
			color: ${(props) => props.theme.blueFg};
		}
		img {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.body {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		column-gap: 1rem;
		.data {
			font-size: 2.5rem;
			font-weight: 700;
			color: ${(props) => props.theme.whiteFg};
		}
		.change {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 0.3rem;
			img {
				width: 0.8rem;
			}
			span {
				font-weight: 700;
				color: ${(props) =>
					props.changePositive ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
			}
		}
	}
`;

export default OverviewCard;
