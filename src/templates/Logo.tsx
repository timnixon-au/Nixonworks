import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const height = '141';
  const width = '270';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image src='/assets/images/logo.png' width={width} height={height}/>
    </span>
  );
};

export { Logo };
