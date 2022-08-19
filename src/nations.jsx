import React from "react";

import "./App.css";
import { nations_data } from "./data";
import { HomePageHeader } from "./home_page_header";
import {Nation} from "./nation";

export const Nations = () => {
  return (
    <>
      <HomePageHeader />
      <div className="nations-container">
        {nations_data.map((data, key) => {
          return (
            <div key={key}>
              <Nation
                key={key}
                name={data.name}
                capital={data.capital}
                languages={data.languages}
                currency={data.currency}
                population={data.population}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
