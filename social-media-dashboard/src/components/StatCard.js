import styled from "styled-components";

const StatCard = ({
	borderColor,
	followers,
	socialMediaName,
	icon,
	iconAlt,
}) => {
	return (
		<StyledStatCard borderColor={borderColor}>
			<div className="top-border"></div>
			<div className="link">
				<img src={icon} alt={iconAlt} />
				<a href="/" target="_blank" rel="noreferrer">
					Social Media Link
				</a>
			</div>
			<div className="data">
				<span className="data-count">{followers}</span>
				<span className="data-name">{socialMediaName}</span>
			</div>
		</StyledStatCard>
	);
};

const StyledStatCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 1rem;
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
			width: 20%;
		}
		a {
			text-decoration: none;
			color: ${(props) => props.theme.blueFg};
			font-weight: 700;
			font-size: 0.8rem;
		}
	}
	.data {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		text-transform: uppercase;
		text-align: center;
	}
	.data-count {
		font-size: 5rem;
		font-weight: 700;
		color: ${(props) => props.theme.whiteFg};
	}
	.data-name {
		letter-spacing: 0.4rem;
		color: ${(props) => props.theme.blueFg};
	}
`;

export default StatCard;
