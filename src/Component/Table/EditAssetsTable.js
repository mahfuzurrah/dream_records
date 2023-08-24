import { Table } from "antd";
import React, { useRef, useState } from "react";
import { FaRegEye, FaPause, FaPlay } from "react-icons/fa"; // Import the necessary icons
import { Link } from "react-router-dom";
import t_audio from "../assets/audio/Lukrembo.mp3";

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
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Action",
    render: (text, record) => (
      <div className="r_edit_delete">
        <Link to="#" className="edit">
          <FaRegEye className="icons" />
        </Link>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    audio: t_audio,
    track: "Track Here",
    type: "Type Here",
    status: "Approved",
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
