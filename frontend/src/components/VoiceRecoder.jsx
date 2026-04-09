import Button from "./Button";

const VoiceRecorder = () => {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="mb-6 flex items-center justify-center">
        <div className="orb h-32 w-32" />
      </div>

      <div className="mb-4 flex justify-center">
        <div className="wave-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <p className="mb-6 text-center text-sm text-slate-400">
        Listening to your answer...
      </p>

      <div className="flex justify-center gap-4">
        <Button className="px-6">Start</Button>
        <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white hover:bg-white/10">
          Stop
        </button>
      </div>
    </div>
  );
};

export default VoiceRecorder;