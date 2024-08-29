import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import DataRibbon from "../../components/Dashboard/DataRibbon";
import TransactionsPerDay from "../../components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "../../components/Dashboard/TransactionBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;
