"use client";

import { STATUS, X_API_KEY } from "@/utils";
import { CircularProgress } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFilePdf, FaRegFilePdf } from "react-icons/fa";
import { toast } from "react-toastify";

export const DropFile = () => {
  const { refresh } = useRouter();
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setLoading(true);
        const file = acceptedFiles[0];
        if (!file) return;
        const form = new FormData();
        form.append("file", file);
        const res = await fetch("/api/chatpdf", {
          method: "POST",
          headers: {
            "x-api-key": X_API_KEY,
          },
          body: form,
        });

        const data = await res.json();
        if (data.status === STATUS.OK) {
          toast(data.message || "Archivo subido correctamente", {
            type: "success",
          });
          refresh();
        } else {
          toast(data.message || "Error al subir el archivo", {
            type: "error",
          });
        }
      } catch (error) {
        toast("Error al subir el archivo", {
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    },
    [refresh]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps({
        className: clsx(
          "flex justify-center items-center flex-col w-full",
          "p-4 border-dashed border-2 border-gray-300 rounded-lg",
          "hover:border-primary hover:text-primary cursor-pointer",
          {
            "border-primary text-primary": isDragActive,
          }
        ),
      })}
    >
      <form>
        <input
          {...getInputProps()}
          disabled={loading}
          aria-label="input drop file"
        />
      </form>

      {loading ? (
        <>
          Espere un momento...
          <CircularProgress size="sm" />
        </>
      ) : isDragActive ? (
        <>
          Suelta el archivo aquí
          <FaFilePdf className="text-4xl" />
        </>
      ) : (
        <>
          Arrastra un archivo aquí
          <FaRegFilePdf className="text-4xl" />
        </>
      )}
    </div>
  );
};
