import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Context } from '../store/appContext';

const StarshipsCard = ({ name, uid, url })=> {
    const { store, actions } = useContext(Context);

    useEffect (() => {
        actions.getStarshipsDetails(uid)
    }, [uid])

    const starshipsDetails = store.starshipsDetails[uid] || {};

    return (
        <div className="row">
		    <div className="col-auto m-3">
                <div className="card" style={{width: "14rem"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><h5>Hyperdrive Rating: </h5>{starshipsDetails.properties && starshipsDetails.properties.hyperdrive_rating }</li>
                                    <li className="list-group-item"><h5>Pricetag:</h5> { starshipsDetails.properties && starshipsDetails.properties.cost_in_credits}</li>
                        </ul>
                        <div>
                            <Link to ={`/starships/${uid}`}>
                                <button className="btn btn-info">Learn More</button>
                            </Link>
                            <button className="btn float-end" onClick={() => {actions.AddFavorite(name);}}>
                                {store.favorites.includes(name) ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                    </svg>) :
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>)
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarshipsCard;
