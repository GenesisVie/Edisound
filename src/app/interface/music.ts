export interface Music {
  id: number,
  title:string,
  author:string,
  path:string,
  cover:string,
}

export interface WaitList {
  pos: number,
  title:string,
  author:string,
  path:string,
  cover:string,
}

export interface MusicItemPlaylist {
  id: number,
  title:string,
  author:string,
  path:string,
  cover:string,
  alreadyInPlaylist: boolean
}
