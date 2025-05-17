
import { useState } from "react";
import { Upload, Trash2, Edit, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for demo purposes
const mockVideos = [
  { id: 1, title: "Grandpa John's Memorial", thumbnail: "/images/video-thumbnail-1.jpg" },
  { id: 2, title: "Aunt Martha's Memories", thumbnail: "/images/video-thumbnail-2.jpg" },
];

const VideoLibraryPage = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Simulate upload process
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Add new video after "upload" completes
            const newVideo = {
              id: Date.now(),
              title: file.name.replace(/\.[^/.]+$/, ""),
              thumbnail: "/images/video-thumbnail-3.jpg",
            };
            setVideos([...videos, newVideo]);
            setIsUploading(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const handleDelete = (id: number) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl gold-text font-bold mb-6">
              Your EtherQR Video Library
            </h1>
            <p className="text-xl text-gray-300">
              Upload and manage memorial videos for your loved ones
            </p>
          </div>

          {/* Upload Section */}
          <div className="elegant-card p-6 md:p-8 mb-12 animate-fade-in">
            <h2 className="text-xl font-playfair text-gold mb-6">Upload New Memorial Video</h2>
            
            <div className="border-2 border-dashed border-royal/40 rounded-lg p-6 text-center">
              {isUploading ? (
                <div className="space-y-4">
                  <p className="text-gray-300">Uploading video...</p>
                  <div className="w-full bg-marble-dark rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gold h-full transition-all duration-300 ease-out"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400">{uploadProgress}% complete</p>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-royal-light mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">
                    Drag and drop your video file here, or click to browse
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Maximum file size: 1GB, MP4 format
                  </p>
                  <Button className="memorial-button relative">
                    Select Video File
                    <input 
                      type="file" 
                      accept="video/mp4" 
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Video Management */}
          <div className="animate-fade-in">
            <h2 className="text-xl font-playfair text-gold mb-6">Your Memorial Videos</h2>
            
            {videos.length === 0 ? (
              <div className="text-center elegant-card p-12">
                <p className="text-gray-300">You haven't uploaded any videos yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map(video => (
                  <div key={video.id} className="video-card overflow-hidden">
                    <div className="aspect-video bg-marble-dark relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400">Video Thumbnail</div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-royal/30">
                      <h3 className="font-playfair text-white mb-3 truncate">{video.title}</h3>
                      
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="text-royal-light hover:text-gold">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-royal-light hover:text-destructive" onClick={() => handleDelete(video.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button className="text-gold flex items-center gap-1 text-sm hover:bg-royal/20">
                          <QrCode className="h-4 w-4" />
                          Generate QR
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibraryPage;
