import React from "react";

export default function Header () {
    return (
        <div
            style={{
                height:"80px",
                backgroundColor: "red",
                paddingLeft: "12px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
            }}
        >
            <p>Configurações de Pagamento</p>
        </div>
    );
}