import DocumentoConstancia from "../../../components/documents/constancia"

export default function doc({params}){
    const slug = params.folio as number; 
    return(
        <>
            <DocumentoConstancia folio={slug}/>
        </>
    );
}