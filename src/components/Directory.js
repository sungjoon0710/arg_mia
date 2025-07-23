import React from 'react';
import '../App.css';

const Directory = () => {
  const folders = ['a', 'b', 'c'];

  return (
    <div className="directory-container">
      <div className="directory-header">
        <span className="directory-title">📁 DIRECTORY</span>
        <span className="directory-path">C:\SYSTEM\FILES\</span>
      </div>
      
      <div className="directory-content">
        <div className="file-list">
          {folders.map((folderName, index) => (
            <div key={index} className="folder-item" onClick={() => console.log(`Opening folder: ${folderName}`)}>
              <div className="folder-icon">📁</div>
              <span className="folder-name">{folderName}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="directory-footer">
        <span className="status-text">{folders.length} folders | Ready</span>
      </div>
    </div>
  );
};

export default Directory;


