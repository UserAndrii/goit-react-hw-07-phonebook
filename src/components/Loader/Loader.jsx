import { FallingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <FallingLines
        color="#ef8354"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Wrapper>
  );
};

export default Loader;
