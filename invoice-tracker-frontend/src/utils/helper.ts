// containes helper functions

export function isValidAttachmentType(type: string) {
  return !(
    type == 'image/png' ||
    type == 'image/jpeg' ||
    type == 'application/pdf' ||
    type ==
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  )
}

export const downloadFiles = async (downloadLink: string, attachmentName: string, token:string) => {
    

  const config = {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  }

  const response = await fetch(downloadLink, config)
  const data = await response.blob();
  const a = document.createElement("a");
  const url = window.URL.createObjectURL(data);
  a.href = url;
  a.download = attachmentName;
  a.click();
  window.URL.revokeObjectURL(url);
}
