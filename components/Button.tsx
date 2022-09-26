import MUIButton, { ButtonProps } from "@mui/material/Button";

const Button = (props: ButtonProps) => (
  <MUIButton {...props} variant="contained" sx={{ fontSize: "1.6rem" }} />
);

export default Button;
