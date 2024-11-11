const ProfileIcon = ({
	width = 16,
	height = 16,
	...props
}: {
	width?: number;
	height?: number;
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M13.3333 14C13.3333 13.0696 13.3333 12.6044 13.2185 12.2259C12.96 11.3736 12.293 10.7067 11.4408 10.4482C11.0622 10.3333 10.597 10.3333 9.66667 10.3333H6.33334C5.40296 10.3333 4.93777 10.3333 4.55924 10.4482C3.70698 10.7067 3.04003 11.3736 2.7815 12.2259C2.66667 12.6044 2.66667 13.0696 2.66667 14M11 5C11 6.65685 9.65686 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65686 2 11 3.34315 11 5Z"
				stroke="#667085"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default ProfileIcon;
