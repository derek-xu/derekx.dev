export default function HomePage() {
  return (
    <div>
      <h2>
        HELLO, I'M DEREK<span className="animate-caret-blink">.</span>
      </h2>

      <p>
        i'm 20 years old, from{" "}
        <a href="https://maps.app.goo.gl/moffoZtjTWoZZeXS8">toronto</a>. <br />i
        study computer science @ the university of waterloo
      </p>

      <h4>WHERE I'VE WORKED:</h4>

      <ul>
        <li>
          <a href="https://www.shopify.com" target="_blank" rel="noreferrer">
            shopify
          </a>{" "}
          - software engineer intern
        </li>
        <li>
          <a href="https://yuzu.health" target="_blank" rel="noreferrer">
            yuzu.health
          </a>{" "}
          - software engineer intern
        </li>
        <li>
          <a href="https://untether.ai" target="_blank" rel="noreferrer">
            untether.ai
          </a>{" "}
          - product engineer intern
        </li>
      </ul>

      <h4>COOL THINGS I'VE BUILT:</h4>

      <ul>
        <li>this little website</li>
      </ul>

      <h4>DIRECTORY:</h4>

      <ul>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
    </div>
  );
}
