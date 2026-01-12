// Helper untuk format tanggal Indonesia
export const formatDate = (isoString: string): string => {
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};