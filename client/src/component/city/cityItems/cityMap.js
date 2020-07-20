// import React, {Component} from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const CityMarker  = ({ text }) => <div>{text}</div>;
// class CityMap extends Component {
//     constructor(props) {
//         super(props);
//         this.zoom = 10;
//     }
//
//     componentDidMount() {
//     }
//
//     render() {
//         return (
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                 bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
//                 defaultCenter={{center:{
//                     lat:this.props.lat,
//                     lng:this.props.lng
//                 }}}
//                 defaultZoom={this.zoom} >
//
//                     <CityMarker lat={this.props.lat} lng={this.props.lng} text = {this.props.city } />
//                 </GoogleMapReact>
//
//             </div>
//         );
//     }
// }
//
// export default CityMap;