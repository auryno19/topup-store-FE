"use client";

import Carousel from "@/components/carousel";
import apiService from "@/service/apiService";
import { useEffect, useState } from "react";

interface errorFetch {
  message?: string;
  error?: string;
}
const HandleCarousel: React.FC = () => {
  const [data, setData] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get<{ data: string[] }>("/banner", {
          credentials: "include",
        });
        setData(response.data.data);
      } catch (err) {
        // console.log(err);
        if (err) {
          setError((err as errorFetch).message || "An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`w-[80%] md:w-[60%] m-auto ${
        loading || error ? "flex items-center justify-center" : ""
      }`}
    >
      {loading ? (
        <span className="eos-icons--three-dots-loading"></span>
      ) : error ? (
        <p className="text-center">Error : {error}</p>
      ) : (
        <Carousel slides={data || []} />
      )}
    </div>
  );
};

export default HandleCarousel;
