import DetailBoxComponent from "../detail-box/DetailBoxComponent";
import ProgressBarComponent from "../progress-bar/ProgressBarComponent";
import styles from "./LandingPageSection.module.scss";

interface LandingPageSectionProps {
  user: User;
}

const LandingPageSection: React.FC<LandingPageSectionProps> = ({ user }) => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.landing_profile}>
          <h1>
            <span>{user.name}</span> {user.surname}
          </h1>
          <div className={styles.landing_profile__image}>
            <img src={user.image} alt="profile-image" />
          </div>
        </section>
        <section className={styles.landing_profile_details_cards}>
          <DetailBoxComponent title="Opći podaci">
            <ul className={styles.profile_bio}>
              <li>
                Datum rođenja: <span>{user.birth}</span>
              </li>
              <li>
                Adresa: <span>{user.address}</span>
              </li>
              <li>
                Kontakt: <span>{user.contact}</span>
              </li>
            </ul>
          </DetailBoxComponent>
          <DetailBoxComponent title="Sposobnosti">
            <div className={styles.abilitys_box}>
              {user.ability.map((data) => {
                return (
                  <ProgressBarComponent
                    title={data.name}
                    ability={data.knowledge}
                  />
                );
              })}
            </div>
          </DetailBoxComponent>
        </section>
      </div>
    </>
  );
};

export default LandingPageSection;
