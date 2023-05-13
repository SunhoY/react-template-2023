import styled from '@emotion/styled';
import { type FC } from 'react';

const Button = styled.button({
  width: 50,
});

interface Props {
  text: string;
  onClick: () => void;
}

export const MyButton: FC<Props> = ({ text, onClick }: Props) => (
  <Button onClick={onClick}>{text}</Button>
);
