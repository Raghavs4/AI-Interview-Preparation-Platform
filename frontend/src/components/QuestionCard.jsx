const QuestionCard = ({ question = "Explain the difference between useEffect and useMemo in React." }) => {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
          AI Interviewer
        </span>
        <span className="text-sm text-slate-400">Question 3 / 8</span>
      </div>

      <h2 className="text-2xl font-semibold leading-relaxed">{question}</h2>
    </div>
  );
};

export default QuestionCard;