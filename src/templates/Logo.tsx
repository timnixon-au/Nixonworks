import Image from 'next/image';
import { AppConfig } from '../utils/AppConfig';
import NixonworksLogo from "./../../public/assets/images/logo.png"

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const height = props.xl ? '44' : '32';
  const width = props.xl ? '88' : '64';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image src={NixonworksLogo} width={width} height={height}/>
    </span>
  );
};

export { Logo };
