import {
  HomeIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center gap-6">
        <h1 className="font-semibold text-red-700 text-2xl">Gossipers</h1>
        <HomeIcon className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
        <DocumentTextIcon className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
      </div>

      <div>
        <UserIcon className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Header;
