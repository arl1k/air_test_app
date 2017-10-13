import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';

const PropertiesList = ({items}) => {

    let property = items.map((property) => {
        return (
          <Col sm={4} md={3}  key={property.listing.id} className='propContainer' data-propid={property.listing.id}>
            <ListGroupItem >
            <div className="mainPictureContainer">
                <img className="mainPicture" src={property.listing.picture_url}></img>
            </div>
            <div className="nameContainer">
                <span> <b>{property.listing.name}</b></span>
            </div>
            </ListGroupItem>
          </Col>
        )
      });
    
    return (
        <ListGroup sm={3} md={4}>
          {property}
        </ListGroup>
      )
}


export default PropertiesList;


// var airbnbObj = {};
// airbnbObj.listing = {
//   bathrooms: number,
//   bedrooms: number,
//   beds: number,
//   star_rating: number,
//   id: 21221274(number),
//   name: "",
//   picture_url: "main picture",
//   picture_urls: ['all pictures'],
//   room_type: "",
//   user: {
//     first_name: "",
//     id: number
//   }
// }

// airbnbObj.pricing_quote = {
//   rate: {
//     amount: number,
//     currency: "ILS"
//   }
// }