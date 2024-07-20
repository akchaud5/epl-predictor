import React from 'react';
import PreviewCard from '../components/PreviewCard';
import '../styles/preview.css';

const PreviewContainer = () => {
    return (
        <div className="preview-page">
            <PreviewCard
                title="Predict"
                imageSrc="/path/to/my/predict-image.jpg"
                link="/predict"
            />
            <PreviewCard
                title="Predict Custom"
                imageSrc="/path/to/my/predict-custom-image.jpg"
                link="/predict-custom"
            />
            <PreviewCard
                title="About"
                imageSrc="/path/to/my/about-image.jpg"
                link="/about"
            />
        </div>
    );
};

export default PreviewContainer;
