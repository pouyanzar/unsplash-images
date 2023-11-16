import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const url =
  "https://api.unsplash.com/search/photos?client_id=xSQ9VsPkcwXbXr-u5UiuM-wr3JJYZEqB9XiERpGv_dY&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response.data);
  return <div>Gallery</div>;
};

export default Gallery;
