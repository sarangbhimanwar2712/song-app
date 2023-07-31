import { SELECTED_SONG } from "./actionTypes";



export const selectedSong = (song) => {
    return {
        type: SELECTED_SONG,
        payload: song
    };
}
