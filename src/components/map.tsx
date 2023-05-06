import { useMemo } from "react"
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"

export default function DisplayMap() {
    const {isLoaded} = useLoadScript({googleMapsApiKey : "AIzaSyCiy3Nlw1CNL0H0VGFO3ulRSEfwG0b5xiQ"})


    return <>
            {!isLoaded ? <div>LOADING...</div> : <Map/>}
    </>
}
const center = {lat:38.8977, lng:-77.036560}
function Map() {
    return <GoogleMap zoom={15} center={center} mapContainerClassName="map">
        <MarkerF position={center}/>
    </GoogleMap>
}