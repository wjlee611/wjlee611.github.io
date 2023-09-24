export default function Background() {
  return (
    <div className="w-[200vw] h-[200vh] fixed -z-10 -top-64 -left-1/2 bg-gradient-to-tl from-slate-900 to-blue-900 flex items-center justify-center">
      <ul className="w-screen h-screen relative">
        <li className="absolute bottom-10 -left-20 w-2/3 aspect-square bg-blue-600 bg-opacity-10 rounded-full blur-xl"></li>
        <li className="absolute top-52 -right-10 w-96 aspect-square bg-blue-500 bg-opacity-10 rounded-full blur-xl"></li>
        <li className="absolute -top-full right-0 w-full aspect-square bg-cyan-600 bg-opacity-10 rounded-full blur-xl"></li>
      </ul>
    </div>
  );
}
