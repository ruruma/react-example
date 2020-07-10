import React, { useState, useEffect } from 'react';

export default function EffectHook() {
  const [prefItem, setStatus] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${prefItem}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [prefItem]);

  return (
    <div>
      <button onClick={() => setStatus('posts')}>Posts</button>
      <button onClick={() => setStatus('todos')}>Todos</button>
      <button onClick={() => setStatus('users')}>Users</button>
      <h1>{prefItem}</h1>
      {items.map((item) => {
        return <div key={item.id}>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
}
