"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const url = `https://freeipapi.com/api/json`; 


export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setCountry(data.countryName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div>{country}</div>;
}
