const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <div className="orb" />
      <div className="text-center">
        <p className="text-lg font-semibold">{text}</p>
        <p className="mt-2 text-sm text-slate-400">Please wait a moment...</p>
      </div>
      <div className="wave-bars">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Loader;