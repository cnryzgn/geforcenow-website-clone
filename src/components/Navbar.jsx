import React, { useState } from 'react'

export default function Navbar({ setInput }) {
    const [toggle, setToggle] = useState(false)
    const [searchBar, setSearchBar] = useState(false)

    return (
        <nav>
            <div className="left-side">
                <i onClick={() => setSearchBar(false)} className="fa-solid fa-arrow-left"></i>
                <div className="go-back explanation">
                    Go back
                </div>
                <h3>Games</h3>
            </div>

            <div 
                onClick={() => setSearchBar(true)} 
                className="searchbar">
                <i  className="fa-solid fa-magnifying-glass"></i>
                <input 
                    type="text"
                    placeholder='Find your games'
                    onChange={(e) => setInput(e.target.value.toLowerCase())}    
                    className={searchBar ? 'searchbarOpen': ''}
                />
            </div>

            <div className='right-side'>
                <div className="feedback">
                    <i className="fa-solid fa-message"></i>
                    <div className="feedback-explanation explanation">
                        Send feedback
                    </div>
                </div>

                <div 
                    onClick={() => setToggle(prevState => !prevState)} 
                    className="account-settings"
                >
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="account-details">
                        <h3>Username</h3>
                        <p>Premium</p>
                    </div>
                    <div className="username-explanation explanation">
                        username
                    </div>
                    <i className="fa-solid fa-sort-down"></i>

                    <div
                        style={{ display: toggle ? 'flex' : 'none' }}
                        className="dropdown"
                    >
                        <a href="#">Account</a>
                        <a href="#">Log out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}