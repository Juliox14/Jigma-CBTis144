import DocumentoPermiso from "../../../components/documents/permiso";

export default function doc({params}){
    const slug = params.folio as number;

    return(
        <>
            <DocumentoPermiso folio={slug}/>
        </>
    );
}