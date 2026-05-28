'use client';
import CartTrigger from '@/features/cart/components/CartTrigger';

const NavbarDesktop = () => {
    return (
        <nav
            className="
        fixed
        inset-x-0
        top-0
        z-100
        flex
        h-21
        items-center
        justify-between
        px-13
        max-[700px]:px-5
      "
            style={{
                background:
                    "linear-gradient(to bottom, oklch(0.04 0.03 305 / 0.92) 0%, transparent 100%)",
            }}
        >
            {/* Logo */}
            <a
                href="/"
                className="
          flex
          items-center
          gap-0
          no-underline
          text-[17px]
          font-extrabold
          tracking-[0.14em]
          text-(--text)
          font-cinzel-decorative
        "
            >
                OUTFIT

                <em
                    className="
            not-italic
            text-(--magenta)
          "
                >
                    &nbsp;SANTO
                </em>
            </a>

            {/* Center Links */}
            <ul
                className="
          flex
          list-none
          gap-11
          max-[700px]:hidden
        "
            >
                <li>
                    <a
                        href="/shop"
                        className="
              font-cinzel
              text-[10.5px]
              font-semibold
              uppercase
              tracking-[0.28em]
              no-underline
              transition-colors
              duration-300
            "
                        style={{
                            color: "var(--text-muted)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color =
                                "var(--magenta-bright)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color =
                                "var(--text-muted)";
                        }}
                    >
                        Collections
                    </a>
                </li>

                <li>
                    <a
                        href="/about"
                        className="
              font-cinzel
              text-[10.5px]
              font-semibold
              uppercase
              tracking-[0.28em]
              no-underline
              transition-colors
              duration-300
            "
                        style={{
                            color: "var(--text-muted)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color =
                                "var(--magenta-bright)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color =
                                "var(--text-muted)";
                        }}
                    >
                        About
                    </a>
                </li>
                 <li>
                    <a
                        href="/contact"
                        className="
              font-cinzel
              text-[10.5px]
              font-semibold
              uppercase
              tracking-[0.28em]
              no-underline
              transition-colors
              duration-300
            "
                        style={{
                            color: "var(--text-muted)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color =
                                "var(--magenta-bright)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color =
                                "var(--text-muted)";
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Right Side */}
            <div
                className="
          flex
          items-center
          gap-7
        "
            >
                <a
                    href="#"
                    className="
            font-cinzel
            text-[10.5px]
            tracking-[0.22em]
            no-underline
            transition-colors
            duration-300
          "
                    style={{
                        color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color =
                            "var(--magenta-bright)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                            "var(--text-muted)";
                    }}
                >
                    Search
                </a>

                <CartTrigger />
            </div>
        </nav>
    );
}

export default NavbarDesktop