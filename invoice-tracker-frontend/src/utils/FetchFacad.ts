// handling get and post requests


export class FetchFacad{
    private static fetchFacad:FetchFacad|null;

    public static getFetchFacad(){
        if(this.fetchFacad == null){
            this.fetchFacad = new FetchFacad();
        }

        return this.fetchFacad;
    }

    async getData<ReturnType>(url:string):Promise<ReturnType>{
        const response = await fetch(url, {
            // headers
        });
        const result = await response.json();
        return result as ReturnType;
    }

    async postData<DataType, ReturnType>(url:string, data:DataType):Promise<ReturnType>{
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        
        return result as ReturnType;
    }

    // almost the same as postData, the only difference is the method, leave it for later, #error with cors policy
    // async putData<DataType, ReturnType>(url:string, data:DataType):Promise<ReturnType>{
    //     const response = await fetch(url,{
    //         method:"POST",
    //         body:JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     const result = await response.json();
        
    //     return result as ReturnType;
    // }
}
