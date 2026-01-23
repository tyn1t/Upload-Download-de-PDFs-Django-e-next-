"use client";

import Upload from "./components/Upload";
import Download from "./components/DownLoad";
import { useState } from "react";


export default function Home() {

  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <main className="flex flex-col items-center my-10">
      <h1 className="font-bold text-center text-4xl mb-10">
        Upload & Download  pfd
      </h1>

      <section className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-stretch w-full max-w-6xl px-4">
        <Upload onSuccess={() => setRefreshKey((k) => k + 1)} />
        <Download refreshKey={refreshKey} />
      </section>
    </main>
  );
}
