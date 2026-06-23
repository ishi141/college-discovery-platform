interface Props {
    title: string;
}

export default function EmptyState({
    title
}: Props) {

    return (

        <div className="text-center py-20">

            <h2 className="text-4xl font-bold text-gray-400">

                {title}

            </h2>

            <p className="text-gray-500 mt-4">

                Try changing the filters.

            </p>

        </div>

    );

}