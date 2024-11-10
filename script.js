// src/MusicPlayer.js
import React, { useState, useRef } from 'react';

const songs = [
    { title: "Money On My Mind", artist: "DARKO", src: "path/to/song1.mp3" },
    { title: "Back In Action", artist: "The Shire", src: "path/to/song2.mp3" },
    { title: "Every Day Is Summer", artist: "The Shire", src: "path/to/song3.mp3" },
    { title: "Chill Day", artist: "LAKEY INSPIRED", src: "path/to/song4.mp3" },
    { title: "Sunny", artist: "KODOMOi", src: "path/to/song5.mp3" },
    { title: "Dreams", artist: "Joakim Karud", src: "path/to/song6.mp3" },
    { title: "Island", artist: "Declan DP", src: "path/to/song7.mp3" },
    { title: "Funky One", artist: "Bensound", src: "path/to/song8.mp3" },
    { title: "Happy", artist: "MBB", src: "path/to/song9.mp3" },
    { title: "Going Higher", artist: "Bensound", src: "path/to/song10.mp3" },
];

const MusicPlayer = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(new Audio(songs[currentSongIndex].src));

    const play = () => {
        audioRef.current.play();
    };

    const pause = () => {
        audioRef.current.pause();
    };

    const next = () => {
        setCurrentSongIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % songs.length;
            audioRef.current.src = songs[newIndex].src;
            audioRef.current.play();
            return newIndex;
        });
    };

    const previous = () => {
        setCurrentSongIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + songs.length) % songs.length;
            audioRef.current.src = songs[newIndex].src;
            audioRef.current.play();
            return newIndex;
        });
    };

    return (
        <div className="container">
            <h2>{songs[currentSongIndex].title} - {songs[currentSongIndex].artist}</h2>
            <div className="btn-group">
                <button type="button" onClick={play} className="btn btn-dark">Play</button>
                <button type="button" onClick={pause} className="btn btn-secondary">Pause</button>
                <button type="button" onClick={next} className="btn btn-dark">Next</button>
                <button type="button" onClick={previous} className="btn btn-secondary">Previous</button>
            </div>
        </div>
    );
};

export default MusicPlayer;
