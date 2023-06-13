import { Dna } from 'react-loader-spinner';
import css from './Loader.module.scss';

//анімація завантаження
const Loader = () => {
  return (
    <div className={css['overlay']}>
     <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
    </div>
  );
};

export default Loader;
