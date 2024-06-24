import React from "react";

const Card = () => {
    return (
        <div className="card mb-5" style={{ width: "18rem;" }}>
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo incidunt doloribus eos autem repudiandae deleniti quae recusandae, pariatur possimus consequuntur rerum minima provident culpa dolore ullam unde quia non?</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;