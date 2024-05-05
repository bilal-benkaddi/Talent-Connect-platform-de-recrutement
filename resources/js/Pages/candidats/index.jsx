import React, { useEffect } from "react";

const index = ({ candidats }) => {
   
    useEffect(() => {
        console.log("candidats", candidats);
    }, []);
    let candidatslist = candidats.map(function (candidat) {
        return <li>{candidat.nom}</li>;
    });
    return (
        <div > 
            <ol>{candidatslist}</ol>
        </div>
    );
};
export default index;
