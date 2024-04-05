import { Button } from '@mui/material';

interface SubmitButtonProps {
  title?: string;
  width?: string;
  height?: string;
  margin?: string;
  color?: string;
  border?: string;
  padding?: string;
  borderColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export default function SubmitButton({
  title,
  width,
  height,
  margin,
  color,
  border,
  padding,
  borderColor,
  onClick,
  disabled,
  backgroundColor,
}: SubmitButtonProps) {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : '#6750A4',
        color: color ? color : '#fff',
        border: border ? border : 'none',
        borderColor: borderColor ? borderColor : '#6750A4',
        borderRadius: '16px',
        '&:hover': {
          backgroundColor: '#BF9DE9',
        },
        '&:focus': {
          outline: 'none',
        },
        width: width ? width : '193px',
        height: height ? height : '35px',
        fontSize: '14px',
        fontWeight: '400',
        fontHeight: '18.2px',
        textTransform: 'none',
        margin: margin ? margin : '0',
        padding: padding ? padding : '8.5px 12px',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
