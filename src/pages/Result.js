import React from 'react';
import Navigation from '../components/Navigation';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

function Result() {
    const width = 900;
    const height = 192;

    const svgImageProgrammingPassed = localStorage.getItem('svgImageProgrammingStored')
    const svgImageTechnologiesPassed = localStorage.getItem('svgImageTechnologiesStored')

    const svgImageProgrammingPassedClean = DOMPurify.sanitize(svgImageProgrammingPassed);
    const svgImageTechnologiesPassedClean = DOMPurify.sanitize(svgImageTechnologiesPassed);

    const svgToPngUrl = (svgBlob) => new Promise((resolve) => {
        const image = new Image();
        image.onload = () => {
            let canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, width, height);
            resolve(canvas.toDataURL());
        }
        image.src = URL.createObjectURL(svgBlob);
    });

    const download = async (event) => {
        const { type } = event.target.dataset;
        const a = document.createElement('a');
        document.body.appendChild(a);
        const svgDoc = document.getElementById('result-svg');
        const blob = new Blob([svgDoc.outerHTML], {type:'image/svg+xml;charset=utf-8'});
        let url = '';
        if (type === 'png') {
            url = await svgToPngUrl(blob);
        } else {
            url = window.URL.createObjectURL(blob);
        }
        a.href = url;
        a.download = `thisisme.${type}`;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }

    return (
        <>
            <Navigation/>
            <div id="result">
                <svg id="result-svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                {parse(svgImageProgrammingPassedClean)}
                {parse(svgImageTechnologiesPassedClean)}
                </svg>
                <button id="download-button" data-type="svg" onClick={download}>Download SVG</button>
                <button id="download-button" data-type="png" onClick={download}>Download PNG</button>
            </div>
        </>
    );
}

export default Result;