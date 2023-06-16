import { Route } from "wouter";
import DestinationCard from "./DestinationCard";
import AboutPage from "./AboutPage";
import DestinationDetail from "./DestinationDetail";
import NewDestinationForm from "./NewDestinationForm";

function MainContent({ destinations }) {
  return (
    <div>
      <Route path="/home">
        <div className="flex-no-wrap scrolling-touch mb-8 flex items-start overflow-x-scroll bg-desert">
          <DestinationCard destinations={destinations} />
        </div>
      </Route>
      <Route path="/login">
        <input
          name="author"
          placeholder="YOUR NAME"
          className="w-40 rounded-md bg-white"
        ></input>
        <input
          name="password"
          placeholder="YOUR PASSWORD"
          className="w-40 rounded-md bg-white"
        ></input>
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/newpost">
        <NewDestinationForm />
      </Route>
      <Route path="/contact">Contact Page</Route>
      <Route path={destinations.target}>
        <DestinationDetail destinations={destinations} />
      </Route>
    </div>
  );
}
export default MainContent;
