import { clsx } from '@mantine/core';
import { useIsFavorited } from '../../../hooks/useIsFavoried';
import { ReactComponent as Favorite } from '../../../assets/Favorite.svg';
import styles from './StarButton.module.scss';

const StarButton = ({ vacancy }) => {
  const [isFavorited, toggleFavorited] = useIsFavorited(vacancy);

  return (
    <Favorite
      className={clsx(styles.star, isFavorited && styles.star_filled)}
      onClick={toggleFavorited}
      data-elem={`vacancy-${vacancy.id}-shortlist-button`}
    />
  );
};
export default StarButton;
