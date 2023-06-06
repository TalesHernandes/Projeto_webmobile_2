import { useState } from "react";
import Header from "./Header";
import MapCards from "./MapCards";
import { Link } from "react-router-dom";

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [filterType, setFilterType] = useState('date');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setIsFilterVisible(false);
    }

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
        setIsFilterVisible(false);
    }

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    }

    return (
        <>
            <section className="container">
                <Header />
                <section className="filters">
                    <form className="search">
                        <input
                            type="text"
                            id="search"
                            name="name"
                            placeholder="Search"
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </form>
                    <article className="buttons">
                        <Link to="/add" className="addEmployee"></Link>
                        <button className="filterEmployee" onClick={() => setIsFilterVisible(true)}>
                        </button>
                    </article>
                </section>
                {isFilterVisible && (
                <div className="filter-container">
                    <h2>Filter by:</h2>
                    <div className="filter-options">
                        <label>
                        <br />
                            <input 
                                type="radio"
                                value="date"
                                checked={filterType === 'date'}
                                onChange={handleFilterTypeChange}
                            />
                            Date
                        </label>
                        <br />
                        <label>
                            <input 
                                type="radio"
                                value="status"
                                checked={filterType === 'status'}
                                onChange={handleFilterTypeChange}
                            />
                            Status
                        </label>
                    </div>
                    { filterType === 'date' ?
                    <>
                        <br />
                        <label htmlFor="date">Select Date:</label>
                        <br /><br />
                        <input type="date" id="date" name="date" value={selectedDate} onChange={handleDateChange} />
                    </>
                    :
                    <>
                    <br />
                        <label htmlFor="status">Select Status:</label>
                        <br /><br />
                        <select id="status" name="status" value={selectedStatus} onChange={handleStatusChange}>
                            <option value="">All</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </>
                    }
                </div>
              )}
                  <MapCards searchValue={searchValue} selectedDate={selectedDate} selectedStatus={selectedStatus} />
            </section>
        </>
    );
}
