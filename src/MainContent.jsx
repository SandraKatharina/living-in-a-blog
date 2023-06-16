import { Route } from "wouter";
import DestinationCard from "./DestinationCard";
import AboutPage from "./AboutPage";
import NewDestinationForm from "./NewDestinationForm";
import DestinationDetail from "./DestinationDetail";
import LoginForm from "./LoginForm";
import ContactPage from "./ContactPage";

function MainContent({ destinations }) {
  return (
    <div className="md:pt-28">
      <Route path="/home">
        <div className="flex-no-wrap scrolling-touch mb-8 flex items-start overflow-x-scroll md:flex-col md:overflow-y-scroll">
          <DestinationCard destinations={destinations} />
        </div>
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/newpost">
        <NewDestinationForm />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>

      <Route path={destinations.target}>
        {destinations.map((destination) => (
          <div key={destination.id} className="h-10 w-10">
            hello {destination.city}
          </div>
        ))}
      </Route>
    </div>
  );
}
export default MainContent;
