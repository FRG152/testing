// ::::: MATERIAL UI :::::
import { Box, TextField } from "@mui/material";

export default function InputComponent({
  name,
  label,
  width,
  formik,
  placeholder,
}) {
  return (
    <Box sx={{ width }}>
      {label && <label htmlFor="">{label}</label>}
      <TextField
        type="text"
        name={name}
        label={placeholder}
        value={formik?.values[name] || ""}
        variant="standard"
        onChange={formik?.handleChange}
        sx={{ width: "100%", marginTop: "10px" }}
      />
    </Box>
  );
}
