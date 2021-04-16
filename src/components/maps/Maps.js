import "bootstrap/dist/css/bootstrap.min.css";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 32.0853, lng: 34.7818 }} >

    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


export default function App () {
  return(
    <div>
      <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyByQ8vAU2oi1-E7WPwe9fe1N9nDXG7HeVs&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `90vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  )
}