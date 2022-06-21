import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>

      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Take your business to new heights</span>
          </>
        }
        description="Nixonworks can deliver the website you need"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Click here to find out how</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
