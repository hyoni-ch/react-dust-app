import React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";
export default function Header({ cities, cityChange, selectCity, tab }) {
  return (
    <div className="header">
      <p>
        미세먼지 알리미 <RiAlarmWarningFill size="24" color="black" />
      </p>
      {tab === 0 ? (
        <select onChange={cityChange} value={selectCity}>
          {cities.map((cities, idx) => {
            return (
              <option key={idx} value={cities}>
                {cities}
              </option>
            );
          })}
        </select>
      ) : null}
    </div>
  );
}
