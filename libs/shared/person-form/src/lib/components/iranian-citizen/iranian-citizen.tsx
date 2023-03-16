import { Button, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  nationalCode: string;
}

export interface IranianCitizenProps {}

export function IranianCitizen(props: IranianCitizenProps) {
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="کدملی"
        variant="outlined"
        {...register('nationalCode', {
          required: true,
          pattern: /^[0-9]{10}$/,
        })}
      />
      <Button variant="contained" disabled={!watch('nationalCode')}>
        ادامه
      </Button>
    </form>
  );
}

export default IranianCitizen;
