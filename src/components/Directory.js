import React, { useState } from 'react';
import '../App.css';

const Directory = () => {
  const folders = ['a', 'B', 'c'];
  const [currentPath, setCurrentPath] = useState('');

  const handleFolderClick = (folderName) => {
    setCurrentPath(prevPath => prevPath + '/' + folderName);
  };

  const handleBackClick = () => {
    const pathArray = currentPath.split('/').filter(folder => folder !== '');
    pathArray.pop(); // Remove the last folder
    setCurrentPath(pathArray.length > 0 ? '/' + pathArray.join('/') : '');
  };

  const handleFileDownload = (fileName) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/images/${fileName}`;
    link.download = fileName; // This sets the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="directory-container">
      <div className="directory-header">
        <span className="directory-title">📁 DIRECTORY</span>
        <span className="directory-path">C:\SYSTEM\FILES{currentPath.replace(/\//g, '\\')}</span>
      </div>
      
      <div className="directory-content">
        
        <div className="file-list">
            {currentPath && (
            <div className="folder-item" onClick={handleBackClick}>
                <div className="folder-icon">📁</div>
                <span className="folder-name">..</span>
            </div>
            )}
            {currentPath === '/a/B/c' ? (
              <div className="folder-item file-item" onClick={() => handleFileDownload('cat.png')}>
                <div className="file-icon">🖼️</div>
                <span className="file-name">cat.png</span>
              </div>
            ) : (
              folders.map((folderName, index) => (
                <div key={index} className="folder-item" onClick={() => handleFolderClick(folderName)}>
                <div className="folder-icon">📁</div>
                <span className="folder-name">{folderName}</span>
                </div>
              ))
            )}
        </div>
      </div>
      
      <div className="directory-footer">
        <span className="status-text">
          {currentPath === '/a/B/c' ? '1 file | Ready' : `${folders.length} folders | Ready`}
        </span>
      </div>
    </div>
  );
};

export default Directory;


