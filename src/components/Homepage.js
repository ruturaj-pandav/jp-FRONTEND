import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Homepage() {
  let navigate = useNavigate();
  useEffect((() => {
      navigate(`/login`)
  }) , [])
  return <div>homepage</div>;
}
