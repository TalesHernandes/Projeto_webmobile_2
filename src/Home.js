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
                    <br />
                    <div className="filter-options wrapper">
                        <input 
                            type="radio"
                            name="select"
                            id="option-1"
                            value="date"
                            checked={filterType === 'date'}
                            onChange={handleFilterTypeChange}
                        />
                        <label for="option-1" class="option option-1">
                            <div class="dot"></div>
                            <span>Date</span>
                        </label>
                        <input 
                            type="radio"
                            name="select"
                            id="option-2"
                            value="status"
                            checked={filterType === 'status'}
                            onChange={handleFilterTypeChange}
                        />
                        <label for="option-2" class="option option-2">
                            <div class="dot"></div>
                            <span>Status</span>
                        </label>
                    </div>
                    { filterType === 'date' ?
                    <>
                        <br />
                        <br />
                        <label htmlFor="date">Select Date:</label>
                        <br /><br />
                        <input type="date" id="date" name="date" value={selectedDate} onChange={handleDateChange} />
                    </>
                    :
                    <>
                        <br />
                        <br />
                        <label htmlFor="status">Select Status:</label>
                        <br />
                        <br />
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
