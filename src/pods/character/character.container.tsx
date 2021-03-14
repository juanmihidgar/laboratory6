import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { Episode } from './api';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [episodes, setEpisodes] = React.useState<Episode[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadEpisodesCollection = async () => {
    const apiEpisodes = await api.getEpisodes();
    setEpisodes(apiEpisodes);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(parseInt(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (parseInt(id)) {
      handleLoadCharacter();
    }
    handleLoadEpisodesCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return (
    <CharacterComponent
      character={character}
      episodes={episodes}
      onSave={handleSave}
    />
  );
};
