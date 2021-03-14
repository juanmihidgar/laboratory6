import Axios from 'axios';
import { Character, Episode } from './character.api-model';

const charactersUrl = 'http://localhost:3000/characters';
const episodesUrl = 'http://localhost:3000/episodes';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${charactersUrl}/${id}`);
  return data;
};

export const getEpisodes = async (): Promise<Episode[]> => {
  const { data } = await Axios.get<Episode[]>(episodesUrl);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${charactersUrl}/${character.id}`, character);
  } else {
    await Axios.post<Character>(charactersUrl, character);
  }
  return true;
};
