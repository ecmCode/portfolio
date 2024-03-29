import aboutme from "@/assets/aboutme.json";

const Paragraphs = () => {
  return (
    <div
      data-testid="paragraphs"
      className="w-full md:w-4/5 lg:w-1/2 flex flex-col gap-10 p-16"
    >
      {aboutme.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default Paragraphs;
