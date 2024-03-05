import "./app.scss";
import LandingPageSection from "./components/landing/LandingPageSection";

const UserData: User = {
  name: "Ivan",
  surname: "Ivic",
  image: "/profile-image.jpg",
  birth: "01.02.2003.",
  address: "Splitska 11",
  contact: "+385 91 123 4567",
  ability: [
    {
      name: "HTML",
      knowledge: 100,
    },
    {
      name: "CSS",
      knowledge: 90,
    },
    {
      name: "JavaScript",
      knowledge: 75,
    },
  ],
};

function App() {
  return (
    <>
      <LandingPageSection user={UserData} />
    </>
  );
}

export default App;
