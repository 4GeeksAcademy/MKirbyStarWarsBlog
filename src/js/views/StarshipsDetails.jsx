import React, { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const StarshipsDetails = ({ name, uid, url }) => {
    const { store, actions } = useContext(Context);

    useEffect (() => {
        actions.getStarshipsDetails(uid)
    }, [uid, actions])

    const starshipsDetails = store.starshipsDetails[uid] || {};
    
    return (
        <div>
            <div className="card mb-3 border-0 bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src ="https://placehold.co/800x600" className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body container-fluid mx-5 px-5">
                            <h1 className="card-title h-100 d-flex align-items-center justify-content-center"> {name} </h1>
                            <p className="card-text h-100 mx-5 px-5 py-2 d-flex align-items-center justify-content-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Nunc sed blandit libero volutpat sed cras ornare. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                                Morbi non arcu risus quis varius quam. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. 
                                Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra mauris in aliquam sem fringilla ut. 
                                Neque ornare aenean euismod elementum. Sapien pellentesque habitant morbi tristique. 
                                Ut consequat semper viverra nam libero justo laoreet sit. Arcu dui vivamus arcu felis bibendum ut. 
                                Suspendisse sed nisi lacus sed viverra. Imperdiet dui accumsan sit amet nulla facilisi. 
                                Eget mauris pharetra et ultrices neque ornare aenean euismod elementum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="bg-danger border-2 border-top border-danger" />
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <ul className="list-group list-group-horizontal bg-dark"> 
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">MGLT: { starshipsDetails.properties && starshipsDetails.properties.MGLT }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Cargo capacity: { starshipsDetails.properties && starshipsDetails.properties.cargo_capacity }</li>
                        <li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Cost in Credits: { starshipsDetails.properties && starshipsDetails.properties.cost_in_credits }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Hyperdrive Rating: { starshipsDetails.properties && starshipsDetails.properties.hyperdrive_rating }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Manufacturer: { starshipsDetails.properties && starshipsDetails.properties.manufacturer }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Passengers: { starshipsDetails.properties && starshipsDetails.properties.passengers }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

StarshipsDetails.propTypes = {
	match: PropTypes.object
}; 

export default StarshipsDetails;



















// import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// const StarshipsDetails = ({ name, uid, url }) => {
// 	const { store, actions } = useContext(Context);
//     const params= useParams();


// 	useEffect(() => {
// 		actions.getStarshipsDetails(params.id)
// 	}, [params.id])
	
// 	return (

//  <>
// 			<div className="card mb-3 border-0 bg-dark text-white">
// 			<div className="row g-0">
// 				<div className="col-md-4">
// 					<img src="https://placehold.co/800x600"className="img-fluid rounded-start mx-3" alt="..." />
// 				</div>
// 				<div className="col-md-8">
// 					<div className="card-body container-fluid mx-5 px-5">
// 						<h1 className="card-title h-100 d-flex align-items-center justify-content-center">{store.starshipsDetails.properties.name}</h1>
// 						<p className="card-text h-100 mx-5 px-5 py-2 d-flex align-items-center justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Morbi non arcu risus quis varius quam. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra mauris in aliquam sem fringilla ut. Neque ornare aenean euismod elementum. Sapien pellentesque habitant morbi tristique. Ut consequat semper viverra nam libero justo laoreet sit. Arcu dui vivamus arcu felis bibendum ut. Suspendisse sed nisi lacus sed viverra. Imperdiet dui accumsan sit amet nulla facilisi. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum.</p>
// 					</div>
// 				</div>
// 				<div className="col-md-4"></div>
// 			</div>
// 			</div>
// 			<div>
// 			<hr className="bg-danger border-2 border-top border-danger" />
// 			<div className="container-fluid d-flex align-items-center justify-content-center">
// 				{store.starshipsDetails && (
// 						<ul className="list-group list-group-horizontal bg-dark">
// 						<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name <br />{store.starshipsDetails.properties.name}</li>
// 						{/* <li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Birth Year <br />{store.starshipsDetails.properties.birth_year}</li>
// 						<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Gender <br />{store.starshipsDetails.properties.gender}</li>
// 						<li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Height <br />{store.starshipsDetails.properties.height}</li>
// 						<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Skin Color <br />{store.starshipsDetails.properties.skin_color}</li>
// 						<li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Hair Color <br />{store.starshipsDetails.properties.hair_color}</li>
// 						<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Mass<br />{store.starshipsDetails.properties.mass}</li>
// 						<li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Eye Color <br />{store.starshipsDetails.properties.eye_color}</li> */}
// 					</ul>
// 				)}
// 			</div>
// 			</div>
// </>
// 	);
// };


// export default StarshipsDetails;

// StarshipsDetails.propTypes = {
// 	match: PropTypes.object
// }; 
