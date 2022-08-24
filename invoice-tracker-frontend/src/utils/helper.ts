// containes helper functions

export function isValidAttachmentType(type:string){
    return (!(type == "image/png" || type == "image/jpeg" || type == "application/pdf" || type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"));
}