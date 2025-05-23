import React from "react";
import {
  Notifications,
  MyCourses,
  MyDepartments,
  MyChurch,
  Highlights,
  Calendar,
  Links,
} from "../components/home";
import { ProfileCard } from "../components/Profile";

function MainContent() {
  return (
    <main className="p-6 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
      <div className="md:col-span-2 space-y-1">
        <Notifications />
        <MyCourses />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <MyDepartments />
          <MyChurch />
        </div>
      <div className="">
        <Links />
      </div>
      </div>
      <aside className="flex flex-col space-y-2">
        <Highlights />
        <Calendar />
        <ProfileCard />
      </aside>
    </main>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <MainContent />
    </div>
  );
}
