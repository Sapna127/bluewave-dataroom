const BlueWaveTitle = ({
	width,
	height,
	...props
}: {
	width: number;
	height: number;
}) => (
	<svg
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 244 21"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			d="M0.288 1.592H5.904C6.66667 1.592 7.412 1.67 8.14 1.826C8.868 1.982 9.518 2.242 10.09 2.606C10.662 2.95267 11.1213 3.412 11.468 3.984C11.832 4.556 12.014 5.26667 12.014 6.116C12.014 7.19067 11.7193 8.08333 11.13 8.794C10.558 9.48733 9.778 9.98133 8.79 10.276V10.328C9.37933 10.38 9.92533 10.536 10.428 10.796C10.948 11.0387 11.39 11.3593 11.754 11.758C12.1353 12.1567 12.43 12.6247 12.638 13.162C12.846 13.682 12.95 14.2453 12.95 14.852C12.95 15.8747 12.7333 16.7153 12.3 17.374C11.884 18.0327 11.3293 18.5613 10.636 18.96C9.96 19.3413 9.18867 19.61 8.322 19.766C7.47267 19.922 6.62333 20 5.774 20H0.288V1.592ZM2.472 9.392H5.488C6.008 9.392 6.51067 9.35733 6.996 9.288C7.49867 9.21867 7.94933 9.08 8.348 8.872C8.74667 8.64667 9.06733 8.34333 9.31 7.962C9.55267 7.56333 9.674 7.04333 9.674 6.402C9.674 5.83 9.56133 5.37067 9.336 5.024C9.11067 4.66 8.80733 4.374 8.426 4.166C8.062 3.958 7.63733 3.81933 7.152 3.75C6.684 3.66333 6.20733 3.62 5.722 3.62H2.472V9.392ZM2.472 17.972H6.164C6.70133 17.972 7.23 17.92 7.75 17.816C8.28733 17.6947 8.764 17.5127 9.18 17.27C9.61333 17.01 9.96 16.6807 10.22 16.282C10.48 15.866 10.61 15.3633 10.61 14.774C10.61 14.1327 10.48 13.5953 10.22 13.162C9.97733 12.7287 9.648 12.382 9.232 12.122C8.83333 11.862 8.36533 11.68 7.828 11.576C7.308 11.472 6.77067 11.42 6.216 11.42H2.472V17.972ZM16.483 0.343999H18.511V20H16.483V0.343999ZM33.155 17.114C33.155 17.6687 33.1724 18.1887 33.207 18.674C33.2417 19.1593 33.259 19.6013 33.259 20H31.335C31.335 19.6707 31.3264 19.3413 31.309 19.012C31.2917 18.6827 31.283 18.3447 31.283 17.998H31.231C31.0924 18.2927 30.893 18.5787 30.633 18.856C30.3904 19.1333 30.0957 19.3847 29.749 19.61C29.4024 19.818 29.0124 19.9827 28.579 20.104C28.1457 20.2427 27.6777 20.312 27.175 20.312C26.3777 20.312 25.6844 20.1907 25.095 19.948C24.523 19.7053 24.0464 19.3673 23.665 18.934C23.2837 18.5007 22.9977 17.9807 22.807 17.374C22.6337 16.75 22.547 16.074 22.547 15.346V7.832H24.575V15.138C24.575 16.1607 24.8004 16.9667 25.251 17.556C25.7017 18.1453 26.4037 18.44 27.357 18.44C28.0157 18.44 28.579 18.3273 29.047 18.102C29.5324 17.8767 29.9224 17.556 30.217 17.14C30.529 16.724 30.7544 16.23 30.893 15.658C31.049 15.086 31.127 14.4533 31.127 13.76V7.832H33.155V17.114ZM47.8623 17.79C47.1343 18.726 46.337 19.3847 45.4703 19.766C44.6036 20.13 43.5983 20.312 42.4543 20.312C41.501 20.312 40.643 20.1473 39.8803 19.818C39.1176 19.4713 38.4676 19.012 37.9303 18.44C37.4103 17.868 37.003 17.192 36.7083 16.412C36.431 15.632 36.2923 14.8 36.2923 13.916C36.2923 12.98 36.4483 12.122 36.7603 11.342C37.0723 10.5447 37.5056 9.86867 38.0603 9.314C38.615 8.742 39.2736 8.3 40.0363 7.988C40.799 7.676 41.631 7.52 42.5323 7.52C43.3816 7.52 44.1616 7.66733 44.8723 7.962C45.583 8.23933 46.1896 8.65533 46.6923 9.21C47.2123 9.74733 47.611 10.4147 47.8883 11.212C48.1656 11.992 48.3043 12.8847 48.3043 13.89V14.54H38.4763C38.511 15.06 38.6323 15.5627 38.8403 16.048C39.0656 16.516 39.3516 16.932 39.6983 17.296C40.045 17.6427 40.4523 17.92 40.9203 18.128C41.3883 18.336 41.8996 18.44 42.4543 18.44C43.3383 18.44 44.0836 18.284 44.6903 17.972C45.297 17.66 45.843 17.2007 46.3283 16.594L47.8623 17.79ZM46.1203 12.824C46.0856 11.784 45.7476 10.952 45.1063 10.328C44.465 9.704 43.581 9.392 42.4543 9.392C41.3276 9.392 40.4176 9.704 39.7243 10.328C39.031 10.952 38.615 11.784 38.4763 12.824H46.1203ZM49.6736 1.592H52.0916L56.2776 16.88H56.3296L60.8536 1.592H63.2976L67.7956 16.88H67.8476L72.1116 1.592H74.3996L68.9916 20H66.6256L62.0756 4.4H62.0236L57.4476 20H55.0556L49.6736 1.592ZM75.3559 9.392C75.9799 8.75067 76.7166 8.28267 77.5659 7.988C78.4326 7.676 79.3079 7.52 80.1919 7.52C81.9946 7.52 83.2946 7.94467 84.0919 8.794C84.8892 9.64333 85.2879 10.9347 85.2879 12.668V17.894C85.2879 18.2407 85.3052 18.6047 85.3399 18.986C85.3746 19.35 85.4179 19.688 85.4699 20H83.5199C83.4506 19.7227 83.4072 19.4193 83.3899 19.09C83.3899 18.7433 83.3899 18.44 83.3899 18.18H83.3379C82.9392 18.804 82.4019 19.3153 81.7259 19.714C81.0672 20.1127 80.2699 20.312 79.3339 20.312C78.7099 20.312 78.1206 20.234 77.5659 20.078C77.0286 19.922 76.5519 19.6967 76.1359 19.402C75.7372 19.09 75.4166 18.7087 75.1739 18.258C74.9312 17.8073 74.8099 17.2873 74.8099 16.698C74.8099 15.6927 75.0699 14.904 75.5899 14.332C76.1099 13.76 76.7512 13.3353 77.5139 13.058C78.2939 12.7807 79.1259 12.6073 80.0099 12.538C80.9112 12.4687 81.7346 12.434 82.4799 12.434H83.2599V12.07C83.2599 11.186 82.9912 10.5187 82.4539 10.068C81.9339 9.61733 81.1972 9.392 80.2439 9.392C79.5852 9.392 78.9352 9.50467 78.2939 9.73C77.6699 9.938 77.1152 10.2673 76.6299 10.718L75.3559 9.392ZM81.2319 14.15C79.9319 14.15 78.9006 14.332 78.1379 14.696C77.3752 15.06 76.9939 15.658 76.9939 16.49C76.9939 17.2527 77.2452 17.7987 77.7479 18.128C78.2679 18.44 78.9092 18.596 79.6719 18.596C80.2612 18.596 80.7726 18.5007 81.2059 18.31C81.6566 18.102 82.0292 17.8333 82.3239 17.504C82.6186 17.1747 82.8439 16.7933 82.9999 16.36C83.1559 15.9093 83.2426 15.4327 83.2599 14.93V14.15H81.2319ZM94.5323 20H92.2963L87.3303 7.832H89.6963L93.4923 17.374H93.5443L97.1583 7.832H99.3423L94.5323 20ZM112.405 17.79C111.677 18.726 110.88 19.3847 110.013 19.766C109.147 20.13 108.141 20.312 106.997 20.312C106.044 20.312 105.186 20.1473 104.423 19.818C103.661 19.4713 103.011 19.012 102.473 18.44C101.953 17.868 101.546 17.192 101.251 16.412C100.974 15.632 100.835 14.8 100.835 13.916C100.835 12.98 100.991 12.122 101.303 11.342C101.615 10.5447 102.049 9.86867 102.603 9.314C103.158 8.742 103.817 8.3 104.579 7.988C105.342 7.676 106.174 7.52 107.075 7.52C107.925 7.52 108.705 7.66733 109.415 7.962C110.126 8.23933 110.733 8.65533 111.235 9.21C111.755 9.74733 112.154 10.4147 112.431 11.212C112.709 11.992 112.847 12.8847 112.847 13.89V14.54H103.019C103.054 15.06 103.175 15.5627 103.383 16.048C103.609 16.516 103.895 16.932 104.241 17.296C104.588 17.6427 104.995 17.92 105.463 18.128C105.931 18.336 106.443 18.44 106.997 18.44C107.881 18.44 108.627 18.284 109.233 17.972C109.84 17.66 110.386 17.2007 110.871 16.594L112.405 17.79ZM110.663 12.824C110.629 11.784 110.291 10.952 109.649 10.328C109.008 9.704 108.124 9.392 106.997 9.392C105.871 9.392 104.961 9.704 104.267 10.328C103.574 10.952 103.158 11.784 103.019 12.824H110.663Z"
			fill="#344054"
		/>
		<path
			d="M123.247 1.592H130.319C130.926 1.592 131.567 1.66133 132.243 1.8C132.919 1.93867 133.586 2.164 134.245 2.476C134.921 2.77067 135.562 3.16067 136.169 3.646C136.793 4.13133 137.339 4.72067 137.807 5.414C138.275 6.09 138.648 6.87867 138.925 7.78C139.202 8.664 139.341 9.66933 139.341 10.796C139.341 11.9227 139.202 12.9367 138.925 13.838C138.648 14.722 138.275 15.5107 137.807 16.204C137.339 16.88 136.793 17.4607 136.169 17.946C135.562 18.4313 134.921 18.83 134.245 19.142C133.586 19.4367 132.919 19.6533 132.243 19.792C131.567 19.9307 130.926 20 130.319 20H123.247V1.592ZM125.431 17.972H129.591C130.648 17.972 131.628 17.8333 132.529 17.556C133.43 17.2787 134.21 16.854 134.869 16.282C135.528 15.6927 136.048 14.9473 136.429 14.046C136.81 13.1447 137.001 12.0613 137.001 10.796C137.001 9.53067 136.81 8.44733 136.429 7.546C136.048 6.64467 135.528 5.908 134.869 5.336C134.21 4.74667 133.43 4.31333 132.529 4.036C131.628 3.75867 130.648 3.62 129.591 3.62H125.431V17.972ZM142.336 9.392C142.96 8.75067 143.697 8.28267 144.546 7.988C145.413 7.676 146.288 7.52 147.172 7.52C148.975 7.52 150.275 7.94467 151.072 8.794C151.87 9.64333 152.268 10.9347 152.268 12.668V17.894C152.268 18.2407 152.286 18.6047 152.32 18.986C152.355 19.35 152.398 19.688 152.45 20H150.5C150.431 19.7227 150.388 19.4193 150.37 19.09C150.37 18.7433 150.37 18.44 150.37 18.18H150.318C149.92 18.804 149.382 19.3153 148.706 19.714C148.048 20.1127 147.25 20.312 146.314 20.312C145.69 20.312 145.101 20.234 144.546 20.078C144.009 19.922 143.532 19.6967 143.116 19.402C142.718 19.09 142.397 18.7087 142.154 18.258C141.912 17.8073 141.79 17.2873 141.79 16.698C141.79 15.6927 142.05 14.904 142.57 14.332C143.09 13.76 143.732 13.3353 144.494 13.058C145.274 12.7807 146.106 12.6073 146.99 12.538C147.892 12.4687 148.715 12.434 149.46 12.434H150.24V12.07C150.24 11.186 149.972 10.5187 149.434 10.068C148.914 9.61733 148.178 9.392 147.224 9.392C146.566 9.392 145.916 9.50467 145.274 9.73C144.65 9.938 144.096 10.2673 143.61 10.718L142.336 9.392ZM148.212 14.15C146.912 14.15 145.881 14.332 145.118 14.696C144.356 15.06 143.974 15.658 143.974 16.49C143.974 17.2527 144.226 17.7987 144.728 18.128C145.248 18.44 145.89 18.596 146.652 18.596C147.242 18.596 147.753 18.5007 148.186 18.31C148.637 18.102 149.01 17.8333 149.304 17.504C149.599 17.1747 149.824 16.7933 149.98 16.36C150.136 15.9093 150.223 15.4327 150.24 14.93V14.15H148.212ZM162.631 9.548H159.043V15.632C159.043 16.0307 159.051 16.4033 159.069 16.75C159.086 17.0793 159.155 17.374 159.277 17.634C159.398 17.8767 159.58 18.076 159.823 18.232C160.065 18.3707 160.412 18.44 160.863 18.44C161.157 18.44 161.461 18.4053 161.773 18.336C162.085 18.2667 162.379 18.1627 162.657 18.024L162.735 19.87C162.388 20.026 161.998 20.1387 161.565 20.208C161.149 20.2773 160.75 20.312 160.369 20.312C159.641 20.312 159.06 20.2167 158.627 20.026C158.193 19.8353 157.855 19.5667 157.613 19.22C157.37 18.8733 157.205 18.4487 157.119 17.946C157.049 17.426 157.015 16.854 157.015 16.23V9.548H154.363V7.832H157.015V4.374H159.043V7.832H162.631V9.548ZM164.959 9.392C165.583 8.75067 166.32 8.28267 167.169 7.988C168.036 7.676 168.911 7.52 169.795 7.52C171.598 7.52 172.898 7.94467 173.695 8.794C174.493 9.64333 174.891 10.9347 174.891 12.668V17.894C174.891 18.2407 174.909 18.6047 174.943 18.986C174.978 19.35 175.021 19.688 175.073 20H173.123C173.054 19.7227 173.011 19.4193 172.993 19.09C172.993 18.7433 172.993 18.44 172.993 18.18H172.941C172.543 18.804 172.005 19.3153 171.329 19.714C170.671 20.1127 169.873 20.312 168.937 20.312C168.313 20.312 167.724 20.234 167.169 20.078C166.632 19.922 166.155 19.6967 165.739 19.402C165.341 19.09 165.02 18.7087 164.777 18.258C164.535 17.8073 164.413 17.2873 164.413 16.698C164.413 15.6927 164.673 14.904 165.193 14.332C165.713 13.76 166.355 13.3353 167.117 13.058C167.897 12.7807 168.729 12.6073 169.613 12.538C170.515 12.4687 171.338 12.434 172.083 12.434H172.863V12.07C172.863 11.186 172.595 10.5187 172.057 10.068C171.537 9.61733 170.801 9.392 169.847 9.392C169.189 9.392 168.539 9.50467 167.897 9.73C167.273 9.938 166.719 10.2673 166.233 10.718L164.959 9.392ZM170.835 14.15C169.535 14.15 168.504 14.332 167.741 14.696C166.979 15.06 166.597 15.658 166.597 16.49C166.597 17.2527 166.849 17.7987 167.351 18.128C167.871 18.44 168.513 18.596 169.275 18.596C169.865 18.596 170.376 18.5007 170.809 18.31C171.26 18.102 171.633 17.8333 171.927 17.504C172.222 17.1747 172.447 16.7933 172.603 16.36C172.759 15.9093 172.846 15.4327 172.863 14.93V14.15H170.835ZM178.962 1.592H183.668C184.552 1.592 185.427 1.644 186.294 1.748C187.178 1.852 187.966 2.07733 188.66 2.424C189.353 2.77067 189.916 3.282 190.35 3.958C190.783 4.61667 191 5.518 191 6.662C191 8.014 190.592 9.106 189.778 9.938C188.963 10.77 187.836 11.2987 186.398 11.524L191.624 20H188.946L183.954 11.732H181.146V20H178.962V1.592ZM181.146 9.704H183.096C183.702 9.704 184.326 9.68667 184.968 9.652C185.626 9.61733 186.224 9.50467 186.762 9.314C187.316 9.12333 187.767 8.82867 188.114 8.43C188.478 8.014 188.66 7.42467 188.66 6.662C188.66 6.00333 188.53 5.47467 188.27 5.076C188.01 4.67733 187.663 4.374 187.23 4.166C186.814 3.94067 186.337 3.79333 185.8 3.724C185.28 3.65467 184.751 3.62 184.214 3.62H181.146V9.704ZM193.79 13.916C193.79 12.9627 193.955 12.096 194.284 11.316C194.614 10.536 195.064 9.86867 195.636 9.314C196.208 8.742 196.893 8.3 197.69 7.988C198.488 7.676 199.354 7.52 200.29 7.52C201.226 7.52 202.093 7.676 202.89 7.988C203.688 8.3 204.372 8.742 204.944 9.314C205.516 9.86867 205.967 10.536 206.296 11.316C206.626 12.096 206.79 12.9627 206.79 13.916C206.79 14.8693 206.626 15.736 206.296 16.516C205.967 17.296 205.516 17.972 204.944 18.544C204.372 19.0987 203.688 19.532 202.89 19.844C202.093 20.156 201.226 20.312 200.29 20.312C199.354 20.312 198.488 20.156 197.69 19.844C196.893 19.532 196.208 19.0987 195.636 18.544C195.064 17.972 194.614 17.296 194.284 16.516C193.955 15.736 193.79 14.8693 193.79 13.916ZM195.974 13.916C195.974 14.5573 196.07 15.1553 196.26 15.71C196.468 16.2473 196.763 16.724 197.144 17.14C197.526 17.5387 197.976 17.8593 198.496 18.102C199.034 18.3273 199.632 18.44 200.29 18.44C200.949 18.44 201.538 18.3273 202.058 18.102C202.596 17.8593 203.055 17.5387 203.436 17.14C203.818 16.724 204.104 16.2473 204.294 15.71C204.502 15.1553 204.606 14.5573 204.606 13.916C204.606 13.2747 204.502 12.6853 204.294 12.148C204.104 11.5933 203.818 11.1167 203.436 10.718C203.055 10.302 202.596 9.98133 202.058 9.756C201.538 9.51333 200.949 9.392 200.29 9.392C199.632 9.392 199.034 9.51333 198.496 9.756C197.976 9.98133 197.526 10.302 197.144 10.718C196.763 11.1167 196.468 11.5933 196.26 12.148C196.07 12.6853 195.974 13.2747 195.974 13.916ZM209.228 13.916C209.228 12.9627 209.393 12.096 209.722 11.316C210.051 10.536 210.502 9.86867 211.074 9.314C211.646 8.742 212.331 8.3 213.128 7.988C213.925 7.676 214.792 7.52 215.728 7.52C216.664 7.52 217.531 7.676 218.328 7.988C219.125 8.3 219.81 8.742 220.382 9.314C220.954 9.86867 221.405 10.536 221.734 11.316C222.063 12.096 222.228 12.9627 222.228 13.916C222.228 14.8693 222.063 15.736 221.734 16.516C221.405 17.296 220.954 17.972 220.382 18.544C219.81 19.0987 219.125 19.532 218.328 19.844C217.531 20.156 216.664 20.312 215.728 20.312C214.792 20.312 213.925 20.156 213.128 19.844C212.331 19.532 211.646 19.0987 211.074 18.544C210.502 17.972 210.051 17.296 209.722 16.516C209.393 15.736 209.228 14.8693 209.228 13.916ZM211.412 13.916C211.412 14.5573 211.507 15.1553 211.698 15.71C211.906 16.2473 212.201 16.724 212.582 17.14C212.963 17.5387 213.414 17.8593 213.934 18.102C214.471 18.3273 215.069 18.44 215.728 18.44C216.387 18.44 216.976 18.3273 217.496 18.102C218.033 17.8593 218.493 17.5387 218.874 17.14C219.255 16.724 219.541 16.2473 219.732 15.71C219.94 15.1553 220.044 14.5573 220.044 13.916C220.044 13.2747 219.94 12.6853 219.732 12.148C219.541 11.5933 219.255 11.1167 218.874 10.718C218.493 10.302 218.033 9.98133 217.496 9.756C216.976 9.51333 216.387 9.392 215.728 9.392C215.069 9.392 214.471 9.51333 213.934 9.756C213.414 9.98133 212.963 10.302 212.582 10.718C212.201 11.1167 211.906 11.5933 211.698 12.148C211.507 12.6853 211.412 13.2747 211.412 13.916ZM225.367 10.718C225.367 10.1633 225.35 9.64333 225.315 9.158C225.281 8.67267 225.263 8.23067 225.263 7.832H227.187C227.187 8.16133 227.196 8.49067 227.213 8.82C227.231 9.14933 227.239 9.48733 227.239 9.834H227.291C227.43 9.53933 227.621 9.25333 227.863 8.976C228.123 8.69867 228.427 8.456 228.773 8.248C229.12 8.02267 229.51 7.84933 229.943 7.728C230.377 7.58933 230.845 7.52 231.347 7.52C232.006 7.52 232.552 7.60667 232.985 7.78C233.436 7.936 233.809 8.13533 234.103 8.378C234.398 8.60333 234.623 8.85467 234.779 9.132C234.953 9.392 235.091 9.626 235.195 9.834C235.646 9.106 236.166 8.54267 236.755 8.144C237.345 7.728 238.107 7.52 239.043 7.52C239.91 7.52 240.638 7.64133 241.227 7.884C241.817 8.10933 242.293 8.44733 242.657 8.898C243.021 9.33133 243.281 9.86867 243.437 10.51C243.593 11.134 243.671 11.836 243.671 12.616V20H241.643V12.72C241.643 12.304 241.6 11.8967 241.513 11.498C241.427 11.0993 241.271 10.744 241.045 10.432C240.82 10.12 240.517 9.86867 240.135 9.678C239.754 9.48733 239.269 9.392 238.679 9.392C238.246 9.392 237.839 9.47867 237.457 9.652C237.076 9.82533 236.738 10.068 236.443 10.38C236.166 10.692 235.941 11.0733 235.767 11.524C235.611 11.9573 235.533 12.4427 235.533 12.98V20H233.505V13.11C233.505 11.758 233.323 10.8047 232.959 10.25C232.595 9.678 231.997 9.392 231.165 9.392C230.507 9.392 229.935 9.50467 229.449 9.73C228.981 9.95533 228.591 10.276 228.279 10.692C227.985 11.108 227.759 11.602 227.603 12.174C227.465 12.746 227.395 13.3787 227.395 14.072V20H225.367V10.718Z"
			fill="#1570EF"
		/>
	</svg>
);

export default BlueWaveTitle;
