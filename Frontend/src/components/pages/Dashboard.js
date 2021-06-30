import React from 'react';
import './Dashboard.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <Navbar />
            <div>
                <h2 style={{ textAlign: 'center' }}>Admin Functions</h2>
                <br />
                <div className="card_IT19145280">
                    <h2>Add Conference</h2>
                    <p>
                        <Link
                            to='/add-conference'
                            className='nav-links'
                        >
                            <button className="button_IT19145280">View Function</button>
                        </Link>
                    </p>
                </div>
            </div>
            <br />
            <div>
                <div className="card_IT19145280">
                    <h1>View Conferences</h1>
                    <p>
                        <Link
                            to='/editor'
                            className='nav-links'
                        ><button className="button_IT19145280">View Function</button>
                        </Link>
                    </p>
                </div>
            </div>
            <br />
            <div>
                <div className="card_IT19145280">
                    <h2>Pending Research Papers</h2>
                    <p>
                        <Link
                            to='/research'
                            className='nav-links'
                        ><button className="button_IT19145280">View Function</button>
                        </Link>
                    </p>
                </div>
            </div>
            <br />
            <div>
                <div className="card_IT19145280">
                    <h2>Pending Workshop Proposals</h2>
                    <p>
                        <Link
                            to='/workshop'
                            className='nav-links'
                        ><button className="button_IT19145280">View Function</button>
                        </Link>
                    </p>
                </div>
            </div>

        </>
    );
}

export default Dashboard;
