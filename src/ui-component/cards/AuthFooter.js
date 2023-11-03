// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://agency.mobicash.rw/" target="_blank" underline="hover">
      Agency Banking
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://agency.mobicash.rw/" target="_blank" underline="hover">
      &copy; agency.mobicash.rw
    </Typography>
  </Stack>
);

export default AuthFooter;
