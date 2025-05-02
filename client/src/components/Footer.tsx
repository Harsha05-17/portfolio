export default function Footer() {
  return (
    <footer className="py-8 bg-[#121212] dark:bg-gray-200 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 dark:text-gray-600">&copy; {new Date().getFullYear()} Harshini B. All rights reserved.</p>
      </div>
    </footer>
  );
}
