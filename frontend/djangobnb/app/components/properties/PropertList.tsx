"use client";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiServices from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const url = "/api/properties/";
    const tmpProperties = await apiServices.get(url);

    setProperties(tmpProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </>
  );
};

export default PropertyList;
