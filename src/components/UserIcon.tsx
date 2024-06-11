import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line react/function-component-definition
const UserIcon: React.FC = () => {
	return (
		<Svg width={20} height={19} fill="none">
			<Path
				stroke="#000"
				strokeMiterlimit={10}
				strokeWidth={2}
				d="M10 11.875c2.761 0 5-2.127 5-4.75s-2.239-4.75-5-4.75-5 2.127-5 4.75 2.239 4.75 5 4.75Z"
			/>
			<Path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M2.421 16.03a8.547 8.547 0 0 1 3.204-3.042A9.11 9.11 0 0 1 10 11.875a9.11 9.11 0 0 1 4.376 1.114 8.549 8.549 0 0 1 3.203 3.042"
			/>
		</Svg>
	);
};
export default UserIcon;
