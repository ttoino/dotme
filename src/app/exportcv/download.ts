"use server";

export async function download_cv(cvData: any) {
  fetch("http://localhost:5050/generate_pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cvData,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch PDF");
      return res.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "generated.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.error("Error fetching PDF:", err);
    });
}
