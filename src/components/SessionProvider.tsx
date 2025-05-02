'use client';
 
import { User } from '@/types/user';
import { createContext, useContext, ReactNode } from 'react';
 
type SessionContextType = {
  sessionPromise: Promise<User | null>;
};
 
const SessionContext = createContext<SessionContextType | null>(null);
 
export function useSession(): SessionContextType {
  const context = useContext(SessionContext);
  if (context === null) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
 
export function SessionProvider({
  children,
  sessionPromise
}: {
  children: ReactNode;
  sessionPromise: Promise<User | null>;
}) {
  return (
    <SessionContext.Provider value={{ sessionPromise }}>
      {children}
    </SessionContext.Provider>
  );
}
