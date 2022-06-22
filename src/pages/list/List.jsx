import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate((prev) => !prev)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div class="lsItem">
              <label>Options</label>
              <div class="lsOptions">
                <div class="lsOptionItem">
                  <span class="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" class="lsOptionInput" />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" class="lsOptionInput" />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">Adult</span>
                  <input
                    type="number"
                    class="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">Children</span>
                  <input
                    type="number"
                    class="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div class="lsOptionItem">
                  <span class="lsOptionText">Room</span>
                  <input
                    type="number"
                    class="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
