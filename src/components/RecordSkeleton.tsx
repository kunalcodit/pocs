import { View, StyleSheet, Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#f0f0f0',
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width - 20, // Account for padding
	},
	card: {
		width: (width - 30) / 2, // Divide width equally, considering spacing
		height: 150,
		borderRadius: 10,
	},
});

function RecordSkeleton() {
	return (
		<View style={styles.container}>
			<SkeletonPlaceholder>
				<View style={styles.cardContainer}>
					<View style={styles.card} />
					<View style={styles.card} />
				</View>
			</SkeletonPlaceholder>
		</View>
	);
}

export default RecordSkeleton;
