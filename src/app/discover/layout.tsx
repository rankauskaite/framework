export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-grow flex justify-center items-center h-screen">
            <div className="flex justify-center flex-col md:flex-row w-full p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    );
  }