import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/preview.css';

const PreviewCard = ({ title, imageSrc, link }) => {
    return (
        <div className="preview-card">
            <h2>{title}</h2>
            <img src={imageSrc} alt="" className="preview-image" />
            <Link to={link} className="preview-button">Go to {title}</Link>
        </div>
    );
};

export default PreviewCard;
