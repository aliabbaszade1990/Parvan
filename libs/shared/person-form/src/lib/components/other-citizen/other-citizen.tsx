import { Button, Divider, TextField, Autocomplete } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import trash from '../../../../../assets/src/lib/images/trash.svg';
// import styles from './other-citizen.module.scss';

interface ocFormInput {
  countryCitizen: string;
  passportNumber: string;
  selectPrefix: string;
  name: string;
  lastName: string;
  customerOtherLang: string;
  englishName: string;
  englishLastName: string;
  gender: string;
  phoneNumber: number;
  city: string;
  address: string | number;
  otherLangAddress: string | number;
  landlinePhone: number;
  postalCode: string | number;
  note: string | number;
}

/* eslint-disable-next-line */
export interface OtherCitizenProps {}

export function OtherCitizen(props: OtherCitizenProps) {
  const { register, handleSubmit, watch } = useForm<ocFormInput>();
  const onSubmit: SubmitHandler<ocFormInput> = (data) => console.log(data);
  return (
    <div style={{ marginBottom: 30 }}>
      <Divider style={{ marginBottom: 15 }} textAlign="left">اطلاعات هویتی</Divider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="outlined-basic"
            label="شهروند کشور*"
            variant="outlined"
            {...register('countryCitizen', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />
          <TextField
            id="outlined-basic"
            label="شناسه اتباع/شماره پاسپورت*"
            variant="outlined"
            {...register('passportNumber', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />
          <Button
            variant="contained"
            disabled
            style={{ marginTop: 10 }}
          >
            ادامه
          </Button>
        </div>

        <div className="flex" style={{ marginTop: 25 }}>
          <Autocomplete
            style={{ width: 150 }}
            disablePortal
            id="combo-box-demo"
            options={prefixData}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="پیشوند" />}
            className="!ml-4"
            {...register('selectPrefix', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
          />
          <TextField
            id="outlined-basic"
            label="نام*"
            variant="outlined"
            {...register('name', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />

          <TextField
            id="outlined-basic"
            label="نام خانوادگی*"
            variant="outlined"
            {...register('lastName', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />

          <Stack spacing={2} sx={{ width: 250 }}>
            <Autocomplete
              id="size-small-filled"
              size="small"
              options={customerLang}
              getOptionLabel={(option) => option.title}
              disabled
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option.title}
                    size="small"
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="نام مشتری به زبان دیگر"
                />
              )}
            />
          </Stack>
        </div>

        {/* <div className='flex' style= {{marginTop: 20, marginRight: '11.8%'}}>
          <img src={trash} alt="no images" style={{cursor: 'pointer', height: 27, marginTop: 14}} className="!ml-4"/>
          <TextField
            id="outlined-basic"
            label="نام انگلیسی"
            variant="outlined"
            {...register('englishName', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />

          <TextField
            id="outlined-basic"
            label="نام خانوادگی انگلیسی"
            variant="outlined"
            {...register('englishLastName', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />

          <Stack spacing={2} sx={{ width: 250 }}>
            <Autocomplete
              id="size-small-filled"
              size="small"
              options={customerLang}
              {...register('customerOtherLang', {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              getOptionLabel={(option) => option.title}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option.title}
                    size="small"
                    {...getTagProps({ index })}
                    
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="نام مشتری به زبان دیگر"
                />
              )}
            />
          </Stack>
        </div> */}

        <div style={{ marginTop: 30 }}>
          <FormControl
          {...register('gender', {
            required: true,
            pattern: /^[0-9]{10}$/,
          })}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">جنسیت</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="مرد" control={<Radio />} label="مرد" />
              <FormControlLabel value="زن" control={<Radio />} label="زن" />
              <FormControlLabel value="سایر" control={<Radio />} label="سایر" />
            </RadioGroup>
          </FormControl>
        </div>
        <Divider style={{ marginBottom: 15, marginTop: 20}} textAlign="left">شماره های موبایل</Divider>
        <div>
        <TextField style={{ width: '50%'  }}
            id="outlined-basic"
            label="شماره های موبایل"
            variant="outlined"
            {...register('phoneNumber', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
          />
        </div>
        <Divider style={{ marginBottom: 15, marginTop: 20  }} textAlign="left">اطلاعات آدرس</Divider>
        <div className="flex" style={{ marginTop: 25 }}>
          <Autocomplete
            style={{ width: 220 }}
            disablePortal
            id="combo-box-demo"
            options={city}
            {...register('city', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="شهر*" />}
            className="!ml-4"
          />
          <TextField style={{width: '50%'}}
          id="outlined-multiline-static"
          label="آدرس*"
          multiline
          rows={2}
          {...register('address', {
            required: true,
            pattern: /^[0-9]{10}$/,
          })}
          className="!ml-4"
        />

          <Stack spacing={2} sx={{ width: 250}}>
            <Autocomplete style={{marginTop: 13}}
              id="size-small-filled"
              size="small"
              options={customerLang}
              {...register('otherLangAddress', {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              getOptionLabel={(option) => option.title}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option.title}
                    size="small"
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label=" آدرس به زبان دیگر"
                />
              )}
            />
          </Stack>
        </div>

        <div style={{marginRight: '22.8%', marginTop: 20}}>
          <TextField style={{width: '42.9%'}}
            id="outlined-basic"
            label="تلفن های ثابت"
            variant="outlined"
            {...register('landlinePhone', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />
            <TextField style={{width: 160}}
            id="outlined-basic"
            label="کد پستی*"
            variant="outlined"
            {...register('postalCode', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-4"
          />
            <div className='!mt-5'>
            <Button style={{width: '64.8%', backgroundColor: '#fad2f3', color: '#DB1B83'}}>+ آدرس جدید</Button>
            </div>
          </div>
          <Divider style={{ marginBottom: 15, marginTop: 20}} textAlign="left">یادداشت</Divider>
          <div>
            <TextField style={{width: '85%'}}
            id="outlined-multiline-static"
            label="یادداشت"
            multiline
            rows={2}
            {...register('note', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="!ml-5"
            />
            <Button className='!mt-5'
            variant="contained"
            disabled={!watch('note')}
            style={{ marginTop: 10 }}
            >
              ذخیره اطلاعات
            </Button>
          </div>
      </form>
    </div>
  );
}
const prefixData = [{ label: 'دکتر' }, { label: 'مهندس' }];

const customerLang = [
  { title: 'فارسی' },
  { title: 'انگلیسی' },
  { title: 'فرانسه' },
  { title: 'چینی' },
];
const city = [
  { label: 'تهران' },
  { label: 'قم' },
  { label: 'کرج' },
  { label: 'قزوین' },
];

export default OtherCitizen;
