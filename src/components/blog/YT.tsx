interface IYT {
  id: string;
}

export default function YT({ id }: IYT) {
  return (
    <iframe
      width="100%"
      height="450"
      src={`https://www.youtube.com/embed/${id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media' gyroscope; picture-in-picture;"
    ></iframe>
  );
}
