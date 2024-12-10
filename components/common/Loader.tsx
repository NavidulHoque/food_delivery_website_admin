"use client"

import { ColorRing } from "react-loader-spinner"

export default function Loader({width, height}: {width: string, height: string}) {
    return (
        <ColorRing
            visible={true}
            height={height}
            width={width}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    )
}
