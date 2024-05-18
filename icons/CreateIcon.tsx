import { Feather } from '@expo/vector-icons';
import { FeatherIconProps } from '../types';

const CreateIcon = ({ size, color = 'black' }: FeatherIconProps) => {
  return <Feather name='plus' size={size} color={color} />;
};

export default CreateIcon;
