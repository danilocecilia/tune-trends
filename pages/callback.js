import { useRouter } from 'next/router';
import React from 'react';

export const Callback = () => {
  const router = useRouter();
  console.log('router', router);
  return <div>Callback</div>;
};

export default Callback;
