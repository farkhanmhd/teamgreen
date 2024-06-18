const SplitWord = ({ children, className }) => {
  return (
    <>
      {String(children)
        .split(' ')
        .map((word, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <span className={`${className} inline-block`}>{word}</span>
          </span>
        ))}
    </>
  );
};

export default SplitWord;
