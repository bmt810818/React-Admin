import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Title } from 'react-admin'

const Dashboard = () => (
  <Card>
    <Title title="Welcome to the administration" />
    <CardContent>Toan bui...</CardContent>
  </Card>
);

Dashboard.displayName = 'WelcomeCard';

export default Dashboard;
