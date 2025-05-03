export async function download_cv(cvData: any) {
  console.log("Downloading CV with data:", cvData);

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
      console.log("Response from server:", res);

      if (!res.ok) throw new Error("Failed to fetch PDF");
      return res.blob();
    })
    .then((blob) => {
      console.log("Blob received:", blob);
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
      console.error("Error fetching PDF:", err);
    });
}
