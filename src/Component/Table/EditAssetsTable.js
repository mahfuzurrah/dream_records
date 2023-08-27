import { Table } from "antd";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import t_audio from "../assets/audio/Lukrembo.mp3";
import  DeletePopup from "../Modal/DeletePopup"

const columns = [
  {
    title: "#",
    dataIndex: "audio",
    render: (audio) => <CustomAudioPlayer audio={audio} />,
  },
  {
    title: "Track",
    dataIndex: "track",
  },
  {
    title: "Artist",
    dataIndex: "artist",
  },
  {
    title: "ISRC",
    dataIndex: "ISRC",
  },
  {
    title: "Action",
    render: (text, record) => (
      <div className="r_edit_delete">
        <Link to="#" className="edit">
        <BiPencil className="icons" />
        </Link>
        <DeletePopup/>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    audio: t_audio,
    track: "Track Here",
    artist: "Artist name",
    ISRC: "Not Found",
  },
  {
    key: "2",
    audio: t_audio,
    track: "Track Here",
    artist: "Artist name",
    ISRC: "Not Found",
  },
];

const CustomAudioPlayer = ({ audio }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="custom-audio-player">
      <audio ref={audioRef} src={audio} />
      <button className="play_btn" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

const EditAssetsTable = () => {
  return (
    <div>
      <Table
        className="release_audio_table"
        columns={columns}
        dataSource={data}
        scroll={{ x: 768 }}
      />
    </div>
  );
};

export default EditAssetsTable;
