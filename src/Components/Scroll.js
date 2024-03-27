import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid orange', height: '600px', borderRadius: '5px' }}>
            {props.children}
        </div>
    );
}
export default Scroll;