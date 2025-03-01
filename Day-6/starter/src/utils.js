import React from "react";
import axios from "axios";
const CustomInstance = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

export default CustomInstance;
