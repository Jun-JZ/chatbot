import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box color="lightgray">
      <CircularProgress size={20} color="inherit" />
    </Box>
  );
};

export default Loading;
