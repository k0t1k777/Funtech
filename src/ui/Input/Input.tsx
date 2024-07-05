import 'src/ui/Input/Input.css';

interface InputProps {
  label: string;
}

export default function Input({ label }: InputProps) {
  return (
    <label className='label'>
      {label}
      <input className='label__input' type='text' />
    </label>
  );
}
