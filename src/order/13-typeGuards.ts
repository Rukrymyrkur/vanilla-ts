type Album = {
  title: string;
  artist: string;
  songs: Song[];
};

type Song = {
  title: string;
  artist: string;
  duration: number;
};

const playAlbum = (music: Album) => { };
const playSong = (music: Song) => { };

const playMusic = (music: Album | Song) => {
  if ('songs' in music) {
    playAlbum(music)
  } else {
    playSong(music)
  }
};
