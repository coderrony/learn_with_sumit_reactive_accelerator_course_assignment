function Steps({ steps }) {
  return (
    <section>
      <div className="container py-12">
        <h3 className="font-semibold text-xl py-6">How to Make it</h3>
        {steps?.map((item, index) => (
          <div className="step" key={item}>
            <h3>Step {index + 1}</h3>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;
