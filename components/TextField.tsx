import MUITextField, { TextFieldProps } from "@mui/material/TextField";

const TextField = (props: TextFieldProps) => (
  <MUITextField
    {...props}
    variant="outlined"
    fullWidth
    sx={{
      "& .MuiInputBase-input": {
        fontSize: "1.6rem",
      },
    }}
  />
);
export default TextField;
