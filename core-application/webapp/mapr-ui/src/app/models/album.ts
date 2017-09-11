export interface Artist {
  id: string,
  name: string
}

export interface Track {
  id: string,
  name: string,
  duration: string,
  position: string
}

export interface Language {
  code: string,
  name: string
}

export interface Album {
  id: string,
  title: string,
  coverImageURL: string,
  format: string,
  style: string,
  slug: string,
  language: Language,
  trackList: Array<Track>,
  country: string,
  artists: Array<Artist>
}

export interface AlbumsPage {
  albums: Array<Album>,
  totalNumber: number
}
