```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a Hydration mismatch error if data fetching isn't handled correctly
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {data.message}</p>
    </div>
  );
}
```
```javascript
//pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  res.status(200).json({ message: 'Data from API' });
}
```