import styles from "./DetailBoxComponent.module.scss";

interface DetailBoxComponentProps {
  title: string;
  children: React.ReactNode;
}

const DetailBoxComponent: React.FC<DetailBoxComponentProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.detail_box}>
      <div className={styles.detail_box__title}>
        <h1>{title}</h1>
        <span className={styles.detail_box__title__line}></span>
      </div>
      {children}
    </div>
  );
};

export default DetailBoxComponent;
