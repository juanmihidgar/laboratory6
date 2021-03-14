import { Character, Episode } from './character.api-model';
import {
  mockEpisodesCollection,
  mockCharacterCollection,
} from './character.mock-data';

export const getCharacter = async (id: number): Promise<Character> => {
  return mockCharacterCollection.find((h) => h.id === id);
};
export const getEpisodes = async (): Promise<Episode[]> => {
  return mockEpisodesCollection;
};
export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
