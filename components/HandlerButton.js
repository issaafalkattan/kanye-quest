import React from 'react';
import Button from 'antd/lib/button';

const HandlerButton = ({ onClick }) => {
    return (
        <Button className="coolio" onClick={onClick} type="primary">
           HANDLE KANYE
           <style>{`
           .coolio{
            background : black;
            border: 1px solid white;
            width: 200px;
             height: 60px;
             font-weight: bold;

           }
           .coolio:hover{
             color : black;
             background: white;
            border: 1px solid black;
            width: 220px;
             height: 70px;
             font-weight: bolder;
           }
           `}</style>
        </Button>
    )
}

export default HandlerButton;