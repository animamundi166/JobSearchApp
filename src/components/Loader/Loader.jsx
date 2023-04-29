import styles from './Loader.module.scss';
import { ReactComponent as Spinner } from '../../assets/Loading.svg';

const Loader = () => <Spinner className={styles.loader} />;
export default Loader;
