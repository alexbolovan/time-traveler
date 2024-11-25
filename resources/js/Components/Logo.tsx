import {PageProps} from "@/types";

export default function Logo({x, y} : PageProps<{x : number, y: number}>) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"
             viewBox="0 0 97.2 125" width={x} height={y}>
            <g transform="translate(97.2, 0) scale(-1, 1)">
                <polygon
                    className="st0"
                    points="34.7,46.9 64.1,46.9 64.1,39.4 47.7,40"
                    style={{fill: "none", stroke: "white", strokeWidth: 1}}
                />
                <path
                    className="st1"
                    d="M95.2,48.9l-1.8-5.5l-0.5-0.5v-1.5l-2-4.6h-2.2L86,39.4l-1-2h-1.7l-2.5,1.9C63.4,36,47.6,38,47.6,38l-14,6.3L4.7,48.4   l-1.4,3.1l-2.7,0.4v4.7l4.6,1.7l8.5,1c-0.2-0.6-0.3-1.3-0.3-2c0-3.9,3.2-7,7-7s7,3.2,7,7c0,0.4,0,0.7-0.1,1.1l6.8,1.9h8.8l0.9,0.9   h16.6l0.9-0.9l8.5-1.2c-0.1-0.6-0.2-1.1-0.2-1.7c0-3.9,3.2-7,7-7c3.8,0,6.9,3,7,6.7l3.6-0.5l0.6,1.4l2.7-0.8c0,0,4,0.5,4.2-1.2   v-2.3c0,0,1.5,0.2,1.8-1.3v-2.2C96.5,50.3,96.5,49,95.2,48.9z M64.1,46.9H34.7L47.7,40l16.4-0.6V46.9z"
                    style={{fill: "none", stroke: "white", strokeWidth: 1}}
                />
                <path
                    className="st1"
                    d="M20.5,51.5c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9c3.3,0,5.9-2.6,5.9-5.9   C26.4,54.1,23.8,51.5,20.5,51.5z M20.5,61.7c-2.4,0-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4c2.4,0,4.4,2,4.4,4.4   C24.9,59.8,23,61.7,20.5,61.7z"
                    style={{fill: "none", stroke: "white", strokeWidth: 1}}
                />
                <path
                    className="st1"
                    d="M76.5,51.5c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9c3.3,0,5.9-2.6,5.9-5.9   C82.4,54.1,79.8,51.5,76.5,51.5z M76.5,61.7c-2.4,0-4.4-2-4.4-4.4c0-2.4,2-4.4,4.4-4.4c2.4,0,4.4,2,4.4,4.4   C80.9,59.8,79,61.7,76.5,61.7z"
                    style={{fill: "none", stroke: "white", strokeWidth: 1}}
                />
            </g>
        </svg>


    )
}
