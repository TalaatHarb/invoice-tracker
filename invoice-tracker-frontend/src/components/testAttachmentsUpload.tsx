import { useState } from "react";
import { toast } from "react-toastify";
import { SERVER, TWENTY_MEGAS } from "../utils/config";
import { isValidAttachmentType } from "../utils/helper";

function TestAttachmentUpload() {
  const [attachments, setAttachments] = useState([] as File[]);
  const handleFileChange = async (e: any) => {
    const formData = new FormData();
    setAttachments([]);
    const { files }: { files: File[] } = e.target;

    let filesTotalSize = 0;

    for (const file of files) {
      // console.log(file);
      const { type } = file;
      if (isValidAttachmentType(file.type)) {
        toast.error("please enter only an image or a document");
        return;
      }
      filesTotalSize += file.size;
      console.log(file.type);
      formData.append("attachments", file);
    }
    if (filesTotalSize > TWENTY_MEGAS) {
      toast.error("Attachments exceeded 20 mb");
    }
    console.log(filesTotalSize);

    await fetch(`${SERVER}/api/attachments/upload`, {
      method: "POST",
      body: formData,
    });
  };

  return <input type="file" multiple onChange={handleFileChange} />;
}
