```javascript
// pages/about.js
import { Suspense } from 'react';

function About() {
  const { data, error } = useSWR('/api/data');

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {data.message}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <About/>
    </Suspense> 
  )
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