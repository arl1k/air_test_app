import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';

// class PropertiesList extends React.Component {
const PropertiesList = ({items}) => {
    // render(){
    //     return (
    //         <div id="propertiescontainer">
    //         {this.props.items.map((property, idx) => {
    //           return (
    //             <PropertyRow 
    //             item={property} 
    //             key={property.listing.id} 
    //             id={property.listing.id}
    //             />
    //           )
    //         })}
    //       </div>
    //     )
    // }

    let property = items.map((property) => {
        return (
          <Col sm={6} md={3}  key={property.listing.id} className='propContainer' data-propid={property.listing.id}>
            <ListGroupItem >
            <div className="mainPictureContainer">
                <img className="mainPicture" src={property.listing.picture_url}></img>
            </div>
            <div>
                <span> <b> {property.pricing_quote.rate["amount"]} {property.pricing_quote.rate["currency"]} {property.listing.name}</b></span>
            </div>
            </ListGroupItem>
          </Col>
        )
      });
    
    return (
        <ListGroup>
          {property}
        </ListGroup>
      )
}

class PropertyRow extends React.Component {
    render(){
        return (
            <div className="propRow">
                        <div className="details" data-propid={this.props.item.listing.id}>
                            <span>{this.props.item.listing.name}</span>
                            <span>{this.props.item.listing.user.first_name}</span>
                            <span>{this.props.item.pricing_quote.rate["amount"]} + {this.props.item.pricing_quote.rate["currency"]}</span>
                        </div>
            </div>
        )
    }
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