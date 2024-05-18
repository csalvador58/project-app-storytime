import { AntDesign } from '@expo/vector-icons';
import { AntDesignIconProps } from '../types';

const ProfileIcon = ({ size, color = 'black' }: AntDesignIconProps) => {
  return <AntDesign name='profile' size={size} color={color} />;
};

export default ProfileIcon;
