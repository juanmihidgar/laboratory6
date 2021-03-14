import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { grey, green, red } from '@material-ui/core/colors';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { CenteredLayout } from 'layouts';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <div
            style={{
              borderRadius: '.5rem',
              height: '2rem',
              width: '5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              background:
                character.status === 'Alive'
                  ? green[100]
                  : character.status === 'Dead'
                  ? red[100]
                  : grey[100],
            }}
          >
            <span style={{ textTransform: 'capitalize' }}>
              {character.status}
            </span>
          </div>
        }
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '100%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.location.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
