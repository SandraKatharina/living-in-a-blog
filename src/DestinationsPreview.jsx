import DestinationCard from "./DestinationCard";

function DestinationsPreview({ destinations }) {
  return (
    <div className="flex-no-wrap scrolling-touch mb-8 flex items-start overflow-x-scroll bg-desert">
      <DestinationCard destinations={destinations} />
    </div>
  );
}
export default DestinationsPreview;
