import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="https://avatars.githubusercontent.com/u/93758969?v=4"
        alt="logo"
        width={200}
        height={200}
      />

      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
