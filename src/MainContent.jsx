// import { Route } from "wouter";
import DestinationCard from "./DestinationCard";

function MainContent({ destinations }) {
  return (
    <div>
      {/* <Route path={"/home"}> */}
      <div className="flex-no-wrap scrolling-touch mb-8 flex items-start overflow-x-scroll bg-desert">
        <DestinationCard destinations={destinations} />
      </div>
      {/* </Route> */}
    </div>
  );
}
export default MainContent;
