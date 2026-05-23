import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveHeader } from "../../store/headerSlice";
import type { AppDispatch, RootState } from "../../store/store";

function HomeHeader() {
  const dispatch = useDispatch<AppDispatch>();

  const header = useSelector((state: RootState) => state.header);

  const [title, setTitle] = useState(header.title);
  const [videoUrl, setVideoUrl] = useState(header.videoUrl);

  // SAVE
  const save = () => {
    dispatch(
      saveHeader({
        title,
        videoUrl,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* LEFT */}
      <div className="space-y-6">

        {/* TITLE */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-5">Video Title</h3>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full text-black"
            placeholder="Title"
          />
        </div>

        {/* VIDEO URL */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-5">Video URL</h3>

          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="border p-2 w-full text-black"
            placeholder="https://example.com/video.mp4"
          />

          <button
            onClick={save}
            className="bg-black text-white px-4 py-2 mt-4"
          >
            Save
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
        <div className="relative h-[500px] bg-black">

          {/* VIDEO */}
          {header.videoUrl && (
            <video
              key={header.videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={header.videoUrl} />
            </video>
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111b] to-transparent" />

          {/* TITLE */}
          <div className="absolute bottom-10 left-10">
            <h1 className="text-6xl font-extrabold italic text-white">
              {header.title}
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeHeader;