import React from "react";

function SearchForm({ search, handleInputChange, handleFormSubmit }) {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={handleInputChange}
                        value={search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search For a Employee"
                        id="search"
                    />
                    <br />
                    <button onClick={handleFormSubmit} className="btn btn-primary">
                        Search
            </button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
