const SplitLetter = ({ children, className }) => {
  return (
    <>
      {String(children)
        .split(' ')
        .map((word, i) => (
          <span key={i}>
            {word.split('').map((letter, j) => (
              <span
                key={j}
                className={`${className} about-letter text-gray-300`}
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
    </>
  );
};

export default SplitLetter;
