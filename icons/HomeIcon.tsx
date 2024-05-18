import { Feather } from '@expo/vector-icons';
import { FeatherIconProps } from '../types';

const HomeIcon = ({ size, color = 'black' }: FeatherIconProps) => {
  return <Feather name='home' size={size} color={color} />;
};

export default HomeIcon;
