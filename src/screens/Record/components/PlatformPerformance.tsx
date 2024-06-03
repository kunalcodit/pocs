import getClicks from '@/services/record/getClicks';
import { colors } from '@/theme/Colors';
import { RecordPageSchema } from '@/types/schemas/record';
import findWidgets from '@/utils/findWidgets';
import { useQuery } from '@tanstack/react-query';
import {
	Collapse,
	CollapseBody,
	CollapseHeader,
} from 'accordion-collapse-react-native';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { z } from 'zod';
import PerformanceTable from '../charts/PerformanceTable';
import RecordSkeleton from '@/components/RecordSkeleton';

const styles = ScaledSheet.create({
	container: {
		backgroundColor: '#eff6ff',
		padding: '2%',
		marginTop: '2%',
	},
	textBox: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		color: colors.blue,
	},
	card: {
		backgroundColor: 'white',
		paddingHorizontal: '4%',
		paddingVertical: '2%',
		flex: 1,
		margin: '1%',
		borderRadius: 10,
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headertext: {
		color: '#FF8C00',
		fontWeight: '500',
		fontSize: '14@ms',
	},
	subtitle: {
		color: colors.gray,
		fontSize: '8@ms',
	},
	number: {
		fontSize: '20@ms',
		fontWeight: '500',
		color: colors.blue,
	},
	numberInfo: {
		color: colors.blue,
		fontSize: '14@ms',
	},
	image: {
		width: '100%',
		height: '100@vs',
		borderRadius: 10,
		resizeMode: 'cover',
	},
	captionText: {
		color: 'black',
	},
});

type Props = {
	data: z.infer<typeof RecordPageSchema>;
	widgetPageID: string;
};

export default function PlatformPerformance(props: Props) {
	const { data, widgetPageID } = props;
	const [isExpanded, setisExpanded] = useState(true);
	const titleIconName = !isExpanded ? 'chevron-up' : 'chevron-down';
	const pltformwidget = findWidgets(
		data.layouts,
		'Platform Performance Comparison',
	);

	const {
		isLoading,
		isFetching,
		data: tableData,
		isError,
	} = useQuery({
		queryKey: ['record-impression-platform', widgetPageID],
		queryFn: () => getClicks(pltformwidget[0], widgetPageID),
	});

	if (isLoading || isFetching) {
		return <RecordSkeleton />;
	}

	if (isError) {
		return null;
	}

	return (
		<View>
			<Collapse
				style={styles.container}
				isExpanded={isExpanded}
				onToggle={isExpanded => setisExpanded(isExpanded)}
			>
				<CollapseHeader>
					<View style={styles.textBox}>
						<Text style={styles.captionText}>Category:</Text>
						<View style={styles.textBox}>
							<Text style={styles.text}> Platform Performance</Text>
							<Ionicons name={titleIconName} size={20} color="black" />
						</View>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.cardContainer}>
						{/* <View style={styles.card}>
              <Text style={styles.headertext}>dsf</Text>
              <Text style={styles.subtitle}>(Jan 26,2024 - Feb 01,2024)</Text>
              <Text style={styles.number}>9.76%</Text>
              <Text style={styles.numberInfo}>CTR</Text>
            </View> */}
						<View style={styles.card}>
							<Text style={styles.headertext}>
								Platform Performance Comparison
							</Text>
							{/* <Image
								source={{
									uri: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
								}}
								style={styles.image}
							/> */}
							<PerformanceTable data={tableData.data} />
						</View>
					</View>
				</CollapseBody>
			</Collapse>
		</View>
	);
}
