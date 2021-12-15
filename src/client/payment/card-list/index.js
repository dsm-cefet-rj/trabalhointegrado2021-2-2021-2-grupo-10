import React from "react";
import Card from "..\..\card-info\index.js";

export default function CardList () {
    return (
        <div
            style={{
                height: "100%"
            }}
        >
            <ul>
                <li>
                    <Card/>
                </li>
            </ul>
        </div>
    );
}