import {
  Button,
  Divider,
  TextField,
  Autocomplete,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import trash from '../../../../../assets/src/lib/images/trash.svg';
// import styles from './organization.module.scss';

interface OFormInput {
  nationalID: string;
  selectPrefix: string;
  name: string;
  officialName: string;
  customerOtherLang: string;
  englishName: string;
  englishOfficialName: string;
  interfaceName: string;
  organizationPos: string;
  phoneNumber: number;
  city: string;
  address: string | number;
  otherLangAddress: string | number;
  landlinePhone: number;
  postalCode: string | number;
  note: string | number;
}

/* eslint-disable-next-line */
export interface OrganizationProps {}

export function Organization(props: OrganizationProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OFormInput>();
  const onSubmit: SubmitHandler<OFormInput> = (data) => console.log(data);

  const [showAdditionalForm, setShowAdditionalForm] = useState(false);

  function handleButtonClick() {
    setShowAdditionalForm(true);
  }

  return (
    <div style={{ marginBottom: 30 }}>
      <Divider style={{ marginBottom: 15 }} textAlign="left">
        اطلاعات هویتی
      </Divider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="outlined-basic"
            label="شناسه ملی*"
            variant="outlined"
            {...register('nationalID', { required: 'شناسه ملی را وارد کنید' })}
            error={Boolean(errors.nationalID)}
            helperText={errors.nationalID?.message}
            className="!ml-4"
          />
          <Button
            variant="contained"
            disabled={!watch('nationalID')}
            style={{ marginTop: 10 }}
            onClick={handleButtonClick}
          >
            ادامه
          </Button>
        </div>
        {showAdditionalForm && (
          <div className="ContainerForm">
            <div className="flex" style={{ marginTop: 25 }}>
              <Autocomplete
                style={{ width: 150 }}
                disablePortal
                id="combo-box-demo"
                options={prefixData}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="پیشوند" />
                )}
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
                {...register('name', { required: 'نام خود را وارد کنید' })}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
                className="!ml-4"
              />

              <TextField
                id="outlined-basic"
                label="نام رسمی*"
                variant="outlined"
                {...register('officialName', {
                  required: 'نام رسمی را وارد کنید',
                })}
                error={Boolean(errors.officialName)}
                helperText={errors.officialName?.message}
                className="!ml-4"
              />

              <Stack spacing={2} sx={{ width: 250 }}>
                <Autocomplete
                  id="size-small-filled"
                  size="small"
                  options={customerLang}
                  getOptionLabel={(option) => option.title}
                  {...register('customerOtherLang', {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
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
            label="نام رسمی انگلیسی"
            variant="outlined"
            {...register('englishOfficialName', {
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
              {...register('customerOtherLang', {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
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

            <Divider
              style={{ marginBottom: 15, marginTop: 20 }}
              textAlign="left"
            >
              اشخاص مرتبط
            </Divider>
            <div className="flex">
              <img
                src={trash}
                alt="no images"
                style={{ cursor: 'pointer', height: 27, marginTop: 14 }}
                className="!ml-4"
              />
              <TextField
                id="outlined-basic"
                label="نام رابط*"
                variant="outlined"
                {...register('interfaceName', {
                  required: 'نام رابط را وارد کنید',
                })}
                error={Boolean(errors.interfaceName)}
                helperText={errors.interfaceName?.message}
                className="!ml-4"
              />
              <TextField
                id="outlined-basic"
                label="سمت در سازمان"
                variant="outlined"
                {...register('organizationPos', {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                className="!ml-4"
              />
              <TextField
                style={{ width: '35%' }}
                id="outlined-basic"
                label="شماره های تماس"
                variant="outlined"
                {...register('phoneNumber', {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                className="!ml-4"
              />
              <Button
                style={{
                  backgroundColor: '#DB1B83',
                  color: 'white',
                  height: 35,
                  marginTop: 10,
                }}
              >
                + افزودن رابط
              </Button>
            </div>
            <Divider
              style={{ marginBottom: 15, marginTop: 20 }}
              textAlign="left"
            >
              اطلاعات آدرس
            </Divider>
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
              <TextField
                style={{ width: '50%' }}
                id="outlined-multiline-static"
                label="آدرس*"
                multiline
                rows={2}
                {...register('address', { required: 'آدرس را پر کنید' })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
                className="!ml-4"
              />

              <Stack spacing={2} sx={{ width: 250 }}>
                <Autocomplete
                  style={{ marginTop: 13 }}
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

            <div style={{ marginRight: '22.8%', marginTop: 20 }}>
              <TextField
                style={{ width: '42.9%' }}
                id="outlined-basic"
                label="تلفن های ثابت"
                variant="outlined"
                {...register('landlinePhone', {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                className="!ml-4"
              />
              <TextField
                style={{ width: 160 }}
                id="outlined-basic"
                label="کد پستی*"
                variant="outlined"
                {...register('postalCode', {
                  required: 'کد پستی را وارد کنید',
                })}
                error={Boolean(errors.postalCode)}
                helperText={errors.postalCode?.message}
                className="!ml-4"
              />
              <div className="!mt-5">
                <Button
                  style={{
                    width: '64.8%',
                    backgroundColor: '#fad2f3',
                    color: '#DB1B83',
                  }}
                >
                  + آدرس جدید
                </Button>
              </div>
            </div>
            <Divider
              style={{ marginBottom: 15, marginTop: 20 }}
              textAlign="left"
            >
              یادداشت
            </Divider>
            <div>
              <TextField
                style={{ width: '85%' }}
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
              <Button
                className="!mt-5"
                variant="contained"
                type="submit"
                style={{ marginTop: 10 }}
              >
                ذخیره اطلاعات
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
const prefixData = [
  { label: 'شرکت' },
  { label: 'موسسه' },
  { label: 'دفتر' },
  { label: 'سازمان' },
];

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

export default Organization;
