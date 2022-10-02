import type { NextPage } from 'next';
import { Layout } from '@/global/guides/Layout';
import { Content } from '@/components/Dashboard/ecossistem';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Dashboard;
