const FeedbackCard = () => {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">AI Feedback</h3>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
          8/10
        </span>
      </div>

      <p className="mb-4 text-slate-300">
        Good explanation overall. You communicated clearly and answered the core concept correctly.
      </p>

      <div className="space-y-2 text-sm text-slate-400">
        <p>• Strong clarity and decent structure</p>
        <p>• Add one real-world example for stronger impact</p>
        <p>• Slightly improve technical depth</p>
      </div>
    </div>
  );
};

export default FeedbackCard;