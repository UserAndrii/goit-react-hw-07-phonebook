import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { Wrapper } from './Loader.styled';

const Loader = ({ width = '40' }) => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </Wrapper>
  );
};

Loader.propTypes = {
  width: PropTypes.string,
};

export default Loader;
