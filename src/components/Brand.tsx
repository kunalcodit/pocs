import { useTheme } from '@/theme';
import { View, Image, DimensionValue } from 'react-native';
// import { useTheme } from '@/hooks';

type Props = {
	height?: DimensionValue | undefined;
	width?: DimensionValue | undefined;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height, width, mode }: Props) {
	const { layout } = useTheme();

	return (
		<View style={{ height, width }}>
			<Image
				style={layout.fullSize}
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				source={require('@/assets/images/main-logo.png')}
				resizeMode={mode}
			/>
		</View>
	);
}

Brand.defaultProps = {
	height: 200,
	width: 200,
	mode: 'contain',
} as Props;

export default Brand;
