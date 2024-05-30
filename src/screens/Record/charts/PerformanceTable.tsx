import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
	tableBox: {
		marginVertical: '10@ms',
	},
	table: {
		flexDirection: 'row',
	},
	cell: {
		flex: 1,
		textAlign: 'right',
		fontSize: '8@s',
		padding: '2@s',
	},
	headerCell: {
		fontSize: '10@s',
		fontWeight: 'bold',
		textAlign: 'right',
	},
});

function PerformanceTable({ data }) {
	return (
		<ScrollView nestedScrollEnabled>
			<View style={styles.tableBox}>
				<View style={styles.table}>
					<Text style={[styles.cell, styles.headerCell]}>Platform</Text>
					<Text style={[styles.cell, styles.headerCell]}>Click</Text>
					<Text style={[styles.cell, styles.headerCell]}>CTR</Text>
					<Text style={[styles.cell, styles.headerCell]}>Impression</Text>
					<Text style={[styles.cell, styles.headerCell]}>Currency</Text>
				</View>
				<View>
					{data.map((rowData, rowIndex) => (
						<View style={styles.table} key={rowIndex}>
							<Text style={styles.cell}>{rowData.platform}</Text>
							<Text style={styles.cell}>{rowData.ClickCount}</Text>
							<Text style={styles.cell}>{rowData.CtrCount}</Text>
							<Text style={styles.cell}>{rowData.ImpressionCount}</Text>
							<Text style={styles.cell}>{rowData.client_currency}</Text>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	);
}

export default PerformanceTable;
