const SplitWord = ({ children, className }) => {
  return (
    <>
      {String(children)
        .split(' ')
        .map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden text-white mix-blend-difference"
          >
            <span className={`${className} inline-block`}>{word}</span>
          </span>
        ))}
    </>
  );
};

export default SplitWord;
