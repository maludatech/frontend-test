export const CTASection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div>
        <h1>Spots fill fast. Next term starts soon.</h1>
        <h2>
          Book at least a week before the term starts to secure your
          child&apos;s place.
        </h2>
      </div>
      <div className="flex gap-2">
        <button>Show me the schedule</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};
