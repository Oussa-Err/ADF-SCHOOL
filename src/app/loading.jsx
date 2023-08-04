const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin text-white">↺</div>
      <div className=" bg-slate-700 h-32 w-64 rounded-lg flex justify-center items-center">
        <div className="text-white">Chargement... Veuillez patienter.</div>
      </div>
    </div>
  );
};

export default Loading;
