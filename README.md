
## 👉 Get Started
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```
Run the development server
```
npm run dev
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Next.js](https://nextjs.org)
- UI Kit - [Bootstrap](https://react-bootstrap.github.io)
- Hosting - [Vercel](https://vercel.com)


## 📚 Guide
<details>
<summary><b>Styles</b></summary>
<p>
  You can edit Bootstrap SASS variables in the global stylesheet located at <code><a href="src/styles/global.scss">src/styles/global.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bootstrap elements with custom style check the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap docs</a> to see if you can do what need by tweaking a SASS variable.
</p>
<p>
  Custom styles are located in their related component's directory. For example, if any custom style is applied to the Navbar component you'll find it in <code>src/components/Navbar.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places.
</p>
</details>

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses the built-in Next.js router and its convenient <code>useRouter</code> hook. Learn more in the <a target="_blank" href="https://github.com/zeit/next.js/#routing">Next.js docs</a>.

```js
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent(){
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname)

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link href="/about"><a>About</a></Link>
      <button onClick={(e) => router.push('/about')}>About</button>
    </div>
  );
}
```
</p>
</details>

undefined

undefined

<details>
<summary><b>Deployment</b></summary>
<p>
Install the Vercel CLI

```
npm install -g vercel
```

Add each variable from `.env` to your Vercel project with the following command. You'll be prompted to enter its value and then choose one or more environments (development, preview, or production).
<a target="_blank" href="https://vercel.com/docs/v2/build-step#environment-variables">Learn more here</a>.

```
vercel env add VARIABLE_NAME
```

Run this command to deploy a preview (for testing a live deployment)

```
vercel
```

Run this command to deploy to production

```
vercel --prod
```

See the <a target="_blank" href="https://vercel.com/docs/v2/platform/deployments">Vercel docs</a> for more details.
</p>
</details>

  