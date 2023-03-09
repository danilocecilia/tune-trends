import { redirect } from 'next/navigation';
import { Inter } from '@next/font/google';
import { getCurrentUser } from '@/lib/session';
import { authOptions } from '@/lib/auth';
// import styles from "./page.module.css";
// import { useSession } from "next-auth/react";
// import Login from "./login/page";
// import { useApp } from "./hooks/useApp";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function App({ children }) {
  // const app = useApp();
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }

  return <div>MAIN PAGE</div>;
}
