import { Route } from "wouter";
import DestinationCard from "./DestinationCard";
import AboutPage from "./AboutPage";
import DestinationDetail from "./DestinationDetail";

function MainContent({ destinations }) {
  return (
    <div>
      <Route path={"/home"}>
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
        <form className="">
          <h1>Add a new destination</h1>
          <input
            type="text"
            placeholder="Image Source"
            id="imageInput"
            class="inputField"
          />
          <br />
          <input
            type="text"
            placeholder="City"
            id="inputCity"
            class="inputField"
          />
          <br />
          <input
            type="text"
            placeholder="Title"
            id="inputTitle"
            class="inputField"
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            id="inputDescription"
            class="inputField"
          />
          <br />
          <input
            type="text"
            placeholder="Country"
            id="inputCountry"
            class="inputField"
          />
          <br />
          <input
            type="text"
            placeholder="Date"
            id="inputDate"
            class="inputField"
          />
          <br />
          <button type="button" inputType="reset" id="addButton" class="button">
            ADD DESTINATION
          </button>
        </form>
      </Route>
      <Route path="/contact">Contact Page</Route>
      <Route path={destinations.target}>
        <DestinationDetail destinations={destinations} />
      </Route>
    </div>
  );
}
export default MainContent;
