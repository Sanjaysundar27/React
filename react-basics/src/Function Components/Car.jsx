import React from "react";

export default function Car(props) {
    const { carInfo } = props;
    const { brand, color } = carInfo;

    const text = `Hi, I'm a ${color} ${brand} Car`;
    const showCarInfo = brand !== undefined && color !== undefined;

    return (
        <div>
            {showCarInfo ? <h2>{text}</h2> : null}
        </div>
    );
}
