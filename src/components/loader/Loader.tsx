import './loader.scss';
import { Spinner } from '../spinner';

 const Loader = () => {
  return (
    <div className="loader">
      <Spinner />
    </div>
  );
};

export {Loader}