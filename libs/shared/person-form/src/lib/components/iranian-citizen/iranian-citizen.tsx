import { Button, Divider, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  nationalCode: string;
}

export interface IranianCitizenProps {}

export function IranianCitizen(props: IranianCitizenProps) {
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <React.Fragment>
      <Divider textAlign="left">اطلاعات هویتی</Divider>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        <TextField
          id="outlined-basic"
          label="کدملی"
          variant="outlined"
          {...register('nationalCode', {
            required: true,
            pattern: /^[0-9]{10}$/,
          })}
          className="!ml-5"
        />
        <Button variant="contained" disabled={!watch('nationalCode')}>
          ادامه
        </Button>
      </form>
    </React.Fragment>
  );
}

export default IranianCitizen;
