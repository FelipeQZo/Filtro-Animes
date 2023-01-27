export interface NodeAnime{
    id: Number;
    main_picture: MainPicture;
    title: String;
}

export interface MainPicture{
   large: String;
   medium:String;
}
export interface Anime{
    node: NodeAnime;
}