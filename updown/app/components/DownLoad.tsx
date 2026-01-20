"use client";

import { useEffect, useState } from "react";

type FileItem = {
    id: number;
    name: string;
    pdf: string;
};

type Props = {
    refreshKey: number;
};

export default function Download({refreshKey}: Props) {

    const [files, setFiles] = useState<FileItem[]>([]);

    useEffect(() => {
        async function loadFiles() {
            try {
                const res = await fetch("http://localhost:8000/core/pdf/", {
                    method: "GET",
                });
                const data = await res.json();
                console.log(data);
                setFiles(data);
            } catch (error) {
            console.error(error);
            }
        }

        loadFiles();
    }, [refreshKey]);
    
    return (
        <div className="flex flex-col  mx-auto my-10 w-full max-w-md">
            <h2 className="font-bold text-3xl text-center my-6 ">
                Downloads
            </h2>
            

            <ul className="flex flex-col gap-1 ">
                {files.map((link, index) => (
                <li key={index}>
                    <a
                    href={link.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block  w-full break-all transition"
                    >
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
}
