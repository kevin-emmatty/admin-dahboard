import { Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/SideBar";
import Pie from "./scenes/Pie";
import DashBoard from "./scenes/Dashboard";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";
import Bar from "./scenes/Bar";
import FAQ from "./scenes/FAQ";
import Calendar from "./scenes/Calendar";
import Team from "./scenes/Team";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Geography from "./scenes/Geography";

const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar />
					<main className="content">
						<TopBar />
						<Routes>
							<Route path="/" element={<DashBoard />} />
							<Route path="/team" element={<Team />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/form" element={<Form />} />
							<Route path="/faq" element={<FAQ />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/line" element={<Line />} />
							<Route path="/geography" element={<Geography />} />
							<Route path="/calendar" element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
