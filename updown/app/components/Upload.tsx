"use client";

import { useState } from "react";


type Props = {
  onSuccess: () => void;
};

export default function Upload({ onSuccess }: Props) {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!file) return;

        setLoading(true);
        setMessage("");

        const formData = new FormData();
        formData.append("pdf", file);
        
        const res = await fetch("http://localhost:8000/core/pdf/", 
            { 
                method: "POST", 
                body: formData,
                
            }
        );
        
        if (res.ok) {
            onSuccess(); // 🔥 dispara "F5 inteligente"
        }
        // const res = await fetch("/api/upload", {
        // method: "POST",
        // body: formData,
        // });

        const data = await res.json();
        
        
        setLoading(false);
        setMessage(data.message || "Upload finalizado");
    }

    return (
        <div className="flex flex-col mx-auto my-10 w-full max-w-md">
        <h2 className="font-bold text-3xl my-6 text-center">Upload</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="bg-gray-50 text-gray-700 p-2"
            />

            <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
            {loading ? "Enviando..." : "Upload"}
            </button>

            {message && (
            <p className="text-center text-sm text-green-600">
                {message}
            </p>
            )}
        </form>
        </div>
    );
}
