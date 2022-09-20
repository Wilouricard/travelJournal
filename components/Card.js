import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} />
            <div className="info">
                <div className="location">
                    <img src="./images/loc.png" />
                    <h6>{props.item.location}</h6>
                    <p><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h1>{props.item.title}</h1>
                <h2>{props.item.startDate} - {props.item.endDate}</h2>
                <h3>{props.item.description}</h3>
            </div>
        </div>
    )
}