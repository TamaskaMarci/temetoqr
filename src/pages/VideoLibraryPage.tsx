
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2, Upload, VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const VideoLibraryPage = () => {
  const [videos, setVideos] = useState([
    { id: 1, title: "Grandpa's 80th Birthday", thumbnail: "/placeholder.svg", assigned: true },
    { id: 2, title: "Mom's Favorite Memories", thumbnail: "/placeholder.svg", assigned: false },
    { id: 3, title: "Dad's Life Story", thumbnail: "/placeholder.svg", assigned: true },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setVideos(videos.filter(video => video.id !== id));
    toast({
      title: "Video Deleted",
      description: "The video has been removed from your library.",
    });
  };

  const handleAssign = (id: number) => {
    setVideos(videos.map(video => 
      video.id === id ? { ...video, assigned: true } : video
    ));
    toast({
      title: "Video Assigned",
      description: "The video has been assigned to a QR code.",
    });
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // Validate file type
    if (!file.type.includes('video/')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a video file (MP4, MOV, etc).",
        variant: "destructive"
      });
      return;
    }
    
    // Validate file size (max 1GB)
    if (file.size > 1024 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Video size must be less than 1GB.",
        variant: "destructive"
      });
      return;
    }
    
    // Create a new video entry
    const newVideo = {
      id: Math.max(0, ...videos.map(v => v.id)) + 1,
      title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
      thumbnail: "/placeholder.svg",
      assigned: false
    };
    
    setVideos([...videos, newVideo]);
    
    toast({
      title: "Video Uploaded",
      description: `"${newVideo.title}" has been added to your library.`,
    });
    
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <img src="/images/logo.svg" alt="EtherQR Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-playfair text-gold font-bold tracking-wide">
            Your Memory Collection
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Upload, manage, and assign videos to your memorial QR codes. Each video preserves a precious memory for generations to come.
        </p>
      </div>

      {/* Hidden file input */}
      <input 
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="video/*"
        onChange={handleFileUpload}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upload New Video Card */}
        <Card className="elegant-card h-full flex flex-col justify-center border-dashed hover:border-gold cursor-pointer" onClick={triggerFileUpload}>
          <CardContent className="pt-8 pb-2 flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-royal/30 flex items-center justify-center mb-6">
              <Upload className="h-8 w-8 text-gold" />
            </div>
            <CardTitle className="text-xl text-gold">Upload New Memory</CardTitle>
            <p className="text-gray-400">
              Add a new video memory (MP4 format, max 1GB)
            </p>
            <Button className="bg-gold hover:bg-gold/80 text-black mt-6" onClick={(e) => {
              e.stopPropagation();
              triggerFileUpload();
            }}>
              <Upload className="h-4 w-4 mr-2" />
              Select Video
            </Button>
          </CardContent>
        </Card>

        {/* Video Cards */}
        {videos.map((video) => (
          <Card key={video.id} className="h-full flex flex-col border-gray-700/30">
            <CardHeader className="pb-0 pt-6">
              <CardTitle className="text-gold text-xl font-playfair">
                {video.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4 flex-grow">
              <div className="aspect-video bg-marble-dark/50 rounded flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-marble-dark to-transparent opacity-70"></div>
                <VideoIcon className="h-12 w-12 text-royal-light/50" />
              </div>
              <div className="mt-4 text-sm text-gray-400">
                {video.assigned ? (
                  <span className="flex items-center text-emerald-500">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Assigned to QR #EQ-{1000 + video.id}
                  </span>
                ) : (
                  <span className="text-gray-500">Not assigned to any QR code</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-6 flex justify-between">
              <Button 
                variant="outline" 
                className="text-red-500 border-red-500/20 hover:bg-red-950/20 hover:text-red-400"
                onClick={() => handleDelete(video.id)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
              {!video.assigned && (
                <Button 
                  className="bg-royal hover:bg-royal-light text-white"
                  onClick={() => handleAssign(video.id)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Assign to QR
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/buy">
          <Button className="bg-gold hover:bg-gold/80 text-black inline-flex">
            <Plus className="h-4 w-4 mr-2" />
            Purchase New QR Code
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VideoLibraryPage;
