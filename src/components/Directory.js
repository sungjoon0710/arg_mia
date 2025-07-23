import React, { useState } from 'react';
import '../App.css';

const Directory = () => {
  const folders = ['a', 'b', 'c'];
  const [currentPath, setCurrentPath] = useState('');

  const handleFolderClick = (folderName) => {
    setCurrentPath(prevPath => prevPath + '/' + folderName);
  };

  const handleBackClick = () => {
    const pathArray = currentPath.split('/').filter(folder => folder !== '');
    pathArray.pop(); // Remove the last folder
    setCurrentPath(pathArray.length > 0 ? '/' + pathArray.join('/') : '');
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
            {folders.map((folderName, index) => (
                <div key={index} className="folder-item" onClick={() => handleFolderClick(folderName)}>
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


