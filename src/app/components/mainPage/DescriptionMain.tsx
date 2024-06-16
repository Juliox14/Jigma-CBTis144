export default function DescriptionMain({titulo, description}) {
    return (
        <article className="lg:flex lg:flex-col lg:items-center">
            <h2 className="text-3xl font-semibold text-gray-800 text-center my-8">{titulo}</h2>
            <p className="text-gray-600 text-center lg:w-[80%]">{description}</p>
        </article>
    );
}