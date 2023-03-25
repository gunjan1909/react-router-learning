import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        replace: true,
        state: "Error not page",
      });
      // navigate(-1);
    }, 1500);
  }, []);

  return <h1>Not Found</h1>;
}
