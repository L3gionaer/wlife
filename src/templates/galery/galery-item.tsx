import * as React from "react"
import { FC } from "react";

import "./galery-item.scss";

interface GaleryItemProps {
    imageSrc: string
    imageName: string;
}

const GaleryItem: FC<GaleryItemProps> = ({ imageSrc, imageName }) => {
    const name = imageName.split("_").join(" ");

    return (
        <div className="galeryItem">
            <img src={imageSrc} className="image" alt={imageName}/>
            <p>{ name }</p>
        </div>
    )
}

export default GaleryItem;

