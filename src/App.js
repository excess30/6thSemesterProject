import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ImageUploader from './component/index.js';
export default class App extends React.PureComponent {
    render() {
        return (
            <div className="page">
                <h1>Please Upload The Image </h1>
                <p>Demonstration Of An End To End System For The Detection Of Brain Tumor </p>
                <div className="head">Demo</div>
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                               withPreview={true} /> 
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                                withPreview={true} /> 
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                                withPreview={true} /> 
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                                withPreview={true} /> 
            </div>
        );
    }
}
