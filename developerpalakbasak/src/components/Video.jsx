import React from 'react'

const Video = () => {
  return (
    <div className="aspect-video w-full max-w-3xl mx-auto">
      <iframe
        src="https://drive.google.com/file/d/1QjB9mS_r0h-4x7OjgyZT4TGZzaP1yWn2/preview"
        width="100%"
        height="480"
        allow="autoplay"
        allowFullScreen
        title="Google Drive Video"
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

export default Video
