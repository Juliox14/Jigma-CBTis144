import DocumentoPermiso from "../../../components/documents/permiso";

export default function doc({params}){
    const slug = params.folio as number;
    console.log(slug);
    return(
        <>
            <DocumentoPermiso folio={slug}/>
        </>
    );
}