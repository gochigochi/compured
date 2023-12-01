import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

const location = { lat: -40.76281797433265, lng: -71.64183169130918 }

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY
    })

    return (
        <>
        {
            isLoaded ?
            <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
                disableDefaultUI: true,
                streetViewControl: false,
            }}
            center={location}
            zoom={16}
          >
            <MarkerF position={location} />
          </GoogleMap> : null
        }
        </>
    )
}

export default Map