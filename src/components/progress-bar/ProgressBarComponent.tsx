import styles from "./ProgressBarComponent.module.scss";

interface ProgressBarComponentProps {
  title: string;
  ability: number;
}

const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({
  title,
  ability,
}) => {
  let barStyle = {
    width: `${ability}%`,
  };

  return (
    <div className={styles.progress_bar_box}>
      <h1>{title}</h1>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar__line} style={barStyle}>
          <p>{ability}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
