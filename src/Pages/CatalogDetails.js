import React, { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaPause, FaPlay } from "react-icons/fa";
import t_audio from "../Component/assets/audio/Lukrembo.mp3";
import cover from "../Component/assets/img/cover.jpg";

function CatalogDetails() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleInfoVisibility = () => {
    setIsInfoVisible((prevIsInfoVisible) => !prevIsInfoVisible);
  };

  return (
    <div className="catalog_details">
      <div className="catalog_area">
        <div className="row">
          <div className="col-lg-3">
            <div className="cover_img">
              <img src={cover} alt="" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="cover_text_content">
              <div className="cover_header">
                <div className="status">
                  <p>Approved</p>
                </div>
                <div className="cover_edit">
                  <button className="btn_s">Edit</button>
                </div>
              </div>
              <div className="covr_title">
                <h1>Ek Sundori Maiya</h1>
                <h2>By Subha</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="catalog_release_info">
        <div className="song_info">
          <div className="title">
            <div className="custom-audio-player">
              <audio ref={audioRef} src={t_audio} />
              <button className="play_btn" onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <div>
              <h2>Ek Sundori Maiya</h2>
              <p>By Subha</p>
            </div>
          </div>
          <div className="toggle_icons" onClick={toggleInfoVisibility}>
            {isInfoVisible ? (
              <FaAngleUp className="icons active" />
            ) : (
              <FaAngleDown className="icons" />
            )}
          </div>
        </div>
        {isInfoVisible && (
          <div className="catalog_toggle_info">
            <hr />
            <div className="s_info">
              <div className="row">
                <h2 className="mb-4">Track Information</h2>
                <div className="col-xl-4 col-lg-6 col-md-12 mt-3">
                  <div className="input_value">
                    <p className="input_name">Primary Track Type</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Secondary Track Type</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Instrumental</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Title</p> <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Version/Subtitle</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Primary Artist </p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Featuring</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Remixer</p> <span>Not Found</span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 mt-3">
                  <div className="input_value">
                    <p className="input_name">Lyrics Writter</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Composer</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Arranger</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Producer</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">℗ Pline</p> <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Production Year</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Publisher</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">ISRC</p>
                    <span>Not Found</span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 mt-3">
                  <div className="input_value">
                    <p className="input_name">Gener</p> <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Subgenre</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Producer Catalogue Number</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Parental advisory</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Track Title Language</p> <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Lyrics Language</p>{" "}
                    <span>Not Found</span>
                  </div>
                  <div className="input_value">
                    <p className="input_name">Lyrics</p>{" "}
                    <span>Not Found</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="catalog_release_info s_info mt-3">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <h2 className="mb-4">Release Information</h2>
              <div className="col-lg-6 col-md-12 mt-3">
                <div className="input_value">
                  <p className="input_name">Release Title</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Version/Subtitle</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Primary Artist</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Featuring</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Remixer</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Various Artists / Compilation</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Genre</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Subgenre</p> <span>Not Found</span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-3">
                <div className="input_value">
                  <p className="input_name">Label Name</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Format</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Original Release Date</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">℗ line</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">℗ line</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Production Year</p>{" "}
                  <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">UPC/EAN</p> <span>Not Found</span>
                </div>
                <div className="input_value">
                  <p className="input_name">Producer Catalogue Number</p>
                  <span>Not Found</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <h2 className="mb-3">Release Date</h2>
            <div className="input_value">
              <p className="input_name">Main Release Date</p>
              <span>12-12-2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogDetails;
