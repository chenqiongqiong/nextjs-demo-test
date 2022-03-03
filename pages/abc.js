import Link from 'next/link';
import { useEffect } from 'react'

export default function Abc() {
  useEffect(() => {
    console.error('error from abc component');
  });
  return (
    <div className="container">
      <Link href="/">/</Link>
      <div>1</div>
      <Link href="/abc">abc</Link>
      abc
    </div>
  )
}