import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, SelectComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Episode } from './api';
import { Widgets } from '@material-ui/icons';
import { ImageTextFieldComponent } from 'common/components/form/image-text-field';

interface Props {
  character: Character;
  episodes: Episode[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, episodes, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="species" label="Specie" />
          <TextFieldComponent name="status" label="Status" />
          {/*   <SelectComponent name="episode" label="Episodes" items={episodes} />  */}
          <TextFieldComponent name="location.name" label="Location" />
          <ImageTextFieldComponent name="image" label="Imagen" />

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
