import Header from "../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../theme";
import StatBox from "../components/StatBox";
import LineChart from "../components/LineChart";
import { mockTransactions } from "../data/modckData";
import ProgressCircle from "../components/ProgressCircle";
import BarChart from "./../components/BarChart";
import GeographyChart from "../components/GeographyChart";

const DashBoard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			{/* Header */}
			<Box display="flex" justifyContent="space-between" alignItems="center ">
				<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</Box>
			{/* Grids setting and charts */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* Row 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="12,361"
						subTitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="4,22,543"
						subTitle="Sales Obtained"
						progress="0.5"
						increase="+21%"
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="3,11,987"
						subTitle="New Clients"
						progress="0.30"
						increase="+5%"
						icon={
							<PersonAddIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatBox
						title="18,55,765"
						subTitle="Traffic Inbound"
						progress="0.80"
						increase="+43%"
						icon={
							<TrafficIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				{/* Row 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box
						mt="25px"
						p="0 30px"
						display="flex"
						justifyContent="space-between"
					>
						<Box>
							<Typography
								variant="h5"
								fontWeight="600"
								color={colors.grey[100]}
							>
								Revenue Generated
							</Typography>
							<Typography
								variant="h3"
								fontWeight="bold"
								color={colors.greenAccent[500]}
							>
								$59,432,287
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height="250px" mt="-20px">
						<LineChart isDashboard={true} />
					</Box>
				</Box>
				{/* Transactions */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					overflow="auto"
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderBottom={`4px solid ${colors.primary[500]}`}
						colors={colors.grey[100]}
						p="15px"
					>
						<Typography color={colors.grey[100]} variant="h5" fontWeight="600">
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((transaction, i) => (
						<Box
							key={`${transaction.txId}-${i}`}
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colors.primary[500]}`}
							p="15px"
						>
							<Box>
								<Typography
									color={colors.greenAccent[500]}
									variant="h5"
									fontWeight="600"
								>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>
							<Box color={colors.grey[100]}>{transaction.date}</Box>
							<Box
								backgroundColor={colors.greenAccent[500]}
								p="5px 10px"
								borderRadius="4px"
							>
								{transaction.cost}
							</Box>
						</Box>
					))}
				</Box>
				{/* Row 3 */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600">
						Campaign
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						mt="25px"
					>
						<ProgressCircle size="125" />
						<Typography
							variant="h5"
							color={colors.greenAccent[500]}
							sx={{ mt: "15px" }}
						>
							48,352 Revenue Generated
						</Typography>
						<Typography>Includes extra misc expenditures and costs</Typography>
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ p: "30px 30px 0 30px" }}
					>
						Sales Qunatity
					</Typography>
					<Box height="250px" mt="-20px">
						<BarChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600" sx={{ mb: "15px " }}>
						Geography Based Traffic
					</Typography>
					<Box height="200px">
						<GeographyChart isDashboard={true} />
					</Box>
				</Box>
				{/*  */}
			</Box>
		</Box>
	);
};

export default DashBoard;
