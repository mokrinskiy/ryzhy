import { poems } from "@/content/poems";

interface PageProps {
    params: { slug: string };
}

// Генерируем статические пути, чтобы Next.js понимал, какие страницы создавать заранее
export function generateStaticParams() {
    return poems.map((_, index) => ({
        slug: (index + 1).toString(),
    }));
}

const Page = ({ params }: PageProps) => {
    // Преобразуем slug в число
    const slug = Number(params.slug);

    // Проверяем, существует ли стихотворение
    if (isNaN(slug) || slug < 1 || slug > poems.length) {
        return (
            <p className="text-center text-red-500">Стихотворение не найдено</p>
        );
    }

    const item = poems[slug - 1];

    return (
        <div className="w-full h-auto py-[50px] flex justify-center items-center max-md:px-[10px] overflow-hidden">
            <div className="flex flex-col items-center px-[10px]">
                <h1 className="text-xl">{item.title}</h1>
                <div>
                    <p
                        className="mt-[20px] text-base whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                            __html: item.text.replace(/\n/g, "<br />"),
                        }}
                    />
                    {item.year && (
                        <p className="mt-[10px] text-sm text-accent w-full">
                            {item.year} год
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
