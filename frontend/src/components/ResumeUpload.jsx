const ResumeUpload = () => {
  return (
    <div className="glass rounded-3xl border border-dashed border-white/15 p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
        📄
      </div>
      <h3 className="text-lg font-semibold">Upload Resume</h3>
      <p className="mt-2 text-sm text-slate-400">Drag & drop your PDF resume here</p>
      <button className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
        Choose File
      </button>
    </div>
  );
};

export default ResumeUpload;