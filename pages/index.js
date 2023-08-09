import PropTypes from 'prop-types';

import { getLayoutData } from '@/utils/getLayoutData';
import HomeLayout from '@/components/HomeLayout';

function Home(props) {
  return <HomeLayout {...props} />;
}

Home.propTypes = {
  page: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const layoutData = await getLayoutData();

  return {
    props: {
      page: layoutData.home,
    },
    revalidate: 60,
  };
}

export default Home;