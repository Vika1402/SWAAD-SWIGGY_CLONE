import React from "react";
import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <div className="py-3 max-w-[1240px] mx-auto items-center gap-3">
      <div className="flex w-full justify-between my-3">
        <div className="text-[27px] font-bold">
          Explore localities in and around Bangalore
        </div>
      </div>
      <div>
        <div className="max-w-[1200px] mx-auto md:flex-row flex flex-col  justify-evenly gap-3">
          <div className="flex-1 flex flex-col gap-3">
            <LocationCard name="New York" />
            <LocationCard name="Paris" />
            <LocationCard name="Tokyo" />
            <LocationCard name="Kr Puram" />
          </div>
          <div className="flex flex-1 md:flex flex-col gap-3">
            <LocationCard name="Huskur" />
            <LocationCard name="Lakshmipura" />
            <LocationCard name="Gollahalli" />
            <LocationCard name="Honnasandra" />
          </div>
          <div className="flex flex-1 md:flex flex-col gap-3">
            <LocationCard name="Kadabagere" />
            <LocationCard name="Kithanahalli" />
            <LocationCard name="Sondekoppa" />
            <LocationCard name="Manchanabele" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
