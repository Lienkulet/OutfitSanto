import Link from 'next/link';
import Container from './Container';
const Footer = () => {

  return (
    <footer
      className="
        border-t
        border-[oklch(0.11_0.04_310)]
        py-7
      "
    >
      <Container
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-4.5
          text-center
          lg:flex-row
        "
      >
        <Link
          href="#"
          className="
            text-[13px]
            font-bold
            tracking-[0.14em]
            text-(--text-muted)
            font-cinzel-decorative
          "
        >
          OUTFIT
          <span className="text-(--magenta-dim)">
            &nbsp;SANTO
          </span>
        </Link>

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[oklch(0.28_0.03_305)]
            font-cinzel
          "
        >
          © 2026 Outfit Santo. All rights reserved.
        </span>

        <ul
          className="
            flex
            list-none
            items-center
            gap-7
          "
        >
          {['Privacy', 'Terms', 'Contact', 'Instagram'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[oklch(0.34_0.04_310)]
                  transition-colors
                  duration-300
                  hover:text-(--magenta)
                  font-cinzel
                "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

export default Footer