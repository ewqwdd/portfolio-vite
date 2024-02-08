import Spinner from "../Spinner/Spinner";

export default function MarqueeLoader() {
  return (
    <div className="h-6 mt-2 w-full flex justify-center">
      <Spinner className="h-4 w-4" />
    </div>
  );
}
