import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employee Dashboard - HRM System',
  description: 'Employee self-service dashboard for attendance, tasks, and performance tracking',
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 