import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex">
      <aside className="h-full w-60 border-r border-gray-300">
        <p>Side bar </p>
      </aside>

      <section className="w-full ">
        {/* header  */}
      <header  className="h-14  border-b border-gray-300 shadow">
        <p>Admin header</p>
      </header>

      <section>{children}</section>
      </section>
    </main>
  );
};

export default AdminLayout;
