// app/page.tsx
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
export default function Page() {
  return (
    <Stack sx={{ p: 2 }}>
      <ButtonGroup>
        <Button variant="contained" color="primary">
          ویرایش
        </Button>
        <Button variant="contained" color="warning">
          حذف
        </Button>
        <Button variant="contained" color="warning">
          تثبیت
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
