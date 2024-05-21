import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

import './translations';
import Sidebar from './navigators/Sidebar';

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={storage}>
				{/* <Sidebar /> */}
				<Sidebar />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
