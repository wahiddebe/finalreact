import React from "react";
import { Gap, StyledLink } from "../../styled";
import "./card.scss";

const Card = ({ judul, deskripsi, photo, alt, link, label, color }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <div className="photoWrapper">
            <img src={photo} alt={alt} className="avatar"></img>
          </div>
          <p className="judul">{judul}</p>
          <p className="deskripsi">{deskripsi}</p>
          <Gap height={20} />
          <StyledLink href={link} label={label} color={color} />
        </div>
      </div>
    </div>
  );
};

export default Card;
