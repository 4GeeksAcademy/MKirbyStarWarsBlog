import React, { useContext, useEffect } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const PlanetDetails = ({ name, uid, url }) => {
    const { store, actions } = useContext(Context);

    useEffect (() => {
        actions.getPlanetDetails(uid)
    }, [uid, actions])

    const planetDetails = store.PlanetDetails[uid] || {};
    
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
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Climate: { planetDetails.properties && planetDetails.properties.climate }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Diameter: { planetDetails.properties && planetDetails.properties.diameter }</li>
                        <li className="list-group-item bg-dark text-warning border-1 border-light mx-3 py-3 text-center">Gravity: { planetDetails.properties && planetDetails.properties.gravity }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Population: { planetDetails.properties && planetDetails.properties.population }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Terrain: { planetDetails.properties && planetDetails.properties.terrain }</li>
                        <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Orbital Period: { planetDetails.properties && planetDetails.properties.orbital_period }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

PlanetDetails.propTypes = {
	match: PropTypes.object
}; 

export default PlanetDetails;








// import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// const PlanetDetails = ({ name, uid, url }) => {
// 	const { store, actions } = useContext(Context);
//     const params= useParams();
//     // console.log(params)

// 	useEffect(() => {
// 		actions.getPlanetDetails(params.id)
// 	}, [params.id])
	
//     const planetDetails = store.PlanetDetails[uid] || {};
//     const planetProperties = planetDetails.properties || {};

// 	return (

//  <>
// 			<div className="card mb-3 border-0 bg-dark text-white">
// 			<div className="row g-0">
// 				<div className="col-md-4">
// 					<img src="https://placehold.co/800x600" className="img-fluid rounded-start mx-3" alt="..." />
// 				</div>
// 				<div className="col-md-8">
// 					<div className="card-body container-fluid mx-5 px-5">
// 						<h1 className="card-title h-100 d-flex align-items-center justify-content-center">{planetProperties.name}</h1>
// 						<p className="card-text h-100 mx-5 px-5 py-2 d-flex align-items-center justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat sed cras ornare. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Morbi non arcu risus quis varius quam. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra mauris in aliquam sem fringilla ut. Neque ornare aenean euismod elementum. Sapien pellentesque habitant morbi tristique. Ut consequat semper viverra nam libero justo laoreet sit. Arcu dui vivamus arcu felis bibendum ut. Suspendisse sed nisi lacus sed viverra. Imperdiet dui accumsan sit amet nulla facilisi. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum.</p>
// 					</div>
// 				</div>
// 				<div className="col-md-4"></div>
// 			</div>
// 			</div>
// 			<div>
// 			<hr className="bg-danger border-2 border-top border-danger" />
// 			<div className="container-fluid d-flex align-items-center justify-content-center">
// 				{store.planetDetails && (
// 						<ul className="list-group list-group-horizontal bg-dark">
// 						<li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
//                         <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
//                         <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
//                         <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
//                         <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
//                         <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
//                         <li className="list-group-item bg-dark text-info border-1 border-light mx-3 py-3 text-center">Name: <br />{planetProperties.name}</li>
// 					</ul>
// 				)}
// 			</div>
// 			</div>
// </>
// 	);
// };


// export default PlanetDetails;

// PlanetDetails.propTypes = {
// 	match: PropTypes.object
// }; 
