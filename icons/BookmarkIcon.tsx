import { Feather } from '@expo/vector-icons';
import { FeatherIconProps } from '../types';

const BookmarkIcon = ({ size, color = 'black' }: FeatherIconProps) => {
  return <Feather name='bookmark' size={size} color={color} />;
};

export default BookmarkIcon;
