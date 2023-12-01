import { useState } from "react";

import "./App.css";
import InputComponent from "./components/InputComponent";

import { Formik, useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import { Button, TextField } from "@mui/material";

function App() {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <InputComponent name="input01" formik={formik} />
      <InputComponent name="input02" formik={formik} />
      <InputComponent name="input03" formik={formik} />
      <InputComponent name="input04" formik={formik} />
      <InputComponent name="input05" formik={formik} />
      <InputComponent name="input06" formik={formik} />
      <InputComponent name="input07" formik={formik} />
      <InputComponent name="input08" formik={formik} />
      <InputComponent name="input09" formik={formik} />
      <InputComponent name="input10" formik={formik} />
      <InputComponent name="input11" formik={formik} />
      <InputComponent name="input12" formik={formik} />
      <InputComponent name="input13" formik={formik} />
      <InputComponent name="input14" formik={formik} />
      <InputComponent name="input15" formik={formik} />
      <InputComponent name="input16" formik={formik} />
      <InputComponent name="input17" formik={formik} />
      <InputComponent name="input18" formik={formik} />
      <InputComponent name="input19" formik={formik} />
      <InputComponent name="input20" formik={formik} />
      {/* <TextField
        id="email"
        name="input01"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input01}
      />
      <TextField
        id="email"
        name="input02"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input02}
      />
      <TextField
        id="email"
        name="input03"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input03}
      />
      <TextField
        id="email"
        name="input04"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input04}
      />
      <TextField
        id="email"
        name="input05"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input05}
      />
      <TextField
        id="email"
        name="input06"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input06}
      />
      <TextField
        id="email"
        name="input07"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input07}
      />
      <TextField
        id="email"
        name="input08"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input08}
      />
      <TextField
        id="email"
        name="input09"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input09}
      />
      <TextField
        id="email"
        name="input10"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input10}
      />
      <TextField
        id="email"
        name="input11"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input11}
      />
      <TextField
        id="email"
        name="input12"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input12}
      />
      <TextField
        id="email"
        name="input13"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input13}
      />
      <TextField
        id="email"
        name="input14"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input14}
      />
      <TextField
        id="email"
        name="input15"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input15}
      />
      <input
        id="email"
        name="input16"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input16}
      />
      <TextField
        id="email"
        name="input17"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input17}
      />
      <TextField
        id="email"
        name="input18"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input18}
      />
      <TextField
        id="email"
        name="input19"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input19}
      />
      <TextField
        id="email"
        name="input20"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.input20}
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
