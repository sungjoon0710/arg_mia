import React, { useState } from 'react';
import '../App.css';

const Directory = () => {
  const folders = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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
{currentPath === '/t/o/B/I/a/s/O/h' ? (
  <>
    <div className="folder-item file-item" onClick={() => handleFileDownload('chat1.png')}>
      <div className="file-icon">🖼️</div>
      <span className="file-name">chat1.png</span>
    </div>
    <div className="folder-item file-item" onClick={() => handleFileDownload('unknown.txt')}>
      <div className="file-icon">📄</div>
      <span className="file-name">1.txt</span>
    </div>
  </>
) : currentPath === '/m/e/l/i/n/D/A/T/A/k' ? (
  <>
    <div className="folder-item file-item" onClick={() => handleFileDownload('chat2.png')}>
      <div className="file-icon">🖼️</div>
      <span className="file-name">chat2.png</span>
    </div>
    <div className="folder-item file-item" onClick={() => handleFileDownload('unknown.txt')}>
      <div className="file-icon">📄</div>
      <span className="file-name">2.txt</span>
    </div>
  </>
) : currentPath === '/j/E/N/n/i/f/E/R/G/y/u' ? (
  <>
    <div className="folder-item file-item" onClick={() => handleFileDownload('chat3.png')}>
      <div className="file-icon">🖼️</div>
      <span className="file-name">chat3.png</span>
    </div>
    <div className="folder-item file-item" onClick={() => handleFileDownload('unknown.txt')}>
      <div className="file-icon">📄</div>
      <span className="file-name">3.txt</span>
    </div>
  </>
) : currentPath === '/M/i/k/E/C/h/o/i' ? (
  <>
    <div className="folder-item file-item" onClick={() => handleFileDownload('chat4.png')}>
      <div className="file-icon">🖼️</div>
      <span className="file-name">chat4.png</span>
    </div>
    <div className="folder-item file-item" onClick={() => handleFileDownload('unknown.txt')}>
      <div className="file-icon">📄</div>
      <span className="file-name">4.txt</span>
    </div>
  </>
) : currentPath === '/C/O/N/N/I/E/C/H/O/I' ? (
  <>
    <div className="folder-item file-item" onClick={() => handleFileDownload('chat5.png')}>
      <div className="file-icon">🖼️</div>
      <span className="file-name">chat5.png</span>
    </div>
    <div className="folder-item file-item" onClick={() => handleFileDownload('unknown.txt')}>
      <div className="file-icon">📄</div>
      <span className="file-name">5.txt</span>
    </div>
  </>
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


