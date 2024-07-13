type Props = {};

export default function Header({}: Props) {
  return (
    <div className="relative flex w-full h-[90px] items-center justify-center border-b border-garyccc">
      <div
        className="absolute flex items-center justify-center w-[50px] h-[50px] top-[50%] left-0 p-2"
        style={{ translate: `0 -50%` }}
      >
        <div className="w-full h-[1px] bg-black before:w-full before:h-[1px] before:bg-black before:content-['*']"></div>
      </div>
      <img
        className="w-[30px] h-[30px] object-contain"
        src="/img/weblogo_circle_bk.png"
      />
    </div>
  );
}
