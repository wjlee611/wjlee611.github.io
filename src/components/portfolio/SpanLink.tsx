interface ISpanLink {
  text: string;
  link: string;
}

export default function SpanLink({ text, link }: ISpanLink) {
  return (
    <a
      className="bg-black bg-opacity-40 rounded-md p-1"
      href={link}
      target="_blank"
    >
      <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-bold text-transparent">
        {text}
      </span>
    </a>
  );
}
