import * as React from "react";
import { FC, useEffect, useRef } from "react";

import "./galery-item.scss";

interface GaleryItemProps {
    imageSrc: string;
    imagePreviewSrc: string;
    imageName: string;
}

const GaleryItem: FC<GaleryItemProps> = ({
    imageSrc,
    imagePreviewSrc,
    imageName,
}) => {
    const name = imageName.split("_").join(" ");
    const blurRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current && blurRef.current) {
            imageRef.current.addEventListener("load", () => {
                blurRef.current?.classList.add("loaded");
            });
        }
    }, []);

    return (
        <div className="galeryItem">
            <div
                ref={blurRef}
                className="blur-load"
                style={{
                    backgroundImage: `url(${imagePreviewSrc})`,
                }}
            >
                <img
                    ref={imageRef}
                    src={imageSrc}
                    className="image"
                    alt={imageName}
                    loading="lazy"
                />
            </div>
            <p>{name}</p>
        </div>
    );
};

export default GaleryItem;
