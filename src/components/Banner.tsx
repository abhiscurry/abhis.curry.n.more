import styles from "./Banner.module.scss";

interface Props {
  position: string;
}

const Banner = ({ position }: Props) => {
  const color = position == "top" ? styles.orange : styles.green;
  return <div className={color}></div>;
};

export default Banner;
