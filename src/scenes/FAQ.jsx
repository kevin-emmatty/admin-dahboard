import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
	useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header title="FAQ's" subtitle="Frequently Asked Question Page" />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]}>
						Important Question 1.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum, mi sit amet lobortis
						semper, quam quam semper diam, vitae tempus eros neque nec erat.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]}>
						Important Question 2.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum, mi sit amet lobortis
						semper, quam quam semper diam, vitae tempus eros neque nec erat.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]}>
						Important Question 3.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum, mi sit amet lobortis
						semper, quam quam semper diam, vitae tempus eros neque nec erat.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]}>
						Important Question 4.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum, mi sit amet lobortis
						semper, quam quam semper diam, vitae tempus eros neque nec erat.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]}>
						Important Question 5.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum, mi sit amet lobortis
						semper, quam quam semper diam, vitae tempus eros neque nec erat.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]}>
						Important Question 6.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum, mi sit amet lobortis
						semper, quam quam semper diam, vitae tempus eros neque nec erat.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
