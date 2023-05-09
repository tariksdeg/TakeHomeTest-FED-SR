import Sidebar from "../app/components/SideBar";
import Header from "../app/components/Header";
import Main from "../app/components/Main";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="bg-gray-300 w-[5%]">
        <Sidebar />
      </div>
      <div className=" w-full px-5 flex flex-col">
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </main>
  );
}
