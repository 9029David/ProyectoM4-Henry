import Link from "next/link";

export const QuestionForm = ({href, question}: {href: string, question: string}) => (
    <Link className="text-blue-500 text-center text-sm font-medium hover:text-blue-600 hover:underline mt-1" href={href}>
        {question}
    </Link>
)