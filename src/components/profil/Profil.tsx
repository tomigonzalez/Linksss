const Profil = () => {
  const font = { fontFamily: "Kanit, sans-serif", fontSize: "1.5rem" };
  return (
    <section className="w-auto h-auto flex flex-col items-center mt-4">
      <div className="w-28 h-28 bg-none ">
        <img src="este.png " alt="Tomas Gonzalez" className="rounded-full" />
      </div>
      <div className="text-white">
        <h1 className="" style={font}>
          Tomas Gonzalez
        </h1>
        <h2 className="">Desarrollador web</h2>
      </div>
    </section>
  );
};

export default Profil;
